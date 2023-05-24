'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import datos from '@/utilidades/datos'
import navStyle from '@/cssModules/nav.module.css'

export default function Navegacion({className,changeMenuVal}) {
  const pathName=usePathname()
  return (
    <>
      <div>
        <ul className={'text-lg text-white '+className}>
          {datos.items.map(({text,enlace}) =>(
            <li key={enlace} className={(enlace==pathName?navStyle.active_link:'')+' hoverColor'}>
              <Link href={enlace} as={enlace} onClick={()=>changeMenuVal()}> {text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
