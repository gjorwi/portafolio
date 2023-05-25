'use client'
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import Navegacion from './navegacion';
import NavMobil from "./navMobil";
import { useState } from "react";

export default function Nav({showMenu}) {
  const [menuMovil,setMenuMovil]=useState(false)
  const changeMenuVal =()=>{
    setMenuMovil(!menuMovil)
  }
  return (
    <>
      <nav className={' flex md:flex-row flex-col justify-between py-4 px-6'}>
        <div className='flex justify-between items-center gap-2 text-3xl text-white'>
          <div className='flex '>
            <VscAccount className="mr-2"/>
            <h2 className='font-bold text-3xl color_primary'>
              JORWI <span className='text-white'>.</span>
            </h2>
          </div>
          <div className='flex md:hidden'>
            {menuMovil&&
              <NavMobil changeMenuVal={changeMenuVal} className={'z-[400]'}/>
            }
            <GiHamburgerMenu onClick={()=>changeMenuVal()}/>
          </div>
        </div>
        <div >
          <Navegacion changeMenuVal={changeMenuVal} className={'hidden md:flex gap-4'}/>
        </div>
      </nav>
    </>
  )
}
