import Link from 'next/link';
import myFonts from '@/utilidades/fuentes';
export default function LinkButton ({text,enlace,classPer,colorPer}) {
  return (
    <>
      <Link href={enlace}>
        <button className={`${myFonts('midBold').className} ${colorPer} text-sm md:text-base px-3 me:px-5 py-2 md:py-3 rounded-md ${classPer}`}>
          {text}
        </button>
      </Link>
    </>
  )
}
