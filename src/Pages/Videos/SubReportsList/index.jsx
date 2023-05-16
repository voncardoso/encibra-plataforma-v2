import { CaretRight, PlusCircle } from "@phosphor-icons/react";
import { NavLink, useParams } from "react-router-dom";

export function SubReportsList(){
    const params = useParams()
    console.log(params)
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
            <div className=" gap-5 mt-5  mb-10">
                <NavLink to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/information`} 
                    className=" hover:bg-gray-300 text-text-100 flex items-center w-80 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer"
                >
                    
                    <div className=" p-4 w-full border-r border-gray-400">
                            <div>
                            <strong className=" py-2">Nome do Trecho</strong>
                            <div className="flex justify-between   py-2">
                                <p>Video: </p>
                            </div>
                            </div>
                            <div className="flex justify-between">
                                <p className="">Km: 10  a 20 </p>
                            </div>
                    </div>
                    <div className=" p-2 flex flex-col gap-2 ">
                        <NavLink to={`#`}>
                            <CaretRight  size={30}/>
                        </NavLink >
                    </div>
                </NavLink>
            </div>
        </section>
    )
}