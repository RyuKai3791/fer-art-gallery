export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Painting = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  stock: 'in stock' | 'out of stock';
  year: number;
  size: string;
};

export type LatestPainting = {
  id: string;
  title: string;
  image_url: string;
  price: number;
};

export type PaintingsTable = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  stock: 'in stock' | 'out of stock';
  year: number;
  size: string;
};

export type PaintingForm = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: number;
  stock: 'in stock' | 'out of stock';
  year: number;
  size: string;
};
