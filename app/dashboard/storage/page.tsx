import { useState, useEffect } from 'react';
import Image from 'next/image';
import Search from '@/app/ui/search';
import { lusitana } from '../../ui/utils/fonts';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const years = [2021, 2022, 2023, 2024];
  const imagesPerYear = 20;

  // Function to generate dimensions and technique text
  const getImageInfo = (year, imageNumber) => {
    return `Dimensiones: 450x450  |  Técnica: Óleo sobre lienzo`;
    // Replace with actual logic to fetch or generate info based on year and image number
  };

  const generateImageDivs = () => {
    const imageDivs = [];
    years.forEach((year) => {
      for (let i = 1; i <= imagesPerYear; i++) {
        const imageInfo = getImageInfo(year, i);
        imageDivs.push(
          <div key={`${year}-${i}`} className={`${lusitana.className} flex flex-col items-center leading-none text-grey`}>
            <Image
              src={`/images/${year}/${i}.png`}
              alt={`Imagen del año ${year} número ${i}`}
              width={450}
              height={450}
              className="h-128 w-128 mb-6 ml-12 justify-center"
            />
            <p className="text-center bg-blue-200 p-2 mb-12 rounded-full">{imageInfo}</p>
          </div>
        );
      }
    });
    return imageDivs;
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl bg-sky-200 bg-opacity-95 p-2 rounded-xl`}>Almacén</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Buscar un cuadro específico" />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {generateImageDivs()}
      </div>
    </div>
  );
}
