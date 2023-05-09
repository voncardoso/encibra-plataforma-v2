import { FileText, Files, PlusCircle } from "@phosphor-icons/react";
import { NavLink, useParams } from "react-router-dom";

export function IggItem(){
    const params = useParams()
    console.log(params)
    return(
        <div className="mt-5 flex flex-col justify-center">
            <header className="flex justify-end ">
                <NavLink
                    className="mb-5 flex items-center gap-1 hover:text-gold-400 hover:underline"
                    to={`#`}
                >
                    <PlusCircle className="text-gold-400" size={22} />
                        Cadastrar Patologia
                </NavLink>
            </header>

            
            <div className="">
                <h1 className="text-lg text-text-100 border-b border-gray-400">Vídeo</h1>
                <div className="flex flex-col  mt-2">
                    <strong>Nome do trecho</strong>
                    <span>Data video</span>
                </div>
                <h1 className="text-lg text-text-100 border-b border-gray-400 mt-5">Relatorio Principal</h1>
                    <ul className=" gap-5 mt-5  ">
                            <li 
                                className="text-text-100 flex items-center w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                            >
                                <Files size={80} className="ml-2"/>
                                <div className="p-4 w-full border-r border-gray-400">
                                    <strong className="text-sm py-2">Nome do Trecho</strong>
                                    <div className="flex justify-between  text-sm py-2">
                                        <p>Video: </p>
                                    </div>
                                </div>
                                <ul className=" p-2 flex flex-col gap-2 ">
                                    <NavLink to={`/igg/${params.igg}/pdf`}>
                                        <FileText className="text-gold-400" size={30}/>
                                    </NavLink >
                                </ul>
                            </li>
                    </ul>

                    <h1 className="text-lg text-text-100 border-b border-gray-400 mt-5">Sub Relatorios</h1>
                    <ul className=" gap-5 mt-5  mb-10">
                            <li 
                                className="text-text-100 flex items-center w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                            >
                                <Files size={80} className="ml-2"/>
                                <div className="p-4 w-full border-r border-gray-400">
                                    <strong className="text-sm py-2">Nome do Trecho</strong>
                                    <div className="flex justify-between  text-sm py-2">
                                        <p>Video: </p>
                                    </div>
                                    <div>
                                        Inicial: 10 km
                                        Final: 20 km
                                    </div>
                                </div>
                                <ul className=" p-2 flex flex-col gap-2 ">
                                    <NavLink to="#">
                                        <FileText className="text-gold-400" size={30}/>
                                    </NavLink >
                                </ul>
                            </li>
                    </ul>
                </div>
        </div>
    )
}