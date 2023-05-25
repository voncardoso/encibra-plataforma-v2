import { useForm } from "react-hook-form";
import { api } from "../../../lib/api";
import { useContext } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useParams } from "react-router-dom";
import { UserContextLogin } from "../../../Context/useContextLogin";

export function RegisterVideo() {
  const params = useParams();
  const { dataRoad } = useContext(UserContextRoad);
  const {} = useContext(UserContextLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {},
  });

  async function handleCreateVideo(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const userId = window.localStorage.getItem("encibraappId-v2");
    const dataObjeto = new Date(data.date);
    console.log(dataObjeto.toISOString());
    const video = {
      url: "",
      date: dataObjeto.toISOString(),
      extension: data.extension,
      kmInitial: data.kmInitial,
      kmFinal: data.kmFinal,
      core: dataRoad.regional,
      processed: "PENDING",
      stretch: data.stretch,
      roadId: +params.id,
      companyId: 1,
      createdBy: +userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const response = await api.put(
      `/road/${params.id}/videos/null/create`,
      video,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      window.alert("Vídeo cadastrado com sucesso");
      reset();
    } else {
      window.alert("Error ao cadastrar o vídeo");
    }
  }
  return (
    <section className="  mt-5  flex overflow-auto w-full   border-b-8 border-background rounded-md">
      <form
        onSubmit={handleSubmit(handleCreateVideo)}
        className=" bg-white w-full h-auto p-5 grid grid-cols-3 gap-5"
        action=""
      >
        <h1 className="col-span-3 text-2xl font-bold text-text-100">
          Cadastro de Rodovias
        </h1>
        <label htmlFor="stretch">
          Techo
          <input
            id="stretch"
            type="text"
            className="bg-gray-input w-full rounded-md p-2"
            {...register("stretch", { required: true })}
          />
        </label>
        <label htmlFor="extension">
          Extensão
          <input
            type="text"
            id="extension"
            className="bg-gray-input w-full rounded-md p-2"
            {...register("extension", { required: true })}
          />
        </label>
        <label htmlFor="date">
          Data
          <input
            type="date"
            id="date"
            className="bg-gray-input w-full rounded-md p-2"
            {...register("date", { required: true })}
          />
        </label>
        <label htmlFor="kmInitial">
          Km ínicial
          <input
            type="text"
            id="kmInitial"
            className="bg-gray-input w-full rounded-md p-2"
            {...register("kmInitial", { required: true })}
          />
        </label>
        <label htmlFor="kmFinal">
          Km final
          <input
            type="text"
            id="kmFinal"
            className="bg-gray-input w-full rounded-md p-2"
            {...register("kmFinal", { required: true })}
          />
        </label>
        <div className="col-end-2">
          <button className=" mt-5 mb-5 bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}
