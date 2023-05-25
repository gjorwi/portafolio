import myFonts from "@/utilidades/fuentes"
import datos from '@/utilidades/datos'
import {GiSkills} from 'react-icons/gi'
import MyFoto from "../components/myFoto"

export default function Acerca() {

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className='w-36 h-36 flex justify-center items-center rounded-full bg-slate-200 mb-4'>
            <div className='w-32 h-32 rounded-full bg_base relative overflow-hidden'>
              <span className="opacity-80"><MyFoto margin="-ml-2" foto="/foto.png"/></span>
            </div>
          </div>
          <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
            <h1 className={myFonts('bold').className+' text-3xl md:text-[2.2rem] text-center md:text-left'}>Hola, soy Jorwi García.</h1>
            <p className={myFonts('midBold').className+' text-base md:text-lg color_primary mb-4 text-center md:text-left'}>Desarrollador FULLSTACK</p>
            <p className={myFonts('normal').className+' text-sm md:text-base text-gray-400 text-center md:text-left p-4'}>
              Desarrollador de software con experiencia en diseño, instalación, pruebas y mantenimiento 
              de sistemas de software. Dominio de varias plataformas, lenguajes y sistemas integrados.
              Experiencia en las herramientas y procedimientos de desarrollo más vanguardistas. Capaz 
              de autogestión, eficaz en proyectos independientes. Buenas habilidades de colaboración dentro de un equipo productivo.
            </p>
          </div>  
        </div>
        <div className="pt-6">
          <div className="flex justify-center items-center">
            <GiSkills className="text-4xl color_primary mr-3"/>
            <h1 className={myFonts('bold').className+" text-[3vh] color-primary"}> HABILIDADES</h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/5 w-full pt-6">
              {datos.skills.map(skill =>(
                <div key={skill} className="flex justify-center md:justify-start text-gray-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
