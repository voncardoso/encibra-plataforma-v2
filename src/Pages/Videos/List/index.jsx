import { Link, useNavigate, useParams } from "react-router-dom";
import videoDisponivel from "../../../assets/videoDisponivel.png";
import { PlusCircle } from "@phosphor-icons/react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useContext, useState } from "react";
import { UserContextLogin } from "../../../Context/useContextLogin";

export function List() {
  const navigate = useNavigate();
  const params = useParams();
  const { dataRoad } = useContext(UserContextRoad);
  const { dataUser } = useContext(UserContextLogin);
  let statusInformation = "";

  // função para verificar o status do veideo
  function statusVideo(status) {
    let statusColor;
    switch (status) {
      case "PENDING":
        statusInformation = "Pendente";
        statusColor = "red-400";
        break;
      default:
        break;
    }
  }


  if (dataRoad) {
    if (
      dataUser.position === "ADMIN" ||
      dataUser.position === "ANALYST_ENGINEER"
    ) {
      return (
        <section className="w-full">
          <div className="flex justify-end p-4">
            <Link
              className="flex items-center gap-1 hover:text-gold-400 hover:underline"
              to={`/rodovias/videos/${params.id}/cadastro`}
            >
              <PlusCircle className="text-gold-400" size={22} />
              Cadastrar Vídeo
            </Link>
          </div>
          <ul className="flex flex-wrap gap-5 mt-5 m-auto lg:justify-center mb-5">
            {dataRoad.videos?.map((video) => {
              let dataString = video.date;
              const data = new Date(dataString);
              const dataUTC = data.toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              });
              return (
                <Link
                  key={video.id}
                  to={`/rodovias/videos/${params.id}/information/${video.id}`}
                  className="w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer hover:bg-gray-300"
                >
                  <img
                    className="px-4 pt-4 pb-2"
                    src={videoDisponivel}
                    alt=""
                  />
                  <div className="px-4">
                    <strong className="text-sm ">{video.stretch}</strong>
                    <div className="flex justify-between text-sm py-2">
                      <p
                        className={`text${
                          (video.processed === "PENDING" && "-red-500") ||
                          (video.processed === "PROCESSING" && "-indigo-500") ||
                          (video.processed === "PROCESSED" && "-emerald-500")
                        }`}
                      >
                        {(video.processed === "PENDING" && "Pendente") ||
                          (video.processed === "PROCESSING" && "Em analise") ||
                          (video.processed === "PROCESSED" && "Analisado")}
                      </p>
                      <p>{dataUTC}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </section>
      );
    } else if (dataUser.position === "ENGINEER") {
      const dataVideoFilter = dataRoad.videos?.filter(
        (item) => item.createdBy === 4
      );
      return (
        <section className="w-full">
          <div className="flex justify-end p-4">
            <Link
              className="flex items-center gap-1 hover:text-gold-400 hover:underline"
              to={`/rodovias/videos/${params.id}/cadastro`}
            >
              <PlusCircle className="text-gold-400" size={22} />
              Cadastrar Vídeo
            </Link>
          </div>
          <ul className="flex flex-wrap gap-5 mt-5 m-auto lg:justify-center mb-5">
            {dataVideoFilter?.map((video) => {
              let dataString = video.date;
              const data = new Date(dataString);
              const dataUTC = data.toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              });
              return (
                <Link
                  key={video.id}
                  to={`/rodovias/videos/${params.id}/information/${video.id}`}
                  className="w-60 bg-white shadow-md shadow-[rgba(0,0,0,0.3)] rounded-lg cursor-pointer hover:bg-gray-300"
                >
                  <img
                    className="px-4 pt-4 pb-2"
                    src={videoDisponivel}
                    alt=""
                  />
                  <div className="px-4">
                    <strong className="text-sm ">{video.stretch}</strong>
                    <div className="flex justify-between text-sm py-2">
                      <p
                        className={`text${
                          (video.processed === "PENDING" && "-red-500") ||
                          (video.processed === "PROCESSING" && "-indigo-500") ||
                          (video.processed === "PROCESSED" && "-emerald-500")
                        }`}
                      >
                        {(video.processed === "PENDING" && "Pendente") ||
                          (video.processed === "PROCESSING" && "Em analise") ||
                          (video.processed === "PROCESSED" && "Analisado")}
                      </p>
                      <p>{dataUTC}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </section>
      );
    }
  }
}
