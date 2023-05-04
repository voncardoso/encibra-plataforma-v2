import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { ModalCreate } from "./ModalCreate";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  PlusCircle,
  TrashSimple,
  Lock,
  PencilLine,
  LockOpen,
} from "@phosphor-icons/react";
import { ModalUpdate } from "./ModalUpdate";
import { api } from "../../../lib/api";
import Pagination from '@mui/material/Pagination';

export function Points() {
  const { dataRoad } = useContext(UserContextRoad);
  const params = useParams();
  const [lock, setLock] = useState(false);
  const [dataPoints, setDataPoints] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() =>{
    function getCity(){
      setDataPoints(dataRoad.points)
    }  
    getCity();
  }, [dataRoad])

  function handleLock() {
    if (lock === true) {
      setLock(false);
    } else {
      setLock(true);
    }
  }

  function arrayCretae(object){
    setDataPoints([...dataPoints, object])  
  }

  function arrayUpdate(object){
    setDataPoints(dataPoints.map(item => {
      if (item.id === object.id) {
        return object;
      }
      return item;
    })) 
  }

  async function deletePoint(id) {
    console.log();
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const points = {};

    const result = window.confirm("Certeza que deseja deletar o ponto? ");

    if (result) {
      const response = await api.put(
        `/road/${params.id}/points/${id}/delete`,
        points,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if(response.status === 200){
        setDataPoints(dataPoints.filter(item => item.id !== response.data.id))
        window.alert("Ponto deletado com sucesso");
      }
    }
  }

  // criar paginação
  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  const paginatedData = paginate(dataPoints, currentPage, itemsPerPage);
  const totalPages = Math.ceil(dataPoints.length / itemsPerPage);
  
  function goToPage(event, pageNumber) {
    console.log("",pageNumber)
    setCurrentPage(pageNumber);
  }

  
  if (dataPoints) {
    return (
      <>
        {dataPoints.length !== 0 ? (
          <section className="mt-5">
            <div className="pr-5 flex flex-col">
              <table className="w-full text-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Tipo</th>
                    <th className="p-2">Descrição</th>
                    <th className="p-2">Km</th>
                    <th className="p-2">Latitude</th>
                    <th className="p-2">Longitude</th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog >
                          <DialogTrigger  className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
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
                  {paginatedData.map((point) => {
                    return (
                      <tr key={point.id} className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                        <td className="p-2">{point.type}</td>
                        <td className="p-2">{point.description}</td>
                        <td className="p-2">{point.kilometer}</td>
                        <td className="p-2">{point.latitude}</td>
                        <td className="p-2">{point.longitude}</td>

                        <td className="p-2 flex justify-end gap-3">
                          <div className="flex justify gap-3">
                            {lock ? (
                              <>

                             <Dialog >
                                <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                                  <PencilLine size={18} />
                                </DialogTrigger>
                                  <ModalUpdate data={point} arrayUpdate={arrayUpdate}/>
                                </Dialog>   
                                <button
                                  className="flex  text-sm justify-center items-center gap-1 p-1 text-sm text-red-500 border rounded border-red-500 hover:bg-red-500 hover:text-white"
                                  onClick={() => {
                                    deletePoint(point.id);
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
              <div className="mx-auto flex items-center">
                <Pagination className="mt-2.5" count={totalPages} onChange={goToPage}  shape="rounded" />
            </div>
            </div>
          </section>
        ) : (
          <section className="mt-5">
            <div className="pr-5">
              <table className="w-full text-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Tipo</th>
                    <th className="p-2">Descrição</th>
                    <th className="p-2">Km</th>
                    <th className="p-2">Latitude</th>
                    <th className="p-2">Longitude</th>
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
                    <td colSpan={6} className="p-4">
                      Não possui pontos cadastrados
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
