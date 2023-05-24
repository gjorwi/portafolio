import {GiSmartphone} from 'react-icons/gi'
import myFonts from '@/utilidades/fuentes'
import {VscLocation} from 'react-icons/vsc'
import {AiOutlineMail} from 'react-icons/ai'
import ContactForm from '../components/contactForm'

export default function Contactame() {
  const contacts=[
    {"text":"Telefono","value":"0416 - 9646008","icon":GiSmartphone},
    {"text":"Dirección","value":"Urbanización las delicias","icon":VscLocation},
    {"text":"Correo","value":"jgjg.0503@gmail.com","icon":AiOutlineMail}
  ]
  return (
    <>
      <div className="w-full flex md:flex-row flex-col ">
        <div className="flex-1 flex justify-center">
          <ContactForm/>
        </div>
        <div className="flex-1 flex justify-center p-1 md:p-6 mt-1">
          <div className='flex flex-col gap-y-6 w-3/4 items-center md:items-start'>
            <div className={myFonts('bold').className+' text-2xl'}>
              <h1>INFORMACIÓN</h1>
            </div>
            {contacts.map(contact => (
              <div key={contact.text} className='flex items-center gap-1'>
                <contact.icon className='text-2xl'/><p>{contact.text}: <span className='color_primary'>{contact.value}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
