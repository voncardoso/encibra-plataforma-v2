import { NavLink } from "react-router-dom";

export function Dashboard(){
    return(
        <section className="w-full">
            <header className="flex justify-between pr-5 pt-8 pb-8">
                <strong>Rodovias</strong>
                <NavLink>
                    Cadastrar Rodovia
                </NavLink>
            </header>
            <h1>teste</h1>
        </section>
    )
}