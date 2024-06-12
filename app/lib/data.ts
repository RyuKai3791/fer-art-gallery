import { sql } from '@vercel/postgres';
import { User, LatestPainting, PaintingsTable, PaintingForm } from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredPaintings(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const paintings = await sql<PaintingsTable>`
      SELECT
        paintings.id,
        paintings.title,
        paintings.description,
        paintings.image_url,
        paintings.price,
        paintings.stock,
        paintings.year,
        paintings.size
      FROM paintings
      WHERE
        paintings.title ILIKE ${`%${query}%`} OR
        paintings.description ILIKE ${`%${query}%`} OR
        paintings.price::text ILIKE ${`%${query}%`} OR
        paintings.year::text ILIKE ${`%${query}%`} OR
        paintings.size ILIKE ${`%${query}%`}
      ORDER BY paintings.year DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return paintings.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch paintings.');
  }
}

export async function fetchPaintingsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM paintings
    WHERE
      paintings.title ILIKE ${`%${query}%`} OR
      paintings.description ILIKE ${`%${query}%`} OR
      paintings.price::text ILIKE ${`%${query}%`} OR
      paintings.year::text ILIKE ${`%${query}%`} OR
      paintings.size ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of paintings.');
  }
}

export async function fetchPaintingById(id: string) {
  noStore();
  try {
    const data = await sql<PaintingForm>`
      SELECT
        paintings.id,
        paintings.title,
        paintings.description,
        paintings.image_url,
        paintings.price,
        paintings.stock,
        paintings.year,
        paintings.size
      FROM paintings
      WHERE paintings.id = ${id};
    `;

    const painting = data.rows.map((painting) => ({
      ...painting,
      price: painting.price / 100,
    }));
    console.log(painting);

    return painting[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch painting.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
