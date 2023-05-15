import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { api } from "../../../lib/api";

export function RegisterIgg() {
  const { dataRoad } = useContext(UserContextRoad);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {},
  });

  console.log(dataRoad);

  async function HandleRegister(data) {
    const video = dataRoad.videos?.filter(
      (item) => item.id === Number(data.id)
    );
    const token = window.localStorage.getItem("encibraapptoken-v2");
    console.log(video[0].id);
    if (video) {
      try {
        const response = await api.put(
          `/road/${dataRoad.id}/iggs/null/create`,
          {
            date: new Date(video[0].date),
            level: "MAIN",
            regional: dataRoad.regional,
            videoId: video[0].id,
            roadId: video[0].roadId,
            description: video[0].stretch,
            section: "",
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          window.alert("Igg cadastrado com sucesso");
        }
      } catch (error) {
        window.alert("Error ao cadastrae o igg");
      }
    }
  }
  if (dataRoad) {
    return (
      <section className="mt-5  flex overflow-auto w-full   border-b-8 border-background rounded-md">
        <form
          onSubmit={handleSubmit(HandleRegister)}
          className=" bg-white w-full h-auto p-5 grid grid-cols-3 gap-5"
          action=""
        >
          <h1 className="col-span-3 text-2xl font-bold text-text-100">
            Cadastro de Igg
          </h1>

          <label htmlFor="">
            Vídeo
            <select
              name=""
              id=""
              className="bg-gray-input w-full rounded-md p-2 mt-1"
              {...register("id", { required: true })}
            >
              <option value="">Escolha o vídeo</option>
              {dataRoad.videos?.map((item) => {
                let dataString = item.date;
                const data = new Date(dataString);
                const dataUTC = data.toLocaleDateString("pt-BR", {
                  timeZone: "UTC",
                });
                return (
                  <option key={item.id} className="px-4 py-2" value={item.id}>
                    <p> {item.stretch}</p> <p>{dataUTC}</p>
                  </option>
                );
              })}
            </select>
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
}
