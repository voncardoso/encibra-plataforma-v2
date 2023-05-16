import { NavLink, Outlet, useParams } from "react-router-dom";
import { Nav } from "./style";

export function DefaultLayoutSubReports() {
  const params = useParams();

  return (
    <section>
      <Nav className="w-48 m-auto my-2.5 flex justify-center gap-10  py-1">
        <NavLink
          exact
          className="text-gray-400"
          to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/information`}
        >
          Informações
        </NavLink>
        <NavLink
          className="text-gray-400"
          to={`/rodovias/videos/${params.id}/patology/${params.video}`}
        >
          Patologias
        </NavLink>
      </Nav>

      <Outlet />
    </section>
  );
}
