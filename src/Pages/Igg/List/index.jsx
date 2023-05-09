import { Files, PlusCircle } from "@phosphor-icons/react";
import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";

export function Igg(){
    const { dataRoad } = useContext(UserContextRoad);
    const params = useParams()

    console.log(dataRoad)


    return(
        <section className="w-full">
            <div className="flex justify-end p-4">
                <NavLink
                    className="flex items-center gap-1 hover:text-gold-400 hover:underline"
                    to={`/rodovias/igg/${params.id}/cadastro`}
                >
                    <PlusCircle className="text-gold-400" size={22} />
                    Cadastrar Igg
                </NavLink>
          </div>

          <ul className="flex flex-wrap gap-5 mt-5 m-auto lg:justify-center mb-5">
            {dataRoad.iggs?.map((igg) =>{
                let dataString = igg.date;
                const data = new Date(dataString);
                const dataUTC = data.toLocaleDateString("pt-BR", {
                  timeZone: "UTC",
                });
                return(
                    <NavLink 
                        className="text-text-100 flex items-center w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer hover:bg-gray-300"
                        to={`/rodovias/${params.id}/igg/${igg.id}`}
                    >
                        <Files size={80}/>
                        <div className="p-4 w-full">
                            <strong className="text-sm py-2">Nome do Trecho</strong>
                            <div className="flex justify-between  text-sm py-2">
                                <p>Video: {dataUTC}</p>
                            </div>
                        </div>
                    </NavLink>
                )
            })}
          </ul>
        </section>
    )
}