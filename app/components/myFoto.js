'use client'
import Image from "next/image"
import { useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function MyFoto() {
  const [loadingImg,setLoadingImg]=useState(false)
  const terminarCarga = () =>{
    setLoadingImg(true)
  }

  return (
    <>
      <div className="flex flex-col relative w-full h-full">
        {!loadingImg &&
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full text-3xl">
              <AiOutlineLoading3Quarters className={`loaderIcon`} />
            </div>
          } 
        <div className={' w-[110%] h-full relative pt-[100%] '}>
          <Image 
            src={'/foto2.png'} 
            onLoadingComplete={(img) => console.log(img.classList.remove('opacity-0'))} 
            fill 
            priority={true} 
            onLoad={(e) => terminarCarga()} 
            className="top-0 left-0 object-cover transition-opacity duration-[2s] opacity-0" alt="" />
        </div>
      </div>
    </>
  )
}

