import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/utils/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-sky-200 bg-opacity-0 px-6 py-10 md:w-2/5 md:px-20">
          
          <p className={`${lusitana.className} text-xl text-grey-800 shadow-xl bg-sky-200 bg-opacity-80 p-6 md:text-3xl md:leading-normal`}>
            Bienvenido a esta <strong>Galería de Arte</strong><br />De: <strong>Fernando Luque</strong> <br />
          </p><p className={`${lusitana.className} text-xl text-grey-800 shadow-xl bg-sky-200 bg-opacity-80 p-6 md:text-3xl md:leading-normal`}>
            Esta muestra presenta una selección de la última etapa, cuya duración ha sido de <strong>4 años</strong>.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Ir a la Galería</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/trees.png"
            alt="Gallery"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </main>
  );
}
