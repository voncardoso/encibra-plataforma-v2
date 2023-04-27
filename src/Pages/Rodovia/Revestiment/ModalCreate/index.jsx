import { useFieldArray, useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { api } from "../../../../lib/api";

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

  async function handleCreateRevestiment(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/revetment/null/create`,
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
    if (response.status === 200) {
      arrayCretae(response.data)
      window.alert("Ponto cadastrado com sucesso");
      reset()
    }
  }
  
  return (
    <DialogPortal>
      <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
        <header className="flex mb-5 justify-between">
          <h1 className="text-xl text font-bold">Adicionar Revestimento</h1>
          <DialogClose asChild>
            <button className="relative bottom-2">
              <X />
            </button>
          </DialogClose>
        </header>
        <form onSubmit={handleSubmit(handleCreateRevestiment)} action="">
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
