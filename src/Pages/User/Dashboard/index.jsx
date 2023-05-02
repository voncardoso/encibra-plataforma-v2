import { PlusCircle } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function DashboardUser(){
    return(
        <section  className="w-full overflow-y-scroll ">
            <header className="flex justify-between pr-5 pt-5 pb-8 items-center">
                <strong className="text-2xl">Usuários</strong>
                <NavLink
                    className="flex items-center gap-1 hover:text-gold-400 hover:underline"
                    to="/user/registro"
                >
                    <PlusCircle className="text-gold-400" size={22} />
                    Cadastrar Usuários
                </NavLink>
      </header>
        </section>
    )
}