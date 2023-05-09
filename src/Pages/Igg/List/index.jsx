import { PlusCircle } from "@phosphor-icons/react";
import { NavLink, useParams } from "react-router-dom";

export function Igg(){
    const params = useParams()
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
        </section>
    )
}