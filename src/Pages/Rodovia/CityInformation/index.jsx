import { useCallback, useContext, useEffect, useState } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useLocation, useParams } from "react-router-dom";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";

import { api } from "../../../lib/api";
import { ModalCreate } from "./ModalCreate";
import { ModalUpdate } from "./ModalUpdate";
import {
  PlusCircle,
  TrashSimple,
  Lock,
  PencilLine,
  LockOpen,
} from "@phosphor-icons/react";


export function CityInformation() {
  const params = useParams();
  const {pathname} = useLocation()
  const { dataRoad } = useContext(UserContextRoad);
  const [dataCity, setDataCity] = useState([])
  const [lock, setLock] = useState(false);


  useEffect(() =>{
    function getCity(){
      setDataCity(dataRoad.city)
    }  

    getCity();
  }, [dataRoad, pathname])

  function arrayCretae(object){
    setDataCity([...dataCity, object])  
  }

  function arrayUpdate(object){
    setDataCity(dataCity.map(item => {
      if (item.id === object.id) {
        return object;
      }
      return item;
    })) 
  }

  function handleLock() {
    if (lock === true) {
      setLock(false);
    } else {
      setLock(true);
    }
  }

  async function deleteCity(id) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const city = {};

    const result = window.confirm("Certeza que deseja deletar o município? ");

    if (result) {
      const response = await api.put(
        `/road/${params.id}/city/${id}/delete`,
        city,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

       if(response.status === 200){
        // function para deleter o imtem do array dataCity
        setDataCity(dataCity.filter(item => item.id !== response.data.id));
        window.alert("Muncípio deletado com sucesso");
       }
    }
  }

  if(dataRoad){
    return (
      <>
        {dataCity?.length !== 0 ? (
          <section className="mt-5">
            <div className="pr-5">
              <table className="w-full text-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Municípios</th>
                    <th className="p-2">Extensão</th>
                    <th></th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog>
                          <DialogTrigger className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
                            <PlusCircle size={18} />
                            <p className="">Inserir</p>
                          </DialogTrigger>
                          <ModalCreate arrayCretae={arrayCretae}/>
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
                  {dataCity?.map((city) => {
                    return (
                      <tr
                        key={city.id}
                        className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                      >
                        <td className="p-2  ">{city.name}</td>
                        <td className="p-2  ">{city.extention} km</td>
                        <td></td>
                        <td className="p-2 flex justify-end gap-3">
                          <div className="flex justify gap-3">
                            {lock ? (
                              <>
                                <Dialog>
                                  <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                                    <PencilLine size={18} />
                                  </DialogTrigger>
                                  <ModalUpdate data={city} arrayUpdate={arrayUpdate}/>
                                </Dialog>
  
                                <button
                                  className="flex  text-sm justify-center items-center gap-1 p-1 text-sm text-red-500 border rounded border-red-500 hover:bg-red-500 hover:text-white"
                                  onClick={() => {
                                    deleteCity(city.id);
                                  }}
                                >
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
                    <th className="p-2 rounded-ss-md"></th>
                    <th className="p-2"></th>
                    <th></th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog>
                          <DialogTrigger className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
                            <PlusCircle size={18} />
                            <p className="">Inserir</p>
                          </DialogTrigger>
                          <ModalCreate arrayCretae={arrayCretae}/>
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
                  <tr
                   
                    onClick={() => {
                      navigate(`/rodovias/information/${"PA-999"}`);
                    }}
                    className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                  >
                    <td colSpan={5} className="p-4">
                      Não possui municípios cadastrados
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
