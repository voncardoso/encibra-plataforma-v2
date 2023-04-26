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

export function ModalUpdate(data) {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      type: data.data.type,
      latitude: data.data.latitude,
      longitude: data.data.longitude,
      description: data.data.description,
      kilometer: data.data.kilometer,
      id: data.data.id,
    },
  });
  async function handleUpdatePoints(data) {
    console.log("teste", data);
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/points/${data.id}/update`,
      {
        type: data.type,
        latitude: data.latitude,
        longitude: data.longitude,
        description: data.description,
        kilometer: data.extention,
        roadId: +params.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);

    if (response.status === 200) {
      window.alert("Ponto atualizado com sucesso");
    }
    window.location.reload();
  }
  return (
    <DialogPortal>
      <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Adicionar Município</h1>
          <DialogClose asChild>
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
              <option value="1">Ponte</option>
              <option value="2">Vila</option>
              <option value="3">Divisa entre municípios</option>
              <option value="4">Sede do município</option>
              <option value="5">Travessia de balsa</option>
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
            Extensão:
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
            Adicionar
          </button>
        </form>
      </DialogContent>
    </DialogPortal>
  );
}
