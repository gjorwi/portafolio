import myFonts from "@/utilidades/fuentes";
import CardProyjects from "../components/cardProjects";


export default function Portafolio() {

  return (
    <>
      <div className="h-full">
        <h1 className={myFonts('bold').className+" text-2xl"}>Portafolio</h1>
        <div className="grid grid-cols-2 gap-6 mt-2">
          <CardProyjects/>
          <div>
            {/* hola */}
          </div>
        </div>
      </div>
    </>
  )
}
