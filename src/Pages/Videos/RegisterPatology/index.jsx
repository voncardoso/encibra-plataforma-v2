import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/api";

export function RegisterPatology() {
  const { dataRoad } = useContext(UserContextRoad);
  const { id, video } = useParams();
  const [fileImage, setFileImage] = useState("");
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState(new FormData());
  const [descrptionTeste, setDescriptionTeste] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setField,
    watch,
    setValue,
  } = useForm({
    defaultValues: {},
  });

  async function handleRegisterPatology(data) {

    const token = window.localStorage.getItem("encibraapptoken-v2");
    const formData = new FormData();
    formData.append("file", data.file);

    // se imagem não exister
    if (data.file === undefined) {
      const response1 = await api.put(
        `/road/${dataRoad.id}/patology/null/create`,
        {
          acronym: dataRoad.acronym,
          code: "",
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
          descrption: descrptionTeste,
          km: data.km,
          level: "MAIN",
          roadId: dataRoad.id,
          roadSide: JSON.stringify({
            BD: data.BD,
            BE: data.BE,
            EIXO: data.EIXO,
            PISTA: data.PISTA,
          }),
          screenshotUrl: "",
          type: "",
          videoId: Number(video),
          videoTime: data.videoTime,
          observation: data.observation,
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
      if (response1.status === 200) {
        reset();
        setPreview("");
        setDescriptionTeste("")
        window.alert("Patologia cadastrada com sucesso");
      }
    } else {
      // se a imagem existe
      const response = await api.post(`/upload/image`, formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      // verifica se a imagem foi cadstrada no storage
      if (response.status === 200) {
        // adiciona a url da imagem ao file image
        setFileImage(response.data);

        // faz a requisição para cadastar a patologia ja com a url da imagem
        const response1 = await api.put(
          `/road/${id}/patology/null/create`,
          {
            acronym: dataRoad.acronym,
            code: "",
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
            descrption: descrptionTeste,
            km: data.km,
            level: "MAIN",
            roadId: dataRoad.id,
            roadSide: JSON.stringify({
              BD: data.BD,
              BE: data.BE,
              EIXO: data.EIXO,
              PISTA: data.PISTA,
            }),
            screenshotUrl: response.data.url,
            type: "",
            videoId: Number(video),
            videoTime: data.videoTime,
            observation: data.observation,
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
        
        if (response1.status === 200) {
          reset();
          setPreview("");
          setDescriptionTeste("")
          window.alert("Patologia cadastrada com sucesso");
        }
      } else {
        window.alert("error ao cadastrar Imagem");
      }
    }
  }

  function handleImage(event) {
    setPreview(URL.createObjectURL(event.target.files[0]));
  }

  const timeValidation = (value) => {
    const pattern =
      /^((?:[0-5][0-9]|1[0-9]|2[0-3]):[0-5][0-9])(?::[0-5][0-9])?$/;
    if (!pattern.test(value)) {
      return "Tempo invalido.";
    }
    return true;
  };

  useEffect(() => {
    function handleDescrptionPatology() {
      if (watch("FI") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("TTC") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("TTL") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("TTC") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("TRR") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("J") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("TB") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("JE") === true) {
        setValue("descrption", descrptionTeste);
      }
      if (watch("TBE") === true) {
        setValue("descrption", descrptionTeste);
      }

      // afundamentos
      if (watch("ALP") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("ATP") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("ALC") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("ATC") === true) {
        setValue("descrption", descrptionTeste);
      }

      // outros dedefirtos
      if (watch("O") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("P") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("E") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("EX") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("D") === true) {
        setValue("descrption", descrptionTeste);
      }

      if (watch("R") === true) {
        setValue("descrption", descrptionTeste);
      }
    }
    handleDescrptionPatology();
  }, [descrptionTeste]);



  return (
    <section className="mt-5 flex overflow-auto w-full   border-b-8 border-background rounded-md">
      <form
        onSubmit={handleSubmit(handleRegisterPatology)}
        action=""
        className=" bg-white w-full h-auto p-5"
      >
        <h1 className="col-span-3 text-2xl font-bold text-text-100">
          Cadastro de Patologia
        </h1>

        <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
          Localização
        </h2>
        <div className="col-span-3 grid grid-cols-3  gap-5">
          <label htmlFor="km">
            Km
            <input
              id="km"
              type="text"
              className="bg-gray-input w-full rounded-md p-2"
              {...register("km", { required: true })}
            />
          </label>
          <label htmlFor="latitude">
            Latitude
            <input
              id="latitude"
              type="text"
              className="bg-gray-input w-full rounded-md p-2"
              {...register("latitude", { required: true })}
            />
          </label>
          <label htmlFor="longitude">
            Longitude
            <input
              id="longitude"
              type="text"
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
              {...register("BD")}
            />
            <label htmlFor="BD">BD</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="BE"
              {...register("BE")}
            />
            <label htmlFor="BE">BE</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="EIXO"
              {...register("EIXO")}
            />
            <label htmlFor="EIXO">EIXO</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="PISTA"
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
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Fissuras - FI;");
              }}
              {...register("FI")}
            />
            <label htmlFor="FI">FI</label>
          </li>

          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TTC"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Trincas Isoladas Tranversais Curtas - TTC;"
                );
              }}
              {...register("TTC")}
            />
            <label htmlFor="TTC">TTC</label>
          </li>

          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TTL"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Trincas Isoladas Tranversais Longas - TTL;"
                );
              }}
              {...register("TTL")}
            />
            <label htmlFor="TTL">TTL</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TLC"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Trincas Isoladas Longitudinais Curtas - TLC;"
                );
              }}
              {...register("TLC")}
            />
            <label htmlFor="TLC">TLC</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TLL"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Trincas Isoladas Longitudinais Longas - TLL"
                );
              }}
              {...register("TLL")}
            />
            <label htmlFor="TLL">TLL</label>
          </li>

          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TRR"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste + " Trincas Isolodas Devido a Retração - TRR"
                );
              }}
              {...register("TRR")}
            />
            <label htmlFor="TRR">TRR</label>
          </li>
          
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="J"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    "Trincas Interligadas Tipo jacaré Sem Erosão - J"
                );
              }}
              {...register("J")}
            />
            <label htmlFor="J">J</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TB"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    "Trincas Interligadas Tipo Bloco sem Erosão - TB"
                );
              }}
              {...register("TB")}
            />
            <label htmlFor="TB">TB</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="JE"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Trincas Interligadas Tipo jacaré com Erosão - JE;"
                );
              }}
              {...register("JE")}
            />
            <label htmlFor="JE">JE</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="TBE"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Trincas Interligadas Tipo Bloco com Erosão - TBE;"
                );
              }}
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
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste + " Afundamento Plástico Local - ALP;"
                );
              }}
              {...register("ALP")}
            />
            <label htmlFor="ALP">ALP</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="ATP"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste + " Afundamento Plástico Da Trilha - ATP;"
                );
              }}
              {...register("ATP")}
            />
            <label htmlFor="ATP">ATP</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="ALC"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste + " Afundamento De Consolidção Local - ALC;"
                );
              }}
              {...register("ALC")}
            />
            <label htmlFor="ALC">ALC</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="ATC"
              onClick={() => {
                setDescriptionTeste(
                  descrptionTeste +
                    " Afundamento De Consolidação Da Trilha - ATC;"
                );
              }}
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
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Ondulação - O;");
              }}
              {...register("O")}
            />
            <label htmlFor="O">O</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="P"
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Panela ou Buraco - P;");
              }}
              {...register("P")}
            />
            <label htmlFor="P">P</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="E"
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Escorregamento - E;");
              }}
              {...register("E")}
            />
            <label htmlFor="E">E</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="EX"
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Exsudação - EX;");
              }}
              {...register("EX")}
            />
            <label htmlFor="EX">EX</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="D"
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Desgaste - D;");
              }}
              {...register("D")}
            />
            <label htmlFor="D">D</label>
          </li>
          <li className="flex gap-2 items-center ">
            <input
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id="R"
              onClick={() => {
                setDescriptionTeste(descrptionTeste + " Remendo - R;");
              }}
              {...register("R")}
            />
            <label htmlFor="R">R</label>
          </li>
        </ul>

        <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
          Trincas Rodas
        </h2>
        <div className="col-span-3 grid grid-cols-3  gap-5">
          <label htmlFor="stretch">
            TRI em mm
            <input
              id="stretch"
              type="text"
              className="bg-gray-input w-full rounded-md p-2"
              {...register("stretch")}
            />
          </label>
          <label htmlFor="stretch">
            TRE em mm
            <input
              id="stretch"
              type="text"
              className="bg-gray-input w-full rounded-md p-2"
              {...register("stretch")}
            />
          </label>
        </div>

        <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
          Observação
        </h2>
        <div className="col-span-3 grid grid-cols-3 mt-5 gap-5">
          <label htmlFor="observation">
            <select
              name=""
              id="observation"
              className="bg-gray-input w-full rounded-md p-2"
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
              <option value="Em obras">Trecho em Obras</option>
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
            required
            value={descrptionTeste}
            onChange={(event) => setDescriptionTeste(event.target.value)}
          ></textarea>
        </div>

        <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
          Vídeo
        </h2>
        <div className="col-span-3 grid grid-cols-3  gap-5">
          <Controller
            name="videoTime"
            control={control}
            rules={{ required: true, validate: timeValidation }}
            render={({ field }) => (
              <div>
                <label htmlFor="videoTime">
                  Tempo
                  <input
                    id="videoTime"
                    type="text"
                    className="bg-gray-input w-full rounded-md p-2"
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
          <label htmlFor="screenshotUrl">
            Foto
            <div>
              <Controller
                name="file"
                control={control}
                render={({ field }) => (
                  <input
                    type="file"
                    className="p-2 bg-gray-input w-full rounded-md p-2"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      field.onChange(e.target.files[0]), handleImage(e);
                    }}
                  />
                )}
              />
            </div>
          </label>
          <img
            style={{ maxWidth: "500px", maxHeight: "300px" }}
            className="w-500 h-300 col-span-2 rounded-md"
            src={preview}
            alt=""
          />
        </div>

        <div className="mt-10">
          <button className="bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}
