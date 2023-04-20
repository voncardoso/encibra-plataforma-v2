import { useNavigate } from "react-router-dom"
import videoDisponivel from "../../../assets/videoDisponivel.png"
export function List(){
    const navigate = useNavigate()

    function handleNavigationVideoItem(){
        navigate(`/rodovias/videos/${"PA-999"}/information/${2132}`)
    }
    return(
        <section className="w-full">
            <ul className="flex flex-wrap gap-5 mt-5 m-auto lg:justify-center mb-5">
                <li 
                    className="w-60 bg-white shadow-md shadow-black rounded-lg cursor-pointer hover:bg-gray-300"
                    onClick={handleNavigationVideoItem}
                >
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