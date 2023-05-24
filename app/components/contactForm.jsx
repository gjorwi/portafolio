import contStyle from '@/cssModules/contactame.module.css'
import LinkButton from './linkButton'

export default function ContactForm () {
  return (
    <>
      <div className="flex flex-col w-11/12 gap-y-4 p-1 md:p-6">
        <label htmlFor="nombre">Nombre</label>
        <input className={contStyle.input_per+" p-2"} name="nombre" type="text" />
        <label htmlFor="correo">Correo</label>
        <input type="text" className={contStyle.input_per+" p-2"} name="correo"/>
        <label htmlFor="descripcion">Descripción</label>
        <textarea rows="8" type="text" className={contStyle.input_per+" p-2"} name="descripcion" />
        <div className='flex justify-end'>
            <LinkButton text="Enviar" enlace="/enviar" classPer={'bg_primary'} colorPer={'color_base'}/>
        </div>
      </div>
    </>
  )
}

