'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import datos from '@/utilidades/datos'
import navStyle from '@/cssModules/nav.module.css'

export default function Navegacion() {
  const pathName=usePathname()
  return (
    <>
      <div>
        <ul className='md:flex gap-4 text-lg text-white hidden '>
          {datos.items.map(({text,enlace}) =>(
            <li key={enlace} className={(enlace==pathName?navStyle.active_link:'')+' hoverColor'}>
              <Link href={enlace} as={enlace} > {text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
