'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import path from 'path';

const PaintSchema = z.object({
  id: z.string(),
  image_url: z.string(),
  title: z.string(),
  description: z.string(),
  year: z.number(),
  size: z.string(),
  price: z.number(),
  stock: z.enum(['In stock', 'Out of stock'])
});

const CreatePainting = PaintSchema.omit({ id: true, date: true });
const UpdatePainting = PaintSchema.omit({ id: true, date: true });

export async function createPainting(formData: FormData) {
  
  const { image_url, title, description, year, size, price, stock } = CreatePainting.parse({
    image: formData.get('image'),
    title: formData.get('title'),
    description: formData.get('description'),
    year: formData.get('year'),
    size: formData.get('size'),
    price: formData.get('price'),
    stock: formData.get('stock'),
  });

  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO paintings (image_url, title, description, year, size, price, stock, date)
      VALUES (${image_url}, ${title}, ${description}, ${year}, ${size}, ${price}, ${stock}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database error: Failed to create painting.'
    };
  }

  revalidatePath('/dashboard/storage');
  redirect('/dashboard/storage');
}

export async function updatePainting(id: string, formData: FormData) {
  const { image_url, title, description, year, size, price, stock } = UpdatePainting.parse({
    image: formData.get('image'),
    title: formData.get('title'),
    description: formData.get('description'),
    year: formData.get('year'),
    size: formData.get('size'),
    price: formData.get('price'),
    stock: formData.get('stock'),
  });

  const amountInCents = price * 100;
  
  try {
    await sql`
      UPDATE paintings
      SET image_url = ${image_url}, title = ${title}, description = ${description}, year = ${year}, size = ${size}, price = ${amountInCents}, stock = ${stock}
      WHERE id = ${id}
    `;
  } catch (error) {
    return {
      message: 'Database error: Failed to update painting.'
    };
  }

  revalidatePath('/dashboard/storage');
  redirect('/dashboard/storage');
}

export async function deletePainting(id: string) {
  try {
    await sql`DELETE FROM paintings WHERE id = ${id}`;
    revalidatePath('/dashboard/storage');
    return { message: 'Deleted painting.' };
  } catch (error) {
    return { message: 'Database error: Failed to delete painting.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Credenciales no válidas.';
        default:
          return '¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.';
      }
    }
    throw error;
  }
}

export const getImages = async () => {
  try {
    const result = await sql`
      SELECT image_url
      FROM paintings
    `;

    const imageUrls = result.rows.map(row => {
      const imageUrl = row.image_url;
      return path.basename(imageUrl);
    });

    const validImageFilenames = imageUrls.filter(file =>
      /\.(png|jpe?g|gif|svg)$/.test(file.toLowerCase())
    );

    return validImageFilenames;
  } catch (error) {
    console.error('Error fetching images from database:', error);
    throw new Error('Failed to fetch images.');
  }
};