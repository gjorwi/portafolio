import Image from 'next/image'
import homeStyle from './cssModules/home.module.css'
import {Poppins} from 'next/font/google'
const poppinsFullBold=Poppins({
  subsets:['latin'],
  weight:'800'
})
const poppinsMediaBold=Poppins({
  subsets:['latin'],
  weight:'700'
})
const poppinsMediaRegular=Poppins({
  subsets:['latin'],
  weight:'400'
})

export default function Home() {
  return (
    <div className='grid md:grid-cols-12 h-full'>
      <div className='col md:col-span-7 w-full flex flex-col justify-center items-center md:items-start lg:items-end lg:pr-10'>
        <div className='lg:w-9/12 sm:w-full flex flex-col '>
          <h1 className={poppinsFullBold.className+' text-[2.2rem]'}>Hola, soy Jorwi García.</h1>
          <p className={poppinsMediaBold.className+' text-xl color_primary mb-8'}>Desarrollador FULLSTACK</p>
          <p className={poppinsMediaRegular.className}>Desarrollador de software con experiencia en diseño, instalación, pruebas y mantenimiento de sistemas de software. Dominio de varias plataformas, lenguajes y sistemas integrados. Experiencia en las herramientas y procedimientos de desarrollo más vanguardistas. Capaz de autogestión, eficaz en proyectos independientes. Buenas habilidades de colaboración dentro de un equipo productivo.</p>
          <div className='w-full flex justify-start gap-8 mt-10'>
            <button className={poppinsMediaBold.className+' px-5 py-3 bg_primary rounded-md color_base'}>
              Acerca de mi
            </button>
            <button className={poppinsMediaBold.className+' '+homeStyle.border_small+' px-5 py-3 bg_base  rounded-md color_primary'}>
              Contactame
            </button>
          </div>
        </div>
      </div>
      <div className='col md:col-span-5 hidden md:flex'>
        <div className={' w-[110%] h-full relative pt-[100%] '}>
          <Image src={'/foto2.png'} fill className="h-full top-0 left-0 object-cover opacity-80" alt="" />
        </div>
      </div>
    </div>
  )
}
