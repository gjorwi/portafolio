'use client'
import contStyle from '@/cssModules/contactame.module.css'
import SubmitButton from './submitButton'
import { useState } from 'react'

export default function ContactForm () {
  const [data,setData] = useState({nombre:'',correo:'',descripcion:''})
  
  const handleForm =(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(JSON.stringify(data))
    reset()
  }
  const reset=()=>{
    setData({nombre:'',correo:'',descripcion:''})
  }

  return (
    <>
      <div className="w-11/12 relative z-[400]">
        <form className='flex flex-col  gap-y-4 p-1 md:p-6' onSubmit={(e)=>handleSubmit(e)}>
          <label htmlFor="nombre">Nombre</label>
          <input className={contStyle.input_per+" p-2"} value={data?.nombre} onChange={(e)=>handleForm(e)} name="nombre" type="text" />
          <label htmlFor="correo">Correo</label>
          <input type="text" onChange={(e)=>handleForm(e)} value={data?.correo} className={contStyle.input_per+" p-2"} name="correo"/>
          <label htmlFor="descripcion">Descripción</label>
          <textarea rows="8" type="text" value={data?.descripcion} onChange={(e)=>handleForm(e)} className={contStyle.input_per+" p-2"} name="descripcion" />
          <div className='flex justify-end'>
              <SubmitButton text="Enviar" typeButton="submit" dataSubmit={data} classPer={'bg_primary'} colorPer={'color_base'}/>
          </div>
        </form>
      </div>
    </>
  )
}

