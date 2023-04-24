import { PencilLine } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";

export function RoadInformation() {
  const { dataRoad } = useContext(UserContextRoad);
  let strech = null;

  if (dataRoad.stretch) {
    strech = JSON.parse(dataRoad?.stretch);
  }

  console.log(strech);
  return (
    <section className="">
      <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
        <div className="flex flex-col">
          <strong className="py-2 text-text-100">
            <span className="text-gray-400 tracking-wider mr-2">Rodovia:</span>
            {dataRoad.acronym}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">Malha:</span>
            {dataRoad.mesh}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Extensão:
            </span>
            {dataRoad.extention} Km
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Núcleo Regional:
            </span>
            {dataRoad.regional}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">UF:</span>
            {dataRoad.uf}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Descrição:
            </span>
            {strech.description}
          </strong>
        </div>
        <div className="py-2 flex justify-end justify-self-end">
          <button className="flex  gap-1 items-center  text-sky-600  rounded p-1 px-2 text hover:bg-sky-600 hover:text-white">
            <PencilLine size={18} />
            <p className="tracking-tight">Atualizar</p>
          </button>
        </div>
      </div>

      <h2 className="mt-5 mb-1 text-xl font-medium">Coordenadas</h2>
      <div className="flex flex justify-between items-end p-2.5 bg-white rounded-md shadow-lg mb-5">
        <div className="flex flex-col">
          <strong className="py-2 text-text-100">
            <span className="text-gray-400 tracking-wider mr-2">
              Latitude inicial:
            </span>
            {strech.initialLatitude}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Longitude inicial:
            </span>
            {strech.initialLongitude}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Latitude final:
            </span>
            {strech.endLatitude}
          </strong>
          <strong className="py-2 text-text-100 ">
            <span className="text-gray-400 tracking-wider mr-2 ">
              Latitude final:
            </span>
            {strech.endLongitude}
          </strong>
        </div>
        <div className="py-2 flex justify-end ">
          <button className="flex  gap-1 items-center  text-sky-600  rounded p-1 px-2 text hover:bg-sky-600 hover:text-white">
            <PencilLine size={18} />
            <p className="tracking-tight">Atualizar</p>
          </button>
        </div>
      </div>
    </section>
  );
}
