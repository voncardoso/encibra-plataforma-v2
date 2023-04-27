import { useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import { api } from "../../../../lib/api";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";

export function ModalUpdateCoordinates(props) {
  console.log(props)
  const params = useParams();
  let strech = null;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  if (props.data.stretch) {
    strech = JSON.parse(props.data.stretch);
  }

  async function handleUpdateInformationCoordinates(dataUpdate) {
    const token = window.localStorage.getItem("encibraapptoken-v2");

    // objeto para atualizar a descrption
    const strechUpdate = {
      description: strech.description,
      endLatitude: dataUpdate.endLatitude,
      endLongitude: dataUpdate.endLongitude,
      initialLatitude: dataUpdate.initialLatitude,
      initialLongitude: dataUpdate.initialLongitude,
    };

    const response = await api.put(
      `/road/${params.id}`,
      {
        stretch: `${JSON.stringify(strechUpdate)}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      props.arrayUpdate(response.data)
      window.alert("Informações atualizados com sucesso");
     // window.location.reload();
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
        <form
          onSubmit={handleSubmit(handleUpdateInformationCoordinates)}
          action=""
        >
          <label className="" htmlFor="initialLatitude">
            Latitude inicial
            <input
              id="initialLatitude"
              type="text"
              defaultValue={strech?.initialLatitude}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("initialLatitude", { required: true })}
            />
          </label>

          <label htmlFor="initialLongitude">
            Longitude inicial
            <input
              type="text"
              id="initialLongitude"
              defaultValue={strech?.initialLongitude}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("initialLongitude", { required: true })}
            />
          </label>

          <label className="" htmlFor="endLatitude">
            Latitude final
            <input
              id="endLatitude"
              type="text"
              defaultValue={strech?.endLatitude}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("endLatitude", { required: true })}
            />
          </label>

          <label className="" htmlFor="endLongitude">
            Longitude final
            <input
              id="endLongitude"
              type="text"
              defaultValue={strech?.endLongitude}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("endLongitude", { required: true })}
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
