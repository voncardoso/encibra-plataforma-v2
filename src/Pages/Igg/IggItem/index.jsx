import { FileText, Files, PlusCircle, CaretRight } from "@phosphor-icons/react";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";

export function IggItem(){
    const params = useParams()
    const { dataRoad } = useContext(UserContextRoad);
    let dataString = ""
    const dataIgg = dataRoad.iggs?.filter((igg) => igg.id === Number(params.igg))

    if(dataIgg){
      dataString = dataIgg[0]?.date;
    }

    const data = new Date(dataString);
    const dataUTC = data.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    });
    console.log("params",params)
    console.log(dataRoad)
    console.log("igg", dataIgg)
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
                            <NavLink 
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
                                </ul>
                            </NavLink>
                    </ul>

                    <h1 className="text-lg text-text-100 border-b border-gray-400 mt-5">Sub Relatorios</h1>
                    <ul className=" gap-5 mt-5  mb-10">
                            <NavLink to={`/rodovias/${params.id}/igg/${params.igg}/subreports`} 
                                className="text-text-100 flex items-center w-80 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                            >
                                <Files size={80} className="ml-2"/>
                                <div className="p-4 w-full border-r border-gray-400">
                                    <strong className="text-sm py-2">Nome do Trecho</strong>
                                    <div className="flex justify-between  text-sm py-2">
                                        <p>Video: </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>Inicial: 10 km</p>
                                        <p>Final: 20 km</p>
                                    </div>
                                </div>
                                <ul className=" p-2 flex flex-col gap-2 ">
                                    <NavLink to={`/rodovias/${params.id}/igg/${params.igg}/subreports`}>
                                        <CaretRight  size={30}/>
                                    </NavLink >
                                </ul>
                            </NavLink>
                    </ul>
                </div>
        </div>
    )
  }
}