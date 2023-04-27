import { BrowserRouter, NavLink, Outlet, useParams } from "react-router-dom";
import { Nav } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useContext } from "react";
import { UserContextRoad } from "../../Context/useContextRoad";

export function DefaultLayoutRoad() {
  const params = useParams();
  const { Roads, dataRoad, setIdReloadRoad } = useContext(UserContextRoad);

  useEffect(() => {
    Roads(params.id);
    setIdReloadRoad(params.id)
  }, []);

  return (
    <section className="gap-5 bg-background h-screen overflow-y-scroll w-full pr-5 ">
      <div>
        <header className="flex justify-between pr-5 pt-5 pb-5 items-center text-text-100">
          <nav>
            <NavLink to={"/rodovias"}>
              <strong className="text-2xl hover:underline">Rodovias </strong>
            </NavLink>
            <NavLink to={`/rodovias/nucleo/${1}`}>
              <strong className="text-2xl hover:underline"> | NR-01 </strong>
            </NavLink>
            <strong className="text-2xl"> | </strong>
            <NavLink to={`#`}>
              <strong className="text-2xl hover:underline">
                {dataRoad.acronym}
              </strong>
            </NavLink>
          </nav>
        </header>
      </div>

      <Nav className="w-full flex gap-5 border-b border-gray-400 text-gray-400 py-1">
        <NavLink exact className="" to={`/rodovias/information/${params.id}`}>
          Informações
        </NavLink>
        <NavLink className="" to={`/rodovias/municipios/${params.id}`}>
          Municípios
        </NavLink>
        <NavLink className="" to={`/rodovias/pontos/${params.id}`}>
          Pontos
        </NavLink>
        <NavLink className="" to={`/rodovias/resvestimento/${params.id}`}>
          Revestimentos
        </NavLink>
        <NavLink className="" to={`/rodovias/videos/${params.id}`}>
          Videos
        </NavLink>
        <NavLink className="" to={"/teste"}>
          Igg
        </NavLink>
      </Nav>

      <Outlet />
    </section>
  );
}
