import { Image, PencilLine, PlusCircle, TrashSimple } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { api } from "../../../lib/api";

export function Patology(){
  const [dataPatology, setDataPatology] = useState([])
  const {id, video} = useParams();

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

  console.log(dataPatology)

    return(
        <div className="mt-5">
        <header className="flex justify-end ">
            <NavLink
              className="mb-5 flex items-center gap-1 hover:text-gold-400 hover:underline"
              to={`/rodovias/videos/${id}/patology/${video}/register`}
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
              <th>
                <NavLink></NavLink>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataPatology?.map((patology) =>{
              const roadSide = JSON.parse(patology.roadSide)
              const cracks = JSON.parse(patology.cracks)
              const sags = JSON.parse(patology.sags)
              const otherDefects = JSON.parse(patology.otherDefects)
              console.log(cracks, sags, otherDefects)
              return(
                <tr key={patology.id} className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                  <td className="p-2  ">
                    {roadSide.BD && "BD "}  
                    {roadSide.BE && "BE "}  
                    {roadSide.EIXO && "BEIXO "}  
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
                    <div className="flex gap-4 items-center h-auto">
                        <PencilLine size={22} color={"#0b7bb7"} />
                        <Image size={22} color={"#56A899"} />
                        <TrashSimple size={22} color={"#e64a33"} />
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
      </div>
    )
}