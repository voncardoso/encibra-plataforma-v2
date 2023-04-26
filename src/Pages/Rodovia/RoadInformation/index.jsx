import { useContext, useEffect, useState } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useParams } from "react-router-dom";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { PencilLine } from "@phosphor-icons/react";
import { ModalUpdate } from "./ModalUpdate";
import { ModalUpdateCoordinates } from "./ModalUpdateCoordinates";

export function RoadInformation() {
  const { dataRoad } = useContext(UserContextRoad);
  let strech = null;

  if (dataRoad.stretch) {
    strech = JSON.parse(dataRoad?.stretch);
  }

  if (dataRoad) {
    return (
      <section className="">
        <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
          <div className="flex flex-col">
            <strong className="py-2 text-text-100">
              <span className="text-gray-400 tracking-wider mr-2">
                Rodovia:
              </span>
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
              {strech?.description}
            </strong>
          </div>
          <div className="py-2 flex justify-end justify-self-end">
            <Dialog>
              <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                <PencilLine size={18} />
              </DialogTrigger>
              <ModalUpdate data={dataRoad} />
            </Dialog>
          </div>
        </div>

        <h2 className="mt-5 mb-1 text-xl font-medium">Coordenadas</h2>
        <div className="flex flex justify-between items-end p-2.5 bg-white rounded-md shadow-lg mb-5">
          <div className="flex flex-col">
            <strong className="py-2 text-text-100">
              <span className="text-gray-400 tracking-wider mr-2">
                Latitude inicial:
              </span>
              {strech?.initialLatitude}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Longitude inicial:
              </span>
              {strech?.initialLongitude}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Latitude final:
              </span>
              {strech?.endLatitude}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Latitude final:
              </span>
              {strech?.endLongitude}
            </strong>
          </div>
          <div className="py-2 flex justify-end ">
            <Dialog>
              <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                <PencilLine size={18} />
              </DialogTrigger>
              <ModalUpdateCoordinates data={dataRoad} />
            </Dialog>
          </div>
        </div>
      </section>
    );
  }
}
