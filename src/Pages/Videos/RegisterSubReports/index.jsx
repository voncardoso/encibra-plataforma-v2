import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/api";
import { UserContextLogin } from "../../../Context/useContextLogin";

export function RegisterSubReports(){
    const { dataRoad } = useContext(UserContextRoad);
    const {dataUser} = useContext(UserContextLogin)
    const params = useParams()
    console.log(params)
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
      } = useForm({
        defaultValues: {},
      });

      const dataIgg = dataRoad.iggs?.filter((igg) => igg.roadId === Number(params.id))
      console.log("rodovia", dataRoad)
      console.log("user", dataUser)
      async function handleCreateReports(data){
        const userId = window.localStorage.getItem("encibraappId-v2");
        const token = window.localStorage.getItem("encibraapptoken-v2");
        console.log("data", data)
        const reports = {
            level: "SUB",
            videos: {
                connect: {
                    id: Number(dataIgg[0].videoId),
                }
            },
            iggs: {
                connect: {
                    id: Number(dataIgg[0].id)
                }
            },
            users: {
                connect: {
                   id: dataUser.id
                }
            },
            initialKm: data.initialKm,
            finalKm: data.finalKm,
            section: "",
            description: data.description,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
        console.log( "teste",reports)

        const response = await api.post(
            `/reports`,
            reports,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log(response)
      }
    return(
        <section className="  mt-5  flex overflow-auto w-full border-b-8 border-background rounded-md">
            <form
            onSubmit={handleSubmit(handleCreateReports)}
             className=" bg-white w-full h-auto p-5 grid grid-cols-3 gap-5"
             action=""
            >
            <h1 className="col-span-3 text-2xl font-bold text-text-100">
                Cadastro de Sub-trecho
            </h1>
            <label htmlFor="stretch">
                Km ínicial
                <input
                    id="stretch"
                    type="text"
                    className="bg-gray-input w-full rounded-md p-2"
                    {...register("initialKm", { required: true })}
                />
            </label>
            <label htmlFor="stretch">
                Km Final
                <input
                    id="stretch"
                    type="text"
                    className="bg-gray-input w-full rounded-md p-2"
                    {...register("finalKm", { required: true })}
                />
            </label>
            <label htmlFor="stretch">
                Trecho
                <input
                    id="stretch"
                    type="text"
                    className="bg-gray-input w-full rounded-md p-2"
                    {...register("description", { required: true })}
                />
            </label>
            <div className="col-end-2">
                <button className=" mt-5 mb-5 bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
                    Cadastrar
                </button>
             </div>
            </form>
        </section>
    )
}