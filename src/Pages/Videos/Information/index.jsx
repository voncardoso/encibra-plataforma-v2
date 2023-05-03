import { PencilLine } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";

export function Information() {
  const { id, video } = useParams();

  const { dataRoad } = useContext(UserContextRoad);

  const dataVideos = dataRoad.videos?.filter(
    (item) => item.id === Number(video)
  );
  console.log(dataVideos);
  if (dataVideos) {
    return (
      <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
        {dataVideos.map((video) => {
          let dataString = video.date;
          const data = new Date(dataString);
          const dataUTC = data.toLocaleDateString("pt-BR", {
            timeZone: "UTC",
          });
          return (
            <>
              <div className="flex flex-col">
                <strong className="py-2 text-text-100">
                  <span className="text-gray-400 tracking-wider mr-2">
                    Trecho:
                  </span>
                  {video.stretch}
                </strong>
                <strong className="py-2 text-text-100 ">
                  <span className="text-gray-400 tracking-wider mr-2 ">
                    Data:
                  </span>
                  {dataUTC}
                </strong>
                <strong className="py-2 text-text-100 ">
                  <span className="text-gray-400 tracking-wider mr-2 ">
                    Extensão analisada:
                  </span>
                  {video.extension} Km
                </strong>
                <strong className="py-2 text-text-100 ">
                  <span className="text-gray-400 tracking-wider mr-2 ">
                    Km inicial:
                  </span>
                  {video.kmInitial}
                </strong>
                <strong className="py-2 text-text-100 ">
                  <span className="text-gray-400 tracking-wider mr-2 ">
                    Km final:
                  </span>
                  {video.kmFinal}
                </strong>
                <strong className="py-2 text-text-100 ">
                  <span className="text-gray-400 tracking-wider mr-2 ">
                    Status:
                  </span>
                  {(video.processed === "PENDING" && "Pendente") ||
                    (video.processed === "PROCESSING" && "Em analise") ||
                    (video.processed === "PROCESSED" && "Analisado")}
                </strong>
              </div>
              <div className="py-2 flex justify-end justify-self-end">
                <button className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                  <PencilLine size={18} />
                </button>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
