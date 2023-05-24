import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import Navegacion from './navegacion';

export default function Nav() {
  return (
    <>
      <nav className={' flex md:flex-row flex-col justify-between py-4 px-6'}>
        <div className='flex justify-between items-center gap-2 text-3xl text-white'>
          <div className='flex'>
            <VscAccount className="mr-2"/>
            <h2 className='font-bold text-3xl color_primary'>
              JORWI <span className='text-white'>.</span>
            </h2>
          </div>
          <div className='flex md:hidden'>
            <GiHamburgerMenu />
          </div>
        </div>
        <div >
          <Navegacion/>
        </div>
      </nav>
    </>
  )
}
