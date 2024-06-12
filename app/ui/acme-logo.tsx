import { lusitana } from './utils/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <Image src="/paint.png" alt="Logo" width={200} height={200} className="h-28 w-28 mb-2 ml-12 justify-center rounded-lg" />
    </div>
  );
}
