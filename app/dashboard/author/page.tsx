// page.tsx:
import { lusitana } from '@/app/ui/utils/fonts';
import Image from 'next/image';

export default async function Page() {
  const artistYears = [
    { year: 1966, event: "Nacimiento en Granada" },
    { year: 1991, event: "Falsos grabados. Centro de exposiciones Hispano20 en Granada" },
    { year: 1992, event: "Seleccionado en el II certamen nacional de pintura. Caja de Ahorros de Granada" },
    { year: 1993, event: "Licenciado en Bellas Artes por la Universidad de Granada" },
    { year: 1995, event: "Centro Universitario Casa de Porras. Granada" },
    { year: 1996, event: "Pinturas en el Palacio de los Condes de Gabia. Diputación Provincial de Granada" },
    { year: 1998, event: "Obra en lienzo gran formato. Galería 'Buen Gobierno'. Granada" },
    { year: 2006, event: "Reencuentro. Asociación Cultural Levantisca. Cabo de Gata, Almería" },
  ];

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl bg-sky-200 bg-opacity-95 p-2 rounded-xl`}>Información del Autor</h1>
      </div>
      <div className="mt-4">
        <ul className="list-disc pl-8">
          {artistYears.map(({ year, event }) => (
            <li key={year} className={`${lusitana.className} text-lg text-gray-800 mb-4 bg-sky-100 bg-opacity-80 p-2 rounded-xl`}>
              <span className="font-bold ">{year}:</span> {event}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <div className="w-full max-w-4xl mx-auto">
          <Image src="/trees.png" alt="trees" width={950} height={550} className="rounded-lg" />
        </div>
      </div>
      <div className="mt-8">
        <h2 className={`${lusitana.className} text-xl text-gray-800 leading-relaxed bg-sky-100 bg-opacity-90 p-2 rounded-xl text-center`}><strong>- VENTANAS -</strong></h2>
        <p className={`${lusitana.className} text-lg text-gray-800 leading-relaxed bg-sky-100 bg-opacity-80 p-2 rounded-xl`}>
          A simple vista todas las obras comparten rectángulos o cuadrados que se repiten,
          tratando de encajarse en equilibrios dinámicos por toda la superficie del papel,
          creando redes con alto grado de aleatoriedad.
          A modo de filtros se interponen entre lo observado y nosotros,
          moldeando y reduciendo nuestra percepción. A veces, se convierten en patrones que los llevamos encima,
          o dentro, sin distinguir lo que es impostado de aquello que arrastramos como impronta. <br />
          Mas allá, podemos aprender a través de lo cuadriculado, trascender los aprehendido y fijarnos más en lo desapercibido,
          porque al fin y al cabo, <strong>son las ventanas las que nos abren al mundo.</strong><br />
          Por algún momento, así lo vean y lo disfruten.
        </p>
      </div>
    </div>
  );
}
