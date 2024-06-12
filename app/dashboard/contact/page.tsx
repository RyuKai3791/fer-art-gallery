import React from 'react';
import { lusitana } from '../../ui/utils/fonts';

export default async function Page() {
  return (
    <div className="w-full p-6">
      <div className="flex flex-col items-center justify-between mb-8">
        <h1 className={`${lusitana.className} text-3xl bg-sky-200 bg-opacity-90 p-4 rounded-2xl shadow-xl`}>
          Información de contacto
        </h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sección de Información de Contacto */}
        <div className="w-full md:w-1/2 bg-sky-200 bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contacto del Autor</h2>
          <p className="mb-2"><strong>Email:</strong> autor@example.com</p>
          <p className="mb-2"><strong>Teléfono:</strong> +34 600 123 456</p>
          <p className="mb-4"><strong>Ubicación:</strong> Galería de Arte en Granada</p>
          <div className="mb-4 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2603160569625!2d-3.5985572843722225!3d37.188175779873175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fce7ac3e4997%3A0x30e14a86a8bb264d!2sGranada%2C%20Spain!5e0!3m2!1sen!2sus!4v1598994738990!5m2!1sen!2sus"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Ubicación de la Galería en Granada"
            ></iframe>
          </div>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="w-full md:w-1/2 bg-sky-200 bg-opacity-80 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Redes Sociales</h2>
          <ul className="flex flex-col space-y-6">
            <li className="flex items-center space-x-6 mb-6 pt-12">
              <a href="https://www.facebook.com" className="text-blue-500 hover:underline flex items-center space-x-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12v-9.294H9.248v-3.622H12V8.413c0-2.728 1.64-4.214 4.065-4.214 1.156 0 2.149.086 2.438.124v2.825l-1.674.001c-1.311 0-1.565.624-1.565 1.538v2.016h3.129l-.408 3.622H15.26V24h7.415C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"/></svg>
                <span>Facebook</span>
              </a>
            </li>
            <li className="flex items-center space-x-6 mb-6 pt-4">
              <a href="https://www.instagram.com" className="text-pink-500 hover:underline flex items-center space-x-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.057 2.003.248 2.675.512.724.28 1.338.654 1.945 1.26.606.607.98 1.221 1.26 1.945.264.672.455 1.469.512 2.675.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.057 1.206-.248 2.003-.512 2.675-.28.724-.654 1.338-1.26 1.945-.607.606-1.221.98-1.945 1.26-.672.264-1.469.455-2.675.512-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.206-.057-2.003-.248-2.675-.512-.724-.28-1.338-.654-1.945-1.26-.606-.607-.98-1.221-1.26-1.945-.264-.672-.455-1.469-.512-2.675C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.057-1.206.248-2.003.512-2.675.28-.724.654-1.338 1.26-1.945.607-.606 1.221-.98 1.945-1.26.672-.264 1.469-.455 2.675-.512 1.265-.058 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.011 7.052.069 5.775.128 4.67.352 3.747.757c-.924.406-1.708.95-2.495 1.737-.787.787-1.331 1.571-1.737 2.495-.405.923-.629 2.028-.688 3.305C.011 8.332 0 8.741 0 12c0 3.259.011 3.668.069 4.948.059 1.277.283 2.382.688 3.305.406.924.95 1.708 1.737 2.495.787.787 1.571 1.331 2.495 1.737.923.405 2.028.629 3.305.688 1.28.059 1.689.069 4.948.069s3.668-.011 4.948-.069c1.277-.059 2.382-.283 3.305-.688.924-.406 1.708-.95 2.495-1.737.787-.787 1.331-1.571 1.737-2.495.405-.923.629-2.028.688-3.305.058-1.28.069-1.689.069-4.948s-.011-3.668-.069-4.948c-.059-1.277-.283-2.382-.688-3.305-.406-.924-.95-1.708-1.737-2.495-.787-.787-1.571-1.331-2.495-1.737-.923-.405-2.028-.629-3.305-.688C15.668.011 15.259 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.444.648-1.444 1.444s.648 1.444 1.444 1.444c.796 0 1.444-.648 1.444-1.444s-.648-1.444-1.444-1.444z"/></svg>
                <span>Instagram</span>
              </a>
            </li>
            <li className="flex items-center space-x-6 mb-6 pt-14">
              <a href="https://www.twitter.com" className="text-blue-400 hover:underline flex items-center space-x-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.668 4.668 0 002.048-2.573 9.348 9.348 0 01-2.958 1.132 4.656 4.656 0 00-7.922 4.245 13.207 13.207 0 01-9.592-4.864 4.656 4.656 0 001.445 6.21 4.63 4.63 0 01-2.107-.583v.059a4.658 4.658 0 003.735 4.566 4.697 4.697 0 01-2.1.08 4.658 4.658 0 004.35 3.228 9.349 9.349 0 01-5.79 1.994A9.463 9.463 0 010 19.54a13.208 13.208 0 007.148 2.097c8.577 0 13.267-7.102 13.267-13.267 0-.202-.005-.404-.014-.605a9.498 9.498 0 002.333-2.418l.002-.003z"/></svg>
                <span>Twitter</span>
              </a>
            </li>
            <li className="flex items-center space-x-6 mb-6 pt-14">
              <a href="https://www.linkedin.com" className="text-blue-700 hover:underline flex items-center space-x-3 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22.447 0H1.553C.694 0 0 .693 0 1.552v20.896C0 23.307.694 24 1.553 24h20.895c.859 0 1.553-.693 1.553-1.552V1.552C24 .693 23.306 0 22.447 0zM7.08 20.452H3.644V8.982h3.437v11.47zm-1.719-13.1c-1.101 0-1.995-.895-1.995-1.996a1.996 1.996 0 013.99 0c0 1.101-.895 1.996-1.995 1.996zm15.785 13.1h-3.438v-5.605c0-1.337-.026-3.059-1.862-3.059-1.862 0-2.148 1.452-2.148 2.954v5.71h-3.438V8.982h3.298v1.572h.047c.459-.872 1.583-1.792 3.256-1.792 3.481 0 4.124 2.29 4.124 5.269v6.421z"/></svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
