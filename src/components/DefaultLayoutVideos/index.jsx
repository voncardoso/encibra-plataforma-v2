import { NavLink, Outlet, useParams } from "react-router-dom";
import { Nav } from "./style";

export function DefaultLayoutVideos() {
  const params = useParams();

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
        <NavLink
          className="text-gray-400"
          to={`/rodovias/videos/${params.id}/subtrecho/${params.video}`}
        >
         Sub-trecho
        </NavLink>
      </Nav>
      

      <Outlet />
    </section>
  );
}
