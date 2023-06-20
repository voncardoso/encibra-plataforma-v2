import { FileText, Files, PlusCircle, CaretRight, MapTrifold } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { api } from "../../../lib/api";

export function IggItem(){
    const params = useParams()
    const [dataReports, setDataReport] = useState([])
    const { dataRoad } = useContext(UserContextRoad);
    let dataString = ""
    const dataIgg = dataRoad.iggs?.filter((igg) => igg.id === Number(params.igg))

    useEffect(() =>{
        async function handleGetReports(){
            const token = window.localStorage.getItem("encibraapptoken-v2");
            const response = await api.get(`/reports`,  {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            })
            setDataReport(response.data)
        }

        handleGetReports()
    }, [])

    const dataSubTrecho = dataReports.filter((item) => item.iggId === Number(params.igg)  )
    
    
    if(dataIgg){
      dataString = dataIgg[0]?.date;
    }

    const data = new Date(dataString);
    const dataUTC = data.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    });

    
  if(dataIgg){
    return(
        <div className="mt-5 flex flex-col justify-center">
            <header className="flex justify-end ">
                <NavLink
                    className="mb-2 flex items-center gap-1 hover:text-gold-400 hover:underline"
                    to={`/rodovias/videos/${params.id}/igg/${params.igg}/subcadastro`}
                >
                    <PlusCircle className="text-gold-400" size={22} />
                        Cadastrar Sub-relatório
                </NavLink>
            </header>

            
            <div className="">
                
                <h1 className="text-lg text-text-100 border-b border-gray-400 ">Relatorio Principal</h1>
                    <ul className=" gap-5 mt-5  ">
                            <li
                                className="text-text-100 flex items-center w-80 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                                to={`/${params.id}/igg/${params.igg}/pdf/`}
                            >
                                <Files size={80} className="ml-2"/>
                                <div className="p-4 w-full border-r border-gray-400">
                                    <strong className="text-sm py-2">{dataIgg[0].description}</strong>
                                    <div className="flex justify-between  text-sm py-2">
                                        <p>Video: {dataUTC}</p>
                                    </div>
                                </div>
                                <ul className=" p-2 flex flex-col gap-2 ">
                                    <NavLink to={`/${params.id}/igg/${params.igg}/pdf/`}>
                                        <FileText className="text-gold-400" size={30}/>
                                    </NavLink >

                                    <NavLink to={`/${params.id}/igg/${params.igg}/pdf/map`}>
                                        <MapTrifold className="text-emerald-500" weight="duotone"  size={30}/>
                                    </NavLink >
                                </ul>
                            </li>
                    </ul>

                    <h1 className="text-lg text-text-100 border-b border-gray-400 mt-5">Sub Relatorios</h1>
                    <div className="flex gap-5">
                    {dataSubTrecho.map((item) =>{
                        return(
                            <div className=" gap-5 mt-5  mb-10">
                            <NavLink to={`/${params.id}/igg/${params.igg}/reportspdf/${item.id}`} 
                                className="text-text-100 flex items-center w-80 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                            >
                                <Files size={80} className="ml-2"/>
                                <div className="p-4 w-full border-r border-gray-400">
                                    <strong className="text-sm py-2">{item.description}</strong>
                                    <div className="flex flex-col">
                                        <p>Inicial: {item.initialKm} km</p>
                                        <p>Final: {item.finalKm} km</p>
                                    </div>
                                </div>
                                <ul className=" p-2 flex flex-col gap-2 ">
                                    <NavLink to={`/${params.id}/igg/${params.igg}/reportspdf/${item.id}`}>
                                        <FileText className="text-gold-400"  size={30}/>
                                    </NavLink >
                                    <NavLink to={`/${params.id}/igg/${params.igg}/reportspdf/${item.id}/map`}>
                                        <MapTrifold className="text-emerald-500" weight="duotone"  size={30}/>
                                    </NavLink >
                                </ul>
                            </NavLink>
                    </div>
                        )
                    })}
                    </div>
                </div>
        </div>
    )
  }
}