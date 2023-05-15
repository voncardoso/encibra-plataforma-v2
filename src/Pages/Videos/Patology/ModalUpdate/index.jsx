import { Controller, useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import {
  DialogOverlay,
  DialogContent,
  DialogPortal,
  DialogClose,
} from "@radix-ui/react-dialog";
import { useParams } from "react-router-dom";
import { api } from "../../../../lib/api";
import { useState } from "react";

export function ModalUpdate(props) {
  const [preview, setPreview] = useState(null);
  const params = useParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
  });

  const timeValidation = (value) => {
    const pattern =
      /^((?:[0-5][0-9]|1[0-9]|2[0-3]):[0-5][0-9])(?::[0-5][0-9])?$/;
    if (!pattern.test(value)) {
      return "Tempo invalido.";
    }
    return true;
  };

  function handleImage(event) {
    setPreview(URL.createObjectURL(event.target.files[0]));
  }

  async function handleUpdate(data) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.put(
      `/road/${params.id}/patology/${props.id}/update`,
      {
        cracks: JSON.stringify({
          FI: data.FI,
          TTC: data.TTC,
          TTL: data.TTL,
          TLC: data.TLC,
          TLL: data.TLL,
          TRR: data.TRR,
          J: data.J,
          TB: data.TB,
          JE: data.JE,
          TBE: data.TBE,
        }),
        descrption: data.descrption,
        km: data.km,
        roadSide: JSON.stringify({
          BD: data.BD,
          BE: data.BE,
          EIXO: data.EIXO,
          PISTA: data.PISTA,
        }),
        sags: JSON.stringify({
          ALP: data.ALP,
          ATP: data.ATP,
          ALC: data.ALC,
          ATC: data.ATC,
        }),
        otherDefects: JSON.stringify({
          O: data.O,
          P: data.P,
          E: data.E,
          EX: data.EX,
          D: data.D,
          R: data.R,
        }),
        latitude: data.latitude,
        longitude: data.longitude,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      window.alert("Patologia atualizada com sucesso");
    }
  }

  return (
    <DialogPortal>
      <DialogOverlay className=" z-20 fixed inset-0 bg-black bg-opacity-50 z-20">
        <DialogContent className="overflow-y-auto h-5/6 fixed w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
          <header className="pt-5 px-5 flex justify-between">
            <h1 className="text-xl text font-bold">Atualizar Patologia</h1>
            <DialogClose asChild>
              <button className="relative bottom-2">
                <X />
              </button>
            </DialogClose>
          </header>
          <form
            action=""
            className=" bg-white w-full p-5 overflow-y"
            onSubmit={handleSubmit(handleUpdate)}
          >
            <h2 className="border-b-2 border-gray-300 w-full col-span-3  mb-3 text-lg font-bold text-text-100">
              Localização
            </h2>
            <div className="col-span-3 grid grid-cols-3  gap-5">
              <label htmlFor="km">
                Km
                <input
                  id="km"
                  type="text"
                  defaultValue={props.data.km}
                  className="bg-gray-input w-full rounded-md p-2"
                  {...register("km")}
                />
              </label>
              <label htmlFor="latitude">
                Latitude
                <input
                  id="latitude"
                  type="text"
                  defaultValue={props.data.latitude}
                  className="bg-gray-input w-full rounded-md p-2"
                  {...register("latitude")}
                />
              </label>
              <label htmlFor="longitude">
                Longitude
                <input
                  id="longitude"
                  type="text"
                  defaultValue={props.data.longitude}
                  className="bg-gray-input w-full rounded-md p-2"
                  {...register("longitude", { required: true })}
                />
              </label>
            </div>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Lado
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="BD"
                  checked={props.roadSide.BD}
                  {...register("BD")}
                />
                <label htmlFor="BD">BD</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="BE"
                  checked={props.roadSide.BE}
                  {...register("BE")}
                />
                <label htmlFor="BE">BE</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="EIXO"
                  checked={props.roadSide.EIXO}
                  {...register("EIXO")}
                />
                <label htmlFor="EIXO">EIXO</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="PISTA"
                  checked={props.roadSide.PISTA}
                  {...register("PISTA")}
                />
                <label htmlFor="PISTA">PISTA</label>
              </li>
            </ul>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Trincas
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="FI"
                  checked={props.cracks.FI}
                  {...register("FI")}
                />
                <label htmlFor="FI">FI</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TTC"
                  checked={props.cracks.TTC}
                  {...register("TTC")}
                />
                <label htmlFor="TTC">TTC</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TTL"
                  checked={props.cracks.TTL}
                  {...register("TTL")}
                />
                <label htmlFor="TTL">TTL</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TLC"
                  checked={props.cracks.TLC}
                  {...register("TLC")}
                />
                <label htmlFor="TLC">TLC</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TLL"
                  checked={props.cracks.TLL}
                  {...register("TLL")}
                />
                <label htmlFor="TLL">TLL</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TRR"
                  checked={props.cracks.TRR}
                  {...register("TRR")}
                />
                <label htmlFor="TRR">TRR</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="J"
                  checked={props.cracks.J}
                  {...register("J")}
                />
                <label htmlFor="J">J</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TB"
                  checked={props.cracks.TB}
                  {...register("TB")}
                />
                <label htmlFor="TB">TB</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="JE"
                  checked={props.cracks.JE}
                  {...register("JE")}
                />
                <label htmlFor="JE">JE</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TBE"
                  checked={props.cracks.TBE}
                  {...register("TBE")}
                />
                <label htmlFor="TBE">TBE</label>
              </li>
            </ul>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Afundamentos
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ALP"
                  checked={props.sags.ALP}
                  {...register("ALP")}
                />
                <label htmlFor="ALP">ALP</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ATP"
                  checked={props.sags.ATP}
                  {...register("ATP")}
                />
                <label htmlFor="ATP">ATP</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ALC"
                  checked={props.sags.ALC}
                  {...register("ALC")}
                />
                <label htmlFor="ALC">ALC</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ATC"
                  checked={props.sags.ATC}
                  {...register("ATC")}
                />
                <label htmlFor="ATC">ATC</label>
              </li>
            </ul>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Outros Defeitos
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="O"
                  checked={props.otherDefects.O}
                  {...register("O")}
                />
                <label htmlFor="O">O</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="P"
                  checked={props.otherDefects.P}
                  {...register("P")}
                />
                <label htmlFor="P">P</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="E"
                  checked={props.otherDefects.E}
                  {...register("E")}
                />
                <label htmlFor="E">E</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="EX"
                  checked={props.otherDefects.EX}
                  {...register("EX")}
                />
                <label htmlFor="EX">EX</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="D"
                  checked={props.otherDefects.D}
                  {...register("D")}
                />
                <label htmlFor="D">D</label>
              </li>
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="R"
                  checked={props.otherDefects.R}
                  {...register("R")}
                />
                <label htmlFor="R">R</label>
              </li>
            </ul>
            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Observação
            </h2>
            <div className="col-span-3 grid grid-cols-3 mt-5 gap-5">
              <label htmlFor="observation">
                <select
                  name=""
                  id="observation"
                  className="bg-gray-input w-full rounded-md p-2"
                  defaultValue={props.data.observation}
                  {...register("observation")}
                >
                  <option value="">Selecione a observação</option>
                  <option value="I Trecho">Inicio Trecho</option>
                  <option value="F Trecho">Fim Trecho</option>
                  <option value="Vila">Vila</option>
                  <option value="Ponte">Ponte</option>
                  <option value="Rotatória">Rotatória</option>
                  <option value="Cruzamento">Cruzamento</option>
                  <option value="Entroncamento">Entroncamento</option>
                </select>
              </label>
            </div>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Descricao
            </h2>
            <div className="col-span-3 grid grid-cols-3 mt-5 gap-5">
              <textarea
                className="h-32 bg-gray-input w-full rounded-md p-2 col-span-3 resize-none"
                name=""
                id=""
                cols="30"
                rows="10"
                on
                defaultValue={props.data.descrption}
                {...register("descrption", { required: true })}
              ></textarea>
            </div>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Vídeo
            </h2>
            <div className="col-span-3 grid grid-cols-3  gap-5">
              <Controller
                name="videoTime"
                control={control}
                defaultValue={props.data.videoTime}
                rules={{ validate: timeValidation }}
                render={({ field }) => (
                  <div>
                    <label htmlFor="videoTime">
                      Tempo
                      <input
                        id="videoTime"
                        type="text"
                        className="bg-gray-input w-full rounded-md p-2"
                        defaultValue={props.data.videoTime}
                        {...field}
                      />
                      <p className="text-sm mt-1">Ex: 00:00:00 ou 00:00</p>
                    </label>
                    {errors.videoTime && (
                      <span className="error text-sm mt-1 text-red-500">
                        {errors.videoTime.message}
                      </span>
                    )}
                  </div>
                )}
              />

              <img
                style={{ maxWidth: "500px", maxHeight: "300px" }}
                className="w-500 h-300 col-span-2 rounded-md"
                src={preview ? preview : props.data.screenshotUrl}
                defaultValue={props.data.screenshotUrl}
                alt=""
              />
            </div>

            <div className="mt-10">
              <button className="bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
                Atualizar
              </button>
            </div>
          </form>
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  );
}
