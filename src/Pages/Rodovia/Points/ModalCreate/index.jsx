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

export function ModalCreate({arrayCretae}) {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  async function handleCreatePoints(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/points/null/create`,
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

    if (response.status === 200) {
      arrayCretae(response.data)
      reset()
      window.alert("Ponto cadastrado com sucesso");
    }
  }

  return (
    <DialogPortal>
      <DialogOverlay className=" z-20 fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed z-30 w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Adicionar Município</h1>
          <DialogClose asChild>
            <button className="relative bottom-2">
              <X />
            </button>
          </DialogClose>
        </header>
        <form onSubmit={handleSubmit(handleCreatePoints)} action="">
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
              {...register("extention", { required: true })}
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
