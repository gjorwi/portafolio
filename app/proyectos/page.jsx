import myFonts from "@/utilidades/fuentes";
import CardProyjects from "../components/cardProjects";

export default function Portafolio() {

  return (
    <>
      <div className="h-full flex flex-col items-center ">
        <h1 className={myFonts('bold').className+" text-2xl"}>Portafolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full  justify-center items-center gap-6 mt-2 p-4">
          <CardProyjects/>
        </div>
      </div>
    </>
  )
}
