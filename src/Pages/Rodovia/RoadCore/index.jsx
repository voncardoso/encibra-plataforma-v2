import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";
import Pagination from '@mui/material/Pagination';
export function RoadCore() {
  const params = useParams();
  const navigate = useNavigate();
  const {  GetRoads, road } = useContext(UserContextRoad);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  let stretch = null;
  useEffect(() =>{
    GetRoads()
  }, [])

  const dataRoad = road.filter((item) => item.regional === `0${params.id}`)

  
  const someRoadRegional = dataRoad.reduce(
    (acc, road) => {
      switch (road.regional) {
        case `0${params.id}`:
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual01 += 1;
            acc.totalEstadual += 1;
          } else {
            acc.meshFederal01 += 1;
            acc.totalFederal += 1;
          }
          break;
          acc.reginal10 += 1;
          acc.total += 1;
          if (road.mesh === "ESTADUAL") {
            acc.meshEstadual10 += 1;
            acc.totalEstadual += 1;
          } else {
            cc.meshFederal10 += 1;
            acc.totalFeferal += 1;
          }
          break;
        default:
          break;
      }
      return acc;
    },
    {
      totalEstadual: 0,
      totalFederal: 0,
      total: 0,
    }
  );

  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  const paginatedData = paginate(dataRoad, currentPage, itemsPerPage);
  const totalPages = Math.ceil(dataRoad.length / itemsPerPage);
  
  function goToPage(event, pageNumber) {
    console.log("",pageNumber)
    setCurrentPage(pageNumber);
  }

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
              <h2 className="pt-2.5 text-3xl font-bold">{dataRoad.length}</h2>
              <p className="mb-2.5">Total</p>
              <div className="flex justify-center gap-8">
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.totalEstadual}</span> <span>Estaduais</span>
                </p>
                <p className="flex flex-col">
                  {" "}
                  <span>{someRoadRegional.totalFederal}</span> <span>Federais</span>
                </p>
              </div>
            </NavLink>
          </div>


      {/**Table */}
      <div className=" pr-5 flex flex-col">
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
            {paginatedData.map((road) =>{  stretch = JSON.parse(road?.stretch);
              return(
                <tr 
                  className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                  onClick={() => {
                    navigate(`/rodovias/information/${road.id}`);
                  }}  
                >
                <td className="p-2  ">{road.acronym}</td>
                <td className="p-2  ">{road.mesh}</td>
                <td className="p-2  ">{road.extention}</td>
                <td className="p-2  ">{stretch?.initialLatitude}</td>
                <td className="p-2  ">{stretch?.initialLongitude}</td>
                <td className="p-2  ">{road.uf}</td>
                <td className="p-2  ">
                  <NavLink className="flex justify-center" to={`/rodovias/information/${road.id}`}>
                    <CaretRight size={20} />
                  </NavLink>
                </td>
              </tr>
              )
            })}
            <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
              <td colSpan={7} className="p-2 rounded-ee-md rounded-es-md"></td>
            </tr>
          </tbody>
        </table>
        <div className="mx-auto flex items-center">
          <Pagination className="mt-2.5 mb-3" count={totalPages} onChange={goToPage}  shape="rounded" />
        </div>
      </div>
    </section>
  );
}
