import { PencilLine } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { ModalUpadate } from "./MadalUpdate";
import { api } from "../../../lib/api";

export function Information() {
  const { id, video } = useParams();
  const { dataRoad } = useContext(UserContextRoad);
  const [dataVideos, setDataVideos] = useState([]);

  useEffect(() => {
    async function getVideo() {
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const videoUpdate = {};
      const response = await api.put(
        `/road/${id}/videos/${video}/findUnique`,
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
  }, []);



  function arrayUpadeInformation(object) {
    setDataVideos(object);
  }


  if (dataVideos) {
    return (
      <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
        <div className="flex flex-col">
          <strong className="py-2 text-text-100">
            <span className="text-gray-400 tracking-wider mr-2">Trecho:</span>
            {dataVideos.stretch}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">Data:</span>
            {dataVideos.date &&
              new Date(dataVideos.date).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Extensão analisada:
            </span>
            {dataVideos.extension} Km
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Km inicial:
            </span>
            {dataVideos.kmInitial}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Km final:
            </span>
            {dataVideos.kmFinal}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">Status:</span>
            {(dataVideos.processed === "PENDING" && "Pendente") ||
              (dataVideos.processed === "PROCESSING" && "Em analise") ||
              (dataVideos.processed === "PROCESSED" && "Analisado")}
          </strong>
        </div>
        <div className="py-2 flex justify-end justify-self-end">
          <Dialog>
            <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
              <PencilLine size={18} />
            </DialogTrigger>
            <ModalUpadate
              data={dataVideos}
              arrayUpadeInformation={arrayUpadeInformation}
            />
          </Dialog>
        </div>
      </div>
    );
  }
}
