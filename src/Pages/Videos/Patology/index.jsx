import { Image, Lock, LockOpen, PencilLine, PlusCircle, TrashSimple } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { api } from "../../../lib/api";
import Pagination from '@mui/material/Pagination';

export function Patology(){
  const [dataPatology, setDataPatology] = useState([])
  const {id, video} = useParams();
  const [lock, setLock] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() =>{
    async function getPatology(){
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const patology = {}

      const response = await api.put(
        `/road/${id}/patology/null/findMany`,
        patology,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // function filtarar as patologias
      setDataPatology(response.data.filter(item => item.videoId  === Number(video)));
    }
    getPatology()
  }, [])

  function handleLock() {
    if (lock === true) {
      setLock(false);
    } else {
      setLock(true);
    }
  }
  // criar paginação
  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  const paginatedData = paginate(dataPatology, currentPage, itemsPerPage);
  const totalPages = Math.ceil(dataPatology.length / itemsPerPage);
  
  function goToPage(event, pageNumber) {
    console.log("",pageNumber)
    setCurrentPage(pageNumber);
  }
  console.log(dataPatology)

    return(
        <div className="mt-5 flex flex-col justify-center">
        <header className="flex justify-end ">
            <NavLink
              className="mb-5 flex items-center gap-1 hover:text-gold-400 hover:underline"
              to={`/rodovias/videos/${id}/patology/${video}/register`}
            >
              <PlusCircle className="text-gold-400" size={22} />
              Cadastrar Patologia
            </NavLink>
        </header>
        <table className="table-auto w-full text-center ">
          <thead>
            <tr className="bg-gray-300 ">
              <th className="p-2 rounded-ss-md">Lado</th>
              <th className="p-2">Tipo</th>
              <th className="p-2">Descrição</th>
              <th className="p-2">Km</th>
              <th className="p-2">Min</th>
              <th className="p-2">Latitude</th>
              <th className="p-2">Longitude</th>
              <th className="p-2 flex justify-end">
                <button
                  className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                    onClick={handleLock}
                  >
                    {lock ? <LockOpen size={18} /> : <Lock size={18} />}
                </button>
              </th>
              <th>
                <NavLink></NavLink>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((patology) =>{
              const roadSide = JSON.parse(patology.roadSide)
              const cracks = JSON.parse(patology.cracks)
              const sags = JSON.parse(patology.sags)
              const otherDefects = JSON.parse(patology.otherDefects)
            
              return(
                <tr key={patology.id} className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                  <td className="p-2  ">
                    {roadSide.BD && "BD "}  
                    {roadSide.BE && "BE "}  
                    {roadSide.EIXO && "EIXO "}  
                    {roadSide.PISTA && "PISTA "}
                  </td>
                  <td className="p-2  ">
                    {sags.ALC && "ALC "}
                    {sags.ALP && "ALP "}
                    {sags.ATC && "ATC "}
                    {sags.ATP && "ATP "}

                    {otherDefects.D && "D "}
                    {otherDefects.E && "E "}
                    {otherDefects.EX && "EX "}
                    {otherDefects.O && "O "}
                    {otherDefects.P && "P "}
                    {otherDefects.R && "R "}
                    {cracks.FI && "FI "}
                    {cracks.J && "J "}
                    {cracks.JE && "JE "}
                    {cracks.TB && "TB "}
                    {cracks.TBE && "TBE "}
                    {cracks.TLC && "TLC "}
                    {cracks.TTL && "TTL "}
                    {cracks.TRR && "TRR "}
                    {cracks.TTC && "TTC "}
                    {cracks.TLL && "TLL "}
                  </td>
                  <td className="p-2  w-48 ">
                  <p className="truncate w-48">{patology.descrption}</p>
                  </td>
                  <td className="p-2  ">{patology.km}</td>
                  <td className="p-2  ">{patology.videoTime}</td>
                  <td className="p-2  ">{patology.latitude}</td>
                  <td className="p-2  ">{patology.longitude}</td>
                  <td className="p-2">
                    <div className="flex justify-end gap-4 items-center h-auto">
                        <PencilLine size={24} color={"#0b7bb7"} />
                        <Image size={24} color={"#56A899"} />
                        {lock && <TrashSimple size={24} color={"#e64a33"} />}
                    </div>
                  </td>
                </tr>
              )
            })}
            <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
              <td colSpan={9} className="p-2 rounded-ee-md rounded-es-md"></td>
            </tr>
          </tbody>
        </table>
        <div className="mx-auto flex items-center">
          <Pagination className="mt-2.5 mb-3" count={totalPages} onChange={goToPage}  shape="rounded" />
        </div>
      </div>
    )
}