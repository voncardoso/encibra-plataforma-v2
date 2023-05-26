import { NavLink, Outlet, useParams } from "react-router-dom";
import { Nav } from "./style";
import { useContext } from "react";
import { UserContextLogin } from "../../Context/useContextLogin";

export function DefaultLayoutVideos() {
  const params = useParams();
  const {dataUser, getUserId} = useContext(UserContextLogin)
  
  return (
    <section>
      <Nav className=" m-auto my-2.5 flex justify-center gap-10  py-1">
        <NavLink
          exact
          className="text-gray-400"
          to={`/rodovias/videos/${params.id}/information/${params.video}`}
        >
          Informações
        </NavLink>
        <NavLink
          className="text-gray-400"
          to={`/rodovias/videos/${params.id}/patology/${params.video}`}
        >
          Patologias
        </NavLink>
        {
        dataUser.position === "ADMIN" || dataUser.position === "ANALYST_ENGINEER" ? 
          <NavLink
            className="text-gray-400"
            to={`/rodovias/videos/${params.id}/subtrecho/${params.video}`}
          >
           Sub-trecho
          </NavLink> : ""
        }
      </Nav>
      

      <Outlet />
    </section>
  );
}
