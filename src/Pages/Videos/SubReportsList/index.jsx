import { CaretRight, PlusCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../../lib/api";

export function SubReportsList(){
    const params = useParams()
    const [dataReports, setDataReport] = useState([])
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

    return(
        <section>
            <header className="flex justify-end ">
                <NavLink
                    className="mb-2 flex items-center gap-1 hover:text-gold-400 hover:underline"
                    to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/register`}
                >
                    <PlusCircle className="text-gold-400" size={22} />
                        Cadastrar Sub-trecho
                </NavLink>
            </header>
            
            <div className=" gap-5 mt-5  mb-10 flex flex-wrap">
                {dataReports?.map((report) =>{
                    let dataString = report.videos.date;
                    const data = new Date(dataString);
                    const dataUTC = data.toLocaleDateString("pt-BR", {
                      timeZone: "UTC",
                    });
                    console.log(report)
                    return(
                        <NavLink key={report.id} to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/information/${report.id}`} 
                            className="mb-2 hover:bg-gray-300 text-text-100 flex items-center w-80 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                        >
                            <div className=" p-4 w-full border-r border-gray-400">
                                    <div>
                                    <strong className=" py-2">{report.description}</strong>
                                    <div className="flex justify-between   py-2">
                                        <p>Video: {dataUTC} </p>
                                    </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="">Km: {report.initialKm}  a {report.finalKm} </p>
                                    </div>
                            </div>
                            <div className=" p-2 flex flex-col gap-2 ">
                                <NavLink to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/information/${report.id}`}>
                                    <CaretRight  size={30}/>
                                </NavLink >
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        </section>
    )
}