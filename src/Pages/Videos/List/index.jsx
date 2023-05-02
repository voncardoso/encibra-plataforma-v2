import { Link, useNavigate, useParams } from "react-router-dom"
import videoDisponivel from "../../../assets/videoDisponivel.png"
import { PlusCircle } from "@phosphor-icons/react"
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useContext } from "react";

export function List(){
    const navigate = useNavigate();
    const params = useParams();
    const { dataRoad } = useContext(UserContextRoad);
    console.log(dataRoad)

    if(dataRoad){
        return(
            <section className="w-full">
               <div className="flex justify-end p-4">
                    <Link   
                        className="flex items-center gap-1 hover:text-gold-400 hover:underline" 
                        to={`/rodovias/videos/${params.id}/cadastro`}
                    >
                         <PlusCircle className="text-gold-400" size={22} />
                        Cadastrar Vídeo
                    </Link>
               </div>
                <ul className="flex flex-wrap gap-5 mt-5 m-auto lg:justify-center mb-5">
                    {dataRoad.videos?.map((video) =>{
                        let dataString = video.date
                        const data = new Date(dataString);
                        const dataUTC = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
                        return(
                            <Link
                                key={video.id} 
                                to={`/rodovias/videos/${params.id}/information/${video.id}`}
                                className="w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer hover:bg-gray-300"
                            >
                                <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                                <div className="px-4">
                                    <strong className="text-sm">{video.stretch}</strong>
                                    <div className="flex justify-between text-sm py-2">
                                        <p className="text-emerald-500">{video.processed}</p>
                                        <p>{dataUTC}</p>
                                    </div>
                                </div>
                            </Link >
                        )
                    })}
                </ul>
            </section>
        )
    }
}