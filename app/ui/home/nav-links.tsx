'use client';

import {
  UserIcon,
  HomeIcon,
  CurrencyEuroIcon,
  FolderIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { 
    name: 'Inicio', 
    href: '/dashboard', 
    icon: HomeIcon 
  },
  { 
    name: 'Almacén',
    href: '/dashboard/storage', 
    icon: FolderIcon
  },
  {
    name: 'Autor',
    href: '/dashboard/author',
    icon: UserIcon,
  },
  {
    name: 'Tienda',
    href: '/dashboard/shop',
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Contacto',
    href: '/dashboard/contact',
    icon: IdentificationIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-sky-100 bg-opacity-95 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-800 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-800': pathname === link.href,
              },
            )}
          >
          <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
