import React from 'react';
import { lusitana } from '../../ui/utils/fonts';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="relative h-screen">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 bg-opacity-70 text-center p-2`}>
        <strong>Bienvenido a esta Galería de Arte con ventanas a los colores y formas del mundo</strong> 
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cada espacio de la cuadrícula */}
        <a href="http://localhost:3000/dashboard/storage" className="relative h-full">
          <img src="/examples/2021/1.png" alt="Imagen 1" className="w-full h-full object-cover" />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">2021</h2>
        </a>
        <a href="http://localhost:3000/dashboard/storage" className="relative h-full">
          <img src="/examples/2022/1.png" alt="Imagen 2" className="w-full h-full object-cover" />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">2022</h2>
        </a>
        <a href="http://localhost:3000/dashboard/storage" className="relative h-full">
          <img src="/examples/2023/4.png" alt="Imagen 3" className="w-full h-full object-cover" />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">2023</h2>
        </a>
        <a href="http://localhost:3000/dashboard/storage" className="relative h-full mb-12">
          <img src="/examples/2024/1.png" alt="Imagen 4" className="w-full h-full object-cover" />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">2024</h2>
        </a>
      </div>
    </main>
  );
}
