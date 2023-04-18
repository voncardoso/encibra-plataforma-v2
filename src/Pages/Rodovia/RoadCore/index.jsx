import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { NavLink, useParams } from "react-router-dom";

export function RoadCore() {
  const params = useParams();
  console.log(params.id.length);
  return (
    <section className="w-full overflow-y-scroll ">
      {/**Navegação */}
      <header className="flex justify-between pr-5 pt-5 pb-8 items-center">
        <nav>
          <NavLink to={"/rodovias"}>
            <strong className="text-2xl hover:underline">Rodovias </strong>
          </NavLink>
          <NavLink to={"#"}>
            <strong className="text-2xl hover:underline"> | NR-{params.id.length === 1 ? `0${params.id}` : params.id}</strong>
          </NavLink>
        </nav>
        <label 
          htmlFor="seach"
          className="flex items-center gap-2 bg-white rounded-md pl-1 cursor-pointer"
        >
          <MagnifyingGlass color="#9CA3AF" size={22}/>
          <input id="seach" className="py-1 pl-2 rounded-md outline-none" type="text" placeholder="Pesquisar" />
        </label>
      </header>

      {/**Dados do nucleo */}
      <div className=" text-gray-400 w-72 mb-5 bg-white min-w-52 p-4 rounded-lg  border-b-4 rounded-md text-center border-b-8 border-gray-300">
            <NavLink to={`/rodovias/nucleo/${1}`}>
              <h1 className="text-xl font-bold">Nº Rodovias</h1>
              <h2 className="pt-2.5 text-3xl font-bold">10</h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>10</span> <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>10</span> <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </div>


      {/**Table */}
      <div className="pr-5">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-300 ">
              <th className="p-2 rounded-ss-md">Rodovia</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Extensão</th>
              <th className="p-2">Latitude</th>
              <th className="p-2">Longitude</th>
              <th className="p-2">UF</th>
              <th className="p-2 rounded-se-md text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
              <td className="p-2  ">PA-999</td>
              <td className="p-2  ">Estadual</td>
              <td className="p-2  ">10</td>
              <td className="p-2  ">10</td>
              <td className="p-2  ">10</td>
              <td className="p-2  ">10</td>
              <td className="p-2  ">
                <NavLink className="flex justify-center" to={``}>
                  <CaretRight size={20} />
                </NavLink>
              </td>
            </tr>
            <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200 ">
              <td className="p-2">PA-999</td>
              <td className="p-2">Estadual</td>
              <td className="p-2">10</td>
              <td className="p-2">10</td>
              <td className="p-2">10</td>
              <td className="p-2">10</td>
              <td className="p-2">
                <NavLink className="flex justify-center" to={``}>
                  <CaretRight size={20} />
                </NavLink>
              </td>
            </tr>
            <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
              <td colSpan={7} className="p-2 rounded-ee-md rounded-es-md"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
