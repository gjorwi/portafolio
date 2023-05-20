import './globals.css'
import Nav from './components/nav'
import { BiCopyright } from "react-icons/bi";
import layoutStyle from './cssModules/layout.module.css'
import {Poppins} from 'next/font/google'
const poppins=Poppins({
  subsets:['latin'],
  weight:'300'
})

export const metadata = {
  title: 'Portafoli-Jorwi',
  description: 'Portafoli para informacion y proyectos',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className+' '+layoutStyle.selectFalse}>
        <div className={layoutStyle.bg_dark+' bg-gradient-to-t from-[#081b29] to-[#00d9ff] flex flex-col justify-center items-center min-h-screen p-6'}>
          <div className={layoutStyle.bg_base+' w-[95vw] h-[92vh] bg-green-500 relative rounded-[6vh] overflow-hidden p-6'}>
            <Nav></Nav>
            <div className='h-[78vh] w-full text-white p-6'>
              {children}
            </div>
            <footer className='absolute gap-2 bottom-0 w-full p-2 flex justify-center items-center text-gray-400 text-sm'>
              <span className='text-lg color_primary'><BiCopyright/></span> Copyright - 2023
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
