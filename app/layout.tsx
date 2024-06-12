import Head from 'next/head';
import './ui/global.css';
import { inter } from './ui/utils/fonts'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería de Fernando',
  description: 'La galería de Fernando es un proyecto en desarrollo. ¡Vuelve pronto!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
    </>
  );
}
