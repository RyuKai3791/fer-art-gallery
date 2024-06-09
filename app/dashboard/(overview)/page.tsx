import { lusitana } from '../../ui/invoices/fonts';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl bg-sky-300 bg-opacity-95 text-center p-2`}>
        Bienvenido 1
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <h2>2</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <h3>3</h3>
      </div>
    </main>
  );
}
