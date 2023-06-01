import { useCallback, useContext, useEffect, useState } from "react";
import { UserContextRoad } from "../../../../Context/useContextRoad";
import {  useParams } from "react-router-dom";
import { X } from "@phosphor-icons/react";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { api } from "../../../../lib/api";

export function ModalUpadate(props) {
  console.log("pdate video", props);
  const params = useParams();
  const [dataInfomation, setDataInfomation] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  async function handleUpdateVideo(data) {
    console.log("data", data)
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const dataObjeto = new Date(data.date);
    const response = await api.put(
      `/road/${params.id}/videos/${params.video}/update`,
      {
        url: "",
        date: dataObjeto.toISOString(),
        extension: data.extension,
        kmInitial: data.kmInitial,
        kmFinal: data.kmFinal,
        core: props.data.core,
        processed: data.processed,
        stretch: data.stretch,
        roadId: +props.data.roadId,
        companyId: 1,
        createdBy: +props.data.createdBy,
        createdAt: props.data.createdAt,
        updatedAt: new Date().toISOString(),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      console.log("teste", response)
    if (response.status === 200) {
      props.arrayUpadeInformation(response.data);
      window.alert("Município atualizado com sucesso");
    }
  }

  // formtar date
  let dataString = props.data.date;
  const dateFormat = new Date(dataString);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const dataUTC = dateFormat
    .toLocaleDateString("pt-BR", options)
    .split("/")
    .reverse()
    .join("-");
  
  return (
    <DialogPortal className="fixed inset-0 bg-black bg-opacity-50">
      <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Atualizar Video</h1>
          <DialogClose asChild>
            <button className="relative bottom-2">
              <X />
            </button>
          </DialogClose>
        </header>
        <form onSubmit={handleSubmit(handleUpdateVideo)} action="">
          <label htmlFor="stretch">
            Techo
            <input
              id="stretch"
              defaultValue={props.data.stretch}
              type="text"
              className="bg-gray-input w-full rounded-md p-2 mb-2"
              {...register("stretch", { required: true })}
            />
          </label>
          <label htmlFor="extension">
            Extensão
            <input
              type="text"
              id="extension"
              defaultValue={props.data.extension}
              className="bg-gray-input w-full rounded-md p-2 mb-2"
              {...register("extension", { required: true })}
            />
          </label>
          <label htmlFor="date">
            Data
            <input
              type="date"
              id="date"
              defaultValue={dataUTC}
              className="bg-gray-input w-full rounded-md p-2 mb-2"
              {...register("date")}
            />
          </label>
          <label htmlFor="kmInitial">
            Km ínicial
            <input
              type="text"
              id="kmInitial"
              defaultValue={props.data.kmInitial}
              className="bg-gray-input w-full rounded-md p-2 mb-2"
              {...register("kmInitial", { required: true })}
            />
          </label>
          <label htmlFor="kmFinal">
            Km final
            <input
              type="text"
              id="kmFinal"
              defaultValue={props.data.kmFinal}
              className="bg-gray-input w-full rounded-md p-2 mb-2"
              {...register("kmFinal", { required: true })}
            />
          </label>

          <label htmlFor="">
          Status
          <select
            name=""
            id=""
            className="bg-gray-input w-full rounded-md p-2"
            {...register("processed", { required: true })}
          >
            <option value="">Selecione a Malha</option>
            <option value="PENDING">Pendente</option>
            <option value="PROCESSING"> Em análise</option>
            <option value="PROCESSED"> Analisado</option>
          </select>
        </label>
          <button className="mt-6 bg-gold-400 w-full p-2 text-white rounded hover:bg-gold-300">
            Atualizar
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
