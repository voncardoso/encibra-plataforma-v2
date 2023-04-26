import { useFieldArray, useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import { api } from "../../../../lib/api";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";

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
      extention: data.data.extention,
      id: +data.data.id,
    },
  });

  async function handleUpadteRevestiment(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/revetment/${data.id}/update`,
      {
        type: data.type,
        extention: data.extention,
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
      window.alert("Revestimento atualizado com sucesso");
    }
    window.location.reload();
  }

  return (
    <DialogPortal>
      <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Atualizar Revestimento</h1>
          <DialogClose asChild>
            <button className="relative bottom-2">
              <X />
            </button>
          </DialogClose>
        </header>
        <form onSubmit={handleSubmit(handleUpadteRevestiment)} action="">
          <label htmlFor="">
            Tipo
            <select
              name={"type"}
              {...register(`type`, { required: true })}
              className="bg-gray-input w-full rounded-md p-2 mb-4"
            >
              <option value="">Selecione o revestimento</option>
              <option value="PAVIMENTADO">Pavimentado</option>
              <option value="NÃO PAVIMENTADO">Não Pavimentado</option>
            </select>
          </label>
          <label htmlFor="extention">
            Extensão:
            <input
              id="extention"
              type="text"
              className="bg-gray-input w-full rounded-md p-2"
              {...register("extention", { required: true })}
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
