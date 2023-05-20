import homeStyle from './cssModules/home.module.css'
import LinkButton from './components/linkButton';
import MyFoto from './components/myFoto';
import myFonts from '../utilidades/fuentes'

export default async function Home() {
  return (
    <>
      <div className='grid md:grid-cols-12 h-full'>
        <div className='col md:col-span-7 w-full flex flex-col justify-center items-center md:items-start lg:items-end lg:pr-10'>
          <div className='lg:w-9/12 sm:w-full flex flex-col '>
            <h1 className={myFonts('bold').className+' text-[2.2rem]'}>Hola, soy Jorwi García.</h1>
            <p className={myFonts('midBold').className+' text-lg color_primary mb-8'}>Desarrollador FULLSTACK</p>
            <p className={myFonts('normal').className+' text-sm'}>Desarrollador de software con experiencia en diseño, instalación, pruebas y mantenimiento de sistemas de software. Dominio de varias plataformas, lenguajes y sistemas integrados. Experiencia en las herramientas y procedimientos de desarrollo más vanguardistas. Capaz de autogestión, eficaz en proyectos independientes. Buenas habilidades de colaboración dentro de un equipo productivo.</p>
            <div className='w-full flex justify-start gap-8 mt-10'>
              <LinkButton classPer={'bg_primary'} colorPer="color_base" text="Acerca de mi" enlace="/acerca"/>
              <LinkButton classPer={homeStyle.border_small} colorPer="color_white" text="Contactame" enlace="/contactame"/>
              {/* <button className={poppinsMediaBold.className+' '+homeStyle.border_small+' px-5 py-3 bg_base  rounded-md color_primary'}>
                Contactame
              </button> */}
            </div>
          </div>
        </div>
        <div className='col md:col-span-5 hidden md:flex'>
          <MyFoto/>
        </div>
      </div>
    </>
  )
}
