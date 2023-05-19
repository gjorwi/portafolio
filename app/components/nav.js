import Image from 'next/image'
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
          <VscAccount/>
          <h2 className='font-bold text-3xl color_primary'>
            JORWI <span className='text-white'>.</span>
          </h2>
        </div>
        <div >
          <ul className='flex gap-4 text-lg text-white'>
            <li className={navStyle.active_link+' hoverColor'}>
              Home
            </li>
            <li className={navStyle.hoverColor}>
              Acerca de Mi
            </li>
            <li className={navStyle.hoverColor}>
              Portafolio
            </li>
            <li className={navStyle.hoverColor}>
              Contactame
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
