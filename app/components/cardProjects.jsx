import MyFoto from './myFoto'
import myFonts from "@/utilidades/fuentes";
import datos from '@/utilidades/datos'
import {TbBrandNextjs, TbBrandCss3,TbBrandHtml5,TbBrandJavascript} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import LinkButton from './linkButton';

export default function CardProyjects () {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-slate-900 sm:w-8/12 md:w-full rounded-xl">
        <div className="w-full p-6 overflow-hidden ">
            <MyFoto margin="" foto='/fundaCapt.png'/>
        </div>
        <div className="px-2 pt-6 flex flex-col ">
          <h1 className={myFonts('midBold').className+" color_primary text-xl text-center md:text-left"}>Sistema de Gestión y Control Médico</h1>
          <p className="text-sm p-2 text-center md:text-left"> Sistema de dominio que permite controlar y administrar los procesos medicos en la institución,
          afiliar pacientes, conceder citas y facturar costos de consultas y especialidades medicas.</p>
          <div className="flex justify-center gap-2 color_primary text-2xl">
            <TbBrandNextjs/>
            <SiMongodb/>
            <FaNodeJs/>
            <TbBrandCss3/>
            <TbBrandHtml5/>
            <TbBrandJavascript/>
          </div>
          <div className='flex items-center justify-end h-full p-2'>
            <LinkButton enlace="https://fundamutual.vercel.app" text="Ver" classPer={'border_small md:py-1 sm:py-1'} colorPer={'text-white'}/>
          </div>
        </div>
      </div>
    </>
  )
}

