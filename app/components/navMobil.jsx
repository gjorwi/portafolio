import { IoIosArrowBack } from "react-icons/io";
import Navegacion from './navegacion';

export default function NavMobil({className,changeMenuVal}) {
  return (
    <>
      <div  className={"fixed flex top-0 left-0 bg_backMenu w-full h-full md:hidden "+className}>
        <button className="absolute top-0 right-0 py-1 px-2 mt-2 text-4xl bg_primary rounded-lg" onClick={()=>changeMenuVal()}><IoIosArrowBack/></button>
        <div className="bg_base flex flex-col items-center h-full w-9/12">
          <div className='flex justify-center items-center p-6 w-full'>
            <h2 className='font-bold text-3xl color_primary'>
              Menu
            </h2>
          </div>
          <div className="w-9/12 p-4">
              <Navegacion changeMenuVal={changeMenuVal} className={'flex flex-col gap-y-2'} itemClasName={'bg_backMenu p-2 rounded-full pl-4 flex justify-center'}/>
          </div>
        </div>
      </div>
    </>
  )
}
