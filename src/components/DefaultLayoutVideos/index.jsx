import { NavLink, Outlet } from "react-router-dom";
import { Nav } from "./style";

export function DefaultLayoutVideos(){
    return(
        <section>
            <Nav className="w-48 m-auto my-2.5 flex justify-center gap-10  py-1">
                <NavLink exact className="  text-gray-400" to={`/rodovias/videos/${"PA-999"}/information/${2132}`}>Informações</NavLink>
                <NavLink className=" text-gray-400" to={`/rodovias/municipios/${"PA-999"}`}>Patologias</NavLink>
            </Nav>
           
            <Outlet />
        </section>
    )
}