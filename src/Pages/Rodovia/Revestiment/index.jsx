import { useContext, useEffect, useState } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/api";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  PlusCircle,
  TrashSimple,
  Lock,
  PencilLine,
  LockOpen,
} from "@phosphor-icons/react";
import { ModalCreate } from "./ModalCreate";

export function Revestment() {
  const { dataRoad } = useContext(UserContextRoad);
  const params = useParams();
  const [lock, setLock] = useState(false);

  function handleLock() {
    if (lock === true) {
      setLock(false);
    } else {
      setLock(true);
    }
  }

  const revestments = dataRoad.revetment;
  console.log(revestments);

  if (revestments) {
    return (
      <>
        {revestments.length !== 0 ? (
          <section className="mt-5">
            <div className="pr-5">
              <table className="w-full text-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Tipo</th>
                    <th className="p-2">Extensão</th>
                    <th></th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog>
                          <DialogTrigger className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
                            <PlusCircle size={18} />
                            <p className="">Inserir</p>
                          </DialogTrigger>
                          <ModalCreate />
                        </Dialog>
                      ) : (
                        ""
                      )}
                      <button
                        className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                        onClick={handleLock}
                      >
                        {lock ? <LockOpen size={18} /> : <Lock size={18} />}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {revestments.map((revestment) => {
                    return (
                      <tr
                        onClick={() => {
                          navigate(`/rodovias/information/${"PA-999"}`);
                        }}
                        className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                      >
                        <td className="p-2  ">{revestment.type}</td>
                        <td className="p-2  ">{revestment.extention} km</td>
                        <td></td>
                        <td className="p-2 flex justify-end gap-3">
                          <div className="flex justify gap-3">
                            {lock ? (
                              <>
                                <button className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                                  <PencilLine size={18} />
                                </button>
                                <button className="flex  text-sm justify-center items-center gap-1 p-1 text-sm text-red-500 border rounded border-red-500 hover:bg-red-500 hover:text-white">
                                  <TrashSimple size={18} />
                                </button>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
                    <td
                      colSpan={7}
                      className="p-2 rounded-ee-md rounded-es-md"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <section className="mt-5">
            <div className="pr-5">
              <table className="w-full text-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Tipo</th>
                    <th className="p-2">Extensão</th>
                    <th></th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog>
                          <DialogTrigger className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
                            <PlusCircle size={18} />
                            <p className="">Inserir</p>
                          </DialogTrigger>
                          <ModalCreate />
                        </Dialog>
                      ) : (
                        ""
                      )}
                      <button
                        className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                        onClick={handleLock}
                      >
                        {lock ? <LockOpen size={18} /> : <Lock size={18} />}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                    <td colSpan={4} className="p-2  ">
                      Não possui pavimento cadastrado
                    </td>
                  </tr>
                  <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
                    <td
                      colSpan={7}
                      className="p-2 rounded-ee-md rounded-es-md"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </>
    );
  }
}
