import './globals.css'
import Nav from './components/nav'
import { BiCopyright } from "react-icons/bi";
import myFonts from '@/utilidades/fuentes';
import layoutStyle from '@/cssModules/layout.module.css'
import NavMobil from './components/navMobil';

export const metadata = {
  title: 'Portafoli-Jorwi',
  description: 'Portafoli para informacion y proyectos',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={myFonts('normal').className+' p-0 m-0'}>
        
        <div className={layoutStyle.bg_dark+' bg-gradient-to-t z-10 from-[#081b29] to-[#00d9ff] flex flex-col justify-center items-center min-h-screen p-6'}>
          <div className={layoutStyle.bg_base+' w-[95vw] h-[92vh] relative rounded-[3vh] flex flex-col md:rounded-[6vh] overflow-hidden'}>
            <div className='w-[50%] h-[50%] z-5 absolute top-0 primary_gradient'/>
            <span className='relative z-[500] py-4 px-6'><Nav></Nav></span>
            <div className='h-full w-full text-white overflow-x-hidden overflow-y-auto'>
              {children}
            </div>
            
            <footer className='absolute gap-2 bottom-0 w-full p-2 flex justify-center items-center text-gray-400 text-sm'>
            </footer>
          </div>
        </div>
        
      </body>
    </html>
  )
}
