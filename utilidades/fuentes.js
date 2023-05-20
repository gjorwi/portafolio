import {Poppins} from 'next/font/google'
  const poppinsBold=Poppins({
    subsets:['latin'],
    weight:'900'
  })
  const poppinsMidBold=Poppins({
    subsets:['latin'],
    weight:'600'
  })
  const poppins=Poppins({
    subsets:['latin'],
    weight:'400'
  })

export default function myFonts(tipoFuente){
  switch (tipoFuente) {
    case 'bold':
      return poppinsBold
      break;
    case 'midBold':
      return poppinsMidBold
      break;
    case 'normal':
      return poppins
      break;
    default:
      console.log(`Lo siento ese tipo de fuente no se encuentra ${tipoFuente}.`);
  }
}