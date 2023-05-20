import Image from 'next/image'
import Link from 'next/link';
import navStyle from '../cssModules/nav.module.css'
import { VscAccount } from "react-icons/vsc";
import {Poppins} from 'next/font/google'
const poppins=Poppins({
  subsets:['latin'],
  weight:'600'
})

export default function Nav() {
  return (
    <>
      <nav className={poppins.className+' flex justify-between py-4 px-6'}>
        <div className='flex items-center gap-2 text-3xl text-white'>
          <VscAccount className={navStyle.loaderIcon} />
          <h2 className='font-bold text-3xl color_primary'>
            JORWI <span className='text-white'>.</span>
          </h2>
        </div>
        <div >
          <ul className='flex gap-4 text-lg text-white'>
            <li className={navStyle.active_link+' hoverColor'}>
              <Link href="/"> Home</Link>
            </li>
            <li className={navStyle.hoverColor}>
              <Link href="/acerca">Acerca</Link>
            </li>
            <li className={navStyle.hoverColor}>
            <Link href="/portafolio">Portafolio</Link>
            </li>
            <li className={navStyle.hoverColor}>
            <Link href="/contactame">Contactame</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
