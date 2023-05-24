import homeStyle from '@/cssModules/home.module.css'
import LinkButton from './components/linkButton';
import MyFoto from './components/myFoto';
import myFonts from '@/utilidades/fuentes'
export default async function Home () {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-12 h-full relative z-0'>
        <div className='col md:col-span-7 z-10 w-full flex flex-col justify-center items-center md:items-start lg:items-end lg:pr-10'>
          <div className='lg:w-9/12 sm:w-full flex flex-col items-center md:items-start'>
            <h1 className={myFonts('bold').className+' text-3xl md:text-[2.2rem] text-center md:text-left'}>Hola, soy Jorwi García.</h1>
            <p className={myFonts('midBold').className+' text-base md:text-lg color_primary mb-8 text-center md:text-left'}>Desarrollador FULLSTACK</p>
            <p className={myFonts('normal').className+' text-gray-300 text-sm md:text-base text-center md:text-left'}>Desarrollador de software con experiencia en diseño, instalación, pruebas y mantenimiento de sistemas de software. Dominio de varias plataformas, lenguajes y sistemas integrados. Experiencia en las herramientas y procedimientos de desarrollo más vanguardistas. Capaz de autogestión, eficaz en proyectos independientes. Buenas habilidades de colaboración dentro de un equipo productivo.</p>
            <div className='w-full flex justify-center md:justify-start gap-8 mt-10'>
              <LinkButton classPer={'bg_primary md:py-4'} colorPer="color_base" text="Acerca de mi" enlace="/acerca"/>
              <LinkButton classPer={homeStyle.border_small+' md:py-4'} colorPer="color_white" text="Contactame" enlace="/contactame"/>
            </div>
          </div>
        </div>
        <div className='col md:col-span-5 top-0 left-0 w-full h-full absolute md:static  md:flex  opacity-30 md:opacity-100'>
          <MyFoto foto="/foto2.png" margin={'-ml-4 md:-ml-2'}/>
        </div>
      </div>
    </>
  )
}
