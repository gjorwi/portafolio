'use client'
import myFonts from '@/utilidades/fuentes';

export default function SubmitButton ({text,classPer,colorPer,typeButton,reset}) {
  // const handleSubmit = () => {
  //   // console.log(JSON.stringify(dataSubmit))
  //   reset()
  // }

  return (
    <>
      <button type={typeButton} className={`${myFonts('midBold').className} ${colorPer} text-sm md:text-base px-3 md:px-5 py-2 rounded-md ${classPer}`}>
        {text}
      </button>
    </>
  )
}
