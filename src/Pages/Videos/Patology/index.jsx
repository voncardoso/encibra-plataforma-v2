import { Image, PencilLine, PlusCircle, TrashSimple } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

export function Patology(){
    return(
        <div className="mt-5">
        <header className="flex justify-end p-4">
            <NavLink
              className="flex items-center gap-1 hover:text-gold-400 hover:underline"
              to={`#`}
            >
              <PlusCircle className="text-gold-400" size={22} />
              Cadastrar Vídeo
            </NavLink>
        </header>
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-gray-300 ">
              <th className="p-2 rounded-ss-md">Lado</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Km</th>
              <th className="p-2">Min</th>
              <th className="p-2">Latitude</th>
              <th className="p-2">Longitude</th>
              <th className="p-2"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() =>{
              navigate(`/rodovias/information/${"PA-999"}`)
            }} className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
              <td className="p-2  ">Pista</td>
              <td className="p-2  ">TTL, TLC</td>
              <td className="p-2  w-48 ">
              <p className="truncate w-48">Trincas Isoladas Longitudinais Longas - TLL;</p>
              </td>
              <td className="p-2  ">5.600</td>
              <td className="p-2  ">06m27s</td>
              <td className="p-2  ">10</td>
              <td className="p-2  ">10</td>
              <td className="p-2">
                <div className="flex gap-4 items-center h-auto">
                    <PencilLine size={22} color={"#0b7bb7"} />
                    <Image size={22} color={"#56A899"} />
                    <TrashSimple size={22} color={"#e64a33"} />
                </div>
              </td>
            </tr>
            <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200 ">
              <td className="p-2">Pista</td>
              <td className="p-2">TTL, TLC</td>
              <td className="p-2  w-48">
                <p className="truncate w-48">Trincas Isoladas Longitudinais Longas - TLL;</p>
              </td>
              <td className="p-2">5.600</td>
              <td className="p-2">06m27s</td>
              <td className="p-2">-0.7884127</td>
              <td className="p-2">47.8211209</td>
              <td className="p-2 ">
                <div className="flex gap-4 items-center h-auto">
                    <PencilLine size={22} color={"#0b7bb7"} />
                    <Image size={22} color={"#56A899"} />
                    <TrashSimple size={22} color={"#e64a33"} />
                </div>
              </td>
            </tr>
            <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
              <td colSpan={9} className="p-2 rounded-ee-md rounded-es-md"></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}