import { BrowserRouter, NavLink, Outlet, useParams } from "react-router-dom";
import { Nav } from "./style";

export function DefaultLayoutRoad(){
    const params = useParams();
    return(
        <section className="gap-5 bg-background h-screen overflow-y-scroll w-full pr-5 ">
            <div>
                <header className="flex justify-between pr-5 pt-5 pb-5 items-center text-text-100">
                    <nav>
                    <NavLink to={"/rodovias"}>
                        <strong className="text-2xl hover:underline">Rodovias </strong>
                    </NavLink>
                    <NavLink to={`/rodovias/nucleo/${1}`}>
                        <strong className="text-2xl hover:underline"> | NR-01</strong>
                    </NavLink>
                    <strong className="text-2xl">|</strong>
                    <NavLink to={`#`}>
                        <strong className="text-2xl hover:underline"> PA-999</strong>
                    </NavLink>
                    </nav>
                </header>
            </div>

            
            <Nav className="w-full flex gap-5 border-b border-gray-400 text-gray-400 py-1">
                <NavLink exact className="" to={`/rodovias/information/${"PA-999"}`}>Informações</NavLink>
                <NavLink className="" to={`/rodovias/municipios/${"PA-999"}`}>Municípios</NavLink>
                <NavLink className="" to={"/teste"}>Pontos</NavLink>
                <NavLink className="" to={"/teste"}>Revestimentos</NavLink>
                <NavLink className="" to={"/teste"}>Videos</NavLink>
                <NavLink className="" to={"/teste"}>Igg</NavLink>
            </Nav>
           
            <Outlet />
            
        </section>
    )
}