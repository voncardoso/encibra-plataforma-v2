import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api } from "../../../../lib/api";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

export function ModalUpdate(props) {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      type: props.data.type,
      latitude: props.data.latitude,
      longitude: props.data.longitude,
      description: props.data.description,
      kilometer: props.data.kilometer,
      id: props.data.id,
    },
  });

  async function handleUpdatePoints(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/points/${data.id}/update`,
      {
        type: data.type,
        latitude: data.latitude,
        longitude: data.longitude,
        description: data.description,
        kilometer: data.kilometer,
        roadId: +params.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      props.arrayUpdate(response.data)
      window.alert("Ponto atualizado com sucesso");
    }
   // window.location.reload();
 
  }
  return (
    <DialogPortal>
      <DialogOverlay className=" z-20 fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed w-96 z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Atualizar Pontos</h1>
          <DialogClose asChild >
            <button className="relative bottom-2">
              <X />
            </button>
          </DialogClose>
        </header>
        <form onSubmit={handleSubmit(handleUpdatePoints)} action="">
          <label htmlFor="type">
            Tipo
            <select
              id="type"
              {...register(`type`)}
              className="bg-gray-input w-full rounded-md p-2 mb-4"
            >
              <option value="">Selecione o tipo</option>
              <option value="Ponte">Ponte</option>
              <option value="Vila">Vila</option>
              <option value="Divisa entre municípios">Divisa entre municípios</option>
              <option value="Sede do município">Sede do município</option>
              <option value="Travessia de balsa">Travessia de balsa</option>
            </select>
          </label>
          <label className="" htmlFor="description">
            Descrição:
            <input
              id="description"
              type="text"
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("description", { required: true })}
            />
          </label>
          <label htmlFor="extention">
            Km:
            <input
              id="extention"
              type="text"
              className="bg-gray-input w-full rounded-md p-2 mb-4"
              {...register("kilometer", { required: true })}
            />
          </label>

          <label htmlFor="latitude">
            Latitude:
            <input
              id="latitude"
              type="text"
              className="bg-gray-input w-full rounded-md p-2 mb-4"
              {...register("latitude", { required: true })}
            />
          </label>

          <label htmlFor="longitude">
            Longitude:
            <input
              id="longitude"
              type="text"
              className="bg-gray-input w-full rounded-md p-2 mb-4"
              {...register("longitude", { required: true })}
            />
          </label>

          <button className="mt-6 bg-gold-400 w-full p-2 text-white rounded hover:bg-gold-300">
            Atualizar
          </button>  
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
