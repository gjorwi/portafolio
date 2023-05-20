import Link from 'next/link';
import {Poppins} from 'next/font/google'
const poppinsMediaBold=Poppins({
  subsets:['latin'],
  weight:'700'
})
export default function LinkButton({text,enlace,classPer,colorPer}) {
  return (
    <>
      <button className={`${poppinsMediaBold.className} ${classPer} ${colorPer} px-5 py-3 rounded-md `}>
        <Link href={enlace}>{text}</Link>
      </button>
    </>
  )
}
