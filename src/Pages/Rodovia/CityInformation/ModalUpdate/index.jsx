import { useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { api } from "../../../../lib/api";

export function ModalUpdate(props) {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      extention: props.data.extention,
      name: props.data.name,
      sequence: "0",
      id: props.data.id,
    },
  });

  async function handleRoadsCity(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/city/${data.id}/update`,
      {
        id: +data.id,
        extention: data.extention,
        name: data.name,
        sequence: data.sequence,
        roadId: +params.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      props.arrayUpdate(response.data);
      window.alert("Município atualizado com sucesso");
    }
  }

  return (
    <DialogPortal>
      <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Atualizar Município</h1>
          <DialogClose asChild>
            <button className="relative bottom-2">
              <X />
            </button>
          </DialogClose>
        </header>
        <form onSubmit={handleSubmit(handleRoadsCity)} action="">
          <label className="" htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("name")}
            />
          </label>

          <label htmlFor="extention">
            Extensão:
            <input
              id="extention"
              type="text"
              className="bg-gray-input w-full rounded-md p-2"
              {...register("extention")}
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
