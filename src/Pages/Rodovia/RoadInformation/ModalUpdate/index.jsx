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

export function ModalUpdate(props) {
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

  async function handleUpdateInformation(dataUpdate) {
    const token = window.localStorage.getItem("encibraapptoken-v2");

    // objeto para atualizar a descrption
    const strechUpdate = {
      description: dataUpdate.strechDescription,
      endLatitude: strech.endLatitude,
      endLongitude: strech.endLongitude,
      initialLatitude: strech.initialLatitude,
      initialLongitude: strech.initialLongitude,
    };

    const response = await api.put(
      `/road/${params.id}`,
      {
        acronym: dataUpdate.acronym,
        mesh: dataUpdate.mesh,
        extention: dataUpdate.extention,
        regional: dataUpdate.regional,
        uf: dataUpdate.uf,
        stretch: `${JSON.stringify(strechUpdate)}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      props.arrayUpdateInformation(response.data)
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
        <form onSubmit={handleSubmit(handleUpdateInformation)} action="">
          <label className="" htmlFor="acronym">
            Rodovia:
            <input
              id="acronym"
              type="text"
              defaultValue={props.data.acronym}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("acronym", { required: true })}
            />
          </label>

          <label htmlFor="mesh">
            Malha
            <select
              id="mesh"
              defaultValue={props.data.mesh}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("mesh", { required: true })}
            >
              <option value="">Selecione a Malha</option>
              <option value="ESTADUAL">Estadual</option>
              <option value="FEDERAL"> Federal</option>
            </select>
          </label>

          <label htmlFor="extention">
            Extensão em km
            <input
              type="text"
              id="extention"
              defaultValue={props.data.extention}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("extention", { required: true })}
            />
          </label>

          <label htmlFor="regional">
            Núcleo Regional
            <select
              id="regional"
              defaultValue={props.data.regional}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("regional", { required: true })}
            >
              <option value="">Núcleo Regional</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
            </select>
          </label>

          <label htmlFor="uf">
            UF
            <select
              id="uf"
              defaultValue={props.data.uf}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("uf", { required: true })}
            >
              <option value="">Estado</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </label>

          <label className="" htmlFor="acronym">
            Descrição:
            <input
              id="acronym"
              type="text"
              defaultValue={strech?.description}
              className="mb-4 bg-gray-input w-full rounded-md p-2"
              {...register("strechDescription", { required: true })}
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
