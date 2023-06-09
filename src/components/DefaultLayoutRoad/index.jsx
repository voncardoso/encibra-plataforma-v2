import { BrowserRouter, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Nav } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { useContext } from "react";
import { UserContextRoad } from "../../Context/useContextRoad";

export function DefaultLayoutRoad() {
  const params = useParams();
  const { Roads, dataRoad, setIdReloadRoad } = useContext(UserContextRoad);
  const {pathname} = useLocation();
  const [dataVideos, setDataVideos] = useState([]);

  useEffect(() => {
    Roads(params.id);
    setIdReloadRoad(params.id)
  }, [pathname]);

  useEffect(() => {
    async function getVideo() {
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const videoUpdate = {};
      const response = await api.put(
        `/road/${params.id}/videos/${params.video}/findUnique`,
        videoUpdate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDataVideos(response.data);
    }
    getVideo();
  }, [pathname]);


  console.log("params", params)
  console.log("pathname",pathname)
  console.log("data video",dataVideos)

  if(dataRoad){
    return (
      <section className="ml-5 gap-5 bg-background h-screen overflow-y-scroll w-full pr-5 ">
        <div>
          <header className="flex justify-between pr-5 pt-5 pb-5 items-center text-text-100">
            <nav>
              <NavLink to={"/rodovias"}>
                <strong className="text-2xl hover:underline">Rodovias </strong>
              </NavLink>
              <NavLink to={`/rodovias/nucleo/${1}`}>
                <strong className="text-2xl hover:underline"> | NR {dataRoad.regional} </strong>
              </NavLink>
              <strong className="text-2xl"> | </strong>
              <NavLink to={`#`}>
                <strong className="text-2xl hover:underline">
                  {dataRoad.acronym} 
                  {pathname === `/rodovias/videos/${params?.id}/information/${params?.video}` && ` | Trecho: ${dataVideos.stretch}`} 
                  {pathname === `/rodovias/videos/${params?.id}/patology/${params?.video}` && ` | Trecho: ${dataVideos.stretch}`}
                  {pathname === `/rodovias/videos/${params?.id}/subtrecho/${params?.video}` && ` | Trecho: ${dataVideos.stretch}`}
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
          <NavLink className="" to={`/rodovias/${params.id}/igg`}>
            Igg
          </NavLink>
        </Nav>
  
        <Outlet />
      </section>
    );
  }
}
