import { useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import { Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal } from "@radix-ui/react-dialog";
import { api } from "../../../../lib/api";
import { useParams } from "react-router-dom";

export default function ModalUpdateInfomationMain({data, arrayUpdate}){
    const params = useParams()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({
        defaultValues: {
            
          },
      });
      
      async function handleUpdate(data){
        const token = window.localStorage.getItem("encibraapptoken-v2");
        const response = await api.put(`/reports/${params.reports}`,
        {
            description: data.description,
            finalKm: data.finalKm,
            initialKm: data.initialKm
        },{
            headers: {
              Authorization: `Bearer ${token}`,
            },
        })
        

        if(response.status === 200){
            window.alert("Atualizado com sucesso")
        }

       // setDataReport(response.data)
       // setDataPatologySubTrecho(response.data.patology)
      }
    return(
        <DialogPortal>
            <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
            <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
                <header className="flex mb-5 justify-between">
                    <h1 className="text-xl text font-bold">Atualizar Informações</h1>
                    <DialogClose asChild>
                        <button className="relative bottom-2">
                            <X />
                        </button>
                    </DialogClose>
                </header>
                <form onSubmit={handleSubmit(handleUpdate)} action="">
                <label className="" htmlFor="description">
                    Trecho:
                    <input
                    id="description"
                    type="text"
                    defaultValue={data?.description}
                    className="mb-4 bg-gray-input w-full rounded-md p-2"
                    {...register("description")}
                    />
                </label>
                <label className="" htmlFor="initialKm">
                    Km ínicial:
                    <input
                    id="initialKm"
                    type="text"
                    defaultValue={data?.initialKm}
                    className="mb-4 bg-gray-input w-full rounded-md p-2"
                    {...register("initialKm")}
                    />
                </label>
                <label className="" htmlFor="finalKm">
                    Km final:
                    <input
                    id="finalKm"
                    type="text"
                    defaultValue={data?.finalKm}
                    className="mb-4 bg-gray-input w-full rounded-md p-2"
                    {...register("finalKm")}
                    />
                </label>
                <button className="mt-6 bg-gold-400 w-full p-2 text-white rounded hover:bg-gold-300">
                    Atualizar
                </button>
            </form>
            </DialogContent>
        </DialogPortal>
    )
}