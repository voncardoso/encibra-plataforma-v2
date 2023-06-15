import { CaretRight, PlusCircle, TrashSimple } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../../lib/api";

export function SubReportsList(){
    const params = useParams();
    const [dataReports, setDataReport] = useState([]);

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

    async function DeleteReports(id){
        if(window.confirm("Deseja Deletar")){
            try {
                const token = window.localStorage.getItem("encibraapptoken-v2");
                const response = await api.delete(`/reports/${id}`,  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                })
                
                if(response.status === 200){
                    window.alert("Sub trecho deletado com sucesso")
                }
            } catch (error) {
                window.alert("Error ao deletar Sub trecho")
            }
        }
    }

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

                    return(
                        <div className="mb-2 hover:bg-gray-300 text-text-100 flex justify-between items-center w-80 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer">
                            <NavLink key={report.id} to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/information/${report.id}`}>
                                <div className=" p-4 w-full ">
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
                            </NavLink>
                            <div className=" p-2 flex flex-col h-full gap-2 justify-end">
                                <button onClick={() =>{
                                    DeleteReports(report.id)
                                }}>
                                    <TrashSimple
                                        size={24}
                                        color={"#e64a33"}
                                    />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}