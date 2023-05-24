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
      <body className={myFonts('normal').className}>
        
        <div className={layoutStyle.bg_dark+' bg-gradient-to-t z-10 from-[#081b29] to-[#00d9ff] flex flex-col justify-center items-center min-h-screen p-6'}>
          <div className={layoutStyle.bg_base+' w-[95vw] h-[92vh] relative rounded-[3vh]  md:rounded-[6vh] overflow-hidden p-6'}>
            <Nav></Nav>
            <div className='h-[78vh] w-full text-white p-1 md:p-6 overflow-x-hidden overflow-y-auto pb-8'>
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
