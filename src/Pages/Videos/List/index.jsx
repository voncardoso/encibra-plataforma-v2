import { Link, useNavigate, useParams } from "react-router-dom"
import videoDisponivel from "../../../assets/videoDisponivel.png"
import { PlusCircle } from "@phosphor-icons/react"
export function List(){
    const navigate = useNavigate()
    const params = useParams()
    console.log(params.id)
    function handleNavigationVideoItem(){
        navigate(`/rodovias/videos/${params.id}/information/${2132}`)
    }
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
                <Link 
                    to={`/rodovias/videos/${params.id}/information/${2132}`}
                    className="w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer hover:bg-gray-300"
                >
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                    <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                    <div className="flex justify-between text-sm py-2">
                        <p className="text-emerald-500">Processado</p>
                        <p>12/12/1997</p>
                    </div>
                    </div>
                </Link >
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
                <li className=" w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300">
                    <img className="px-4 pt-4 pb-2" src={videoDisponivel} alt="" />
                    <div className="px-4">
                        <strong className="text-sm">PA-318 / Praia do Crispim</strong>
                        <div className="flex justify-between text-sm py-2">
                            <p className="text-emerald-500">Processado</p>
                            <p>12/12/1997</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    )
}