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
import { useEffect, useState } from "react";

export function ModalUpdate(props) {
  const params = useParams();
  const [preview, setPreview] = useState(null);
  const [descrption, setDescription] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch, 
    setValue
  } = useForm({
    defaultValues: {},
  });
  //roadSide
  const [activeBD, setActiveBD] = useState(false)
  const [activeBE, setActiveBE] = useState(false)
  const [activeEIXO, setActiveEIXO] = useState(false)
  const [activePISTA, setActivePISTA] = useState(false)

  //Cracks
  const [activeFI,  setActiveFI ] = useState(false)
  const [activeTTC, setActiveTTC] = useState(false)
  const [activeTTL, setActiveTTL] = useState(false)
  const [activeTLC, setActiveTLC] = useState(false)
  const [activeTLL, setActiveTLL] = useState(false)
  const [activeTRR, setActiveTRR] = useState(false)
  const [activeJ,   setActiveJ  ] = useState(false)
  const [activeTB,  setActiveTB ] = useState(false)
  const [activeJE,  setActiveJE ] = useState(false)
  const [activeTBE, setActiveTBE] = useState(false)

  // Sags
  const [activeALP,  setActiveALP ] = useState(false)
  const [activeATP,  setActiveATP ] = useState(false)
  const [activeALC,  setActiveALC ] = useState(false)
  const [activeATC,  setActiveATC ] = useState(false)

  //otherDefects
  const [activeO,   setActiveO  ] = useState(false)
  const [activeP,   setActiveP  ] = useState(false)
  const [activeE,   setActiveE  ] = useState(false)
  const [activeEX,  setActiveEX ] = useState(false)
  const [activeD,   setActiveD  ] = useState(false)
  const [activeR,   setActiveR  ] = useState(false)

  useEffect(() => {
    function handleDescrptionPatology() {
      if (watch("FI") === true) {
        setValue("descrption", descrption);
      }
      if (watch("TTC") === true) {
        setValue("descrption", descrption);
      }
      if (watch("TTL") === true) {
        setValue("descrption", descrption);
      }
      if (watch("TTC") === true) {
        setValue("descrption", descrption);
      }
      if (watch("TRR") === true) {
        setValue("descrption", descrption);
      }
      if (watch("J") === true) {
        setValue("descrption", descrption);
      }
      if (watch("TB") === true) {
        setValue("descrption", descrption);
      }
      if (watch("JE") === true) {
        setValue("descrption", descrption);
      }
      if (watch("TBE") === true) {
        setValue("descrption", descrption);
      }

      // afundamentos
      if (watch("ALP") === true) {
        setValue("descrption", descrption);
      }

      if (watch("ATP") === true) {
        setValue("descrption", descrption);
      }

      if (watch("ALC") === true) {
        setValue("descrption", descrption);
      }

      if (watch("ATC") === true) {
        setValue("descrption", descrption);
      }

      // outros dedefirtos
      if (watch("O") === true) {
        setValue("descrption", descrption);
      }

      if (watch("P") === true) {
        setValue("descrption", descrption);
      }

      if (watch("E") === true) {
        setValue("descrption", descrption);
      }

      if (watch("EX") === true) {
        setValue("descrption", descrption);
      }

      if (watch("D") === true) {
        setValue("descrption", descrption);
      }

      if (watch("R") === true) {
        setValue("descrption", descrption);
      }
    }
    handleDescrptionPatology();
  }, [descrption]);

  useEffect(() =>{
    function active(){
      setActiveBD(props.roadSide.BD)
      setActiveBE(props.roadSide.BE)
      setActiveEIXO(props.roadSide.EIXO)
      setActivePISTA(props.roadSide.PISTA)

      setActiveFI(props.cracks.FI)
      setActiveTTC(props.cracks.TTC)
      setActiveTTL(props.cracks.TTL)
      setActiveTLC(props.cracks.TLC)
      setActiveTLL(props.cracks.TLL)
      setActiveTRR(props.cracks.TRR)
      setActiveJ(props.cracks.J)
      setActiveTB(props.cracks.TB)
      setActiveJE(props.cracks.JE)
      setActiveTBE(props.cracks.TBE)

      setActiveALP(props.sags.ALP)
      setActiveATP(props.sags.ATP)
      setActiveALC(props.sags.ALC)
      setActiveATC(props.sags.ATC)

      setActiveO(props.otherDefects.O)
      setActiveP(props.otherDefects.P)
      setActiveE(props.otherDefects.E)
      setActiveEX(props.otherDefects.EX)
      setActiveD(props.otherDefects.D)
      setActiveR(props.otherDefects.R)
      
      setDescription(props.data.descrption);
    }

    active()
  }, [])

  console.log("descrption", props.data.descrption)

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
        observation: data.observation
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
              {activeBD ? 
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="BD"
                  checked
                  onClick={() =>{
                    if(activeBD === true){
                      setActiveBD(false)
                    }else{
                      setActiveBD(true)
                    }
                  }}
                  {...register("BD")}
                />
                <label htmlFor="BD">BD</label>
              </li> 
              :
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="BD"
                  onClick={() =>{
                    if(activeDB === true){
                      setActiveBD(false)
                    }else{
                      setActiveBD(true)
                    }
                  }}
                  {...register("BD")}
                />
                <label htmlFor="BD">BD</label>
              </li>
              }

              {activeBE ? 
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="BE"
                  checked={props.roadSide.BE}
                  onClick={() =>{
                    if(activeBE === true){
                      setActiveBE(false)
                    }else{
                      setActiveBE(true)
                    }
                  }}
                  {...register("BE")}
                />
                <label htmlFor="BE">BE</label>
              </li> 
              :
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="BE"
                  onClick={() =>{
                    if(activeBE === true){
                      setActiveBE(false)
                    }else{
                      setActiveBE(true)
                    }
                  }}
                  {...register("BE")}
                />
                <label htmlFor="BE">BE</label>
              </li>
              }

              {activeEIXO ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="EIXO"
                    checked={props.roadSide.EIXO}
                    onClick={() =>{
                      if(activeEIXO === true){
                        setActiveEIXO(false)
                      }else{
                        setActiveEIXO(true)
                      }
                    }}
                    {...register("EIXO")}
                  />
                  <label htmlFor="EIXO">EIXO</label>
                </li>
              :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="EIXO"
                    onClick={() =>{
                      if(activeEIXO === true){
                        setActiveEIXO(false)
                      }else{
                        setActiveEIXO(true)
                      }
                    }}
                    {...register("EIXO")}
                  />
                  <label htmlFor="EIXO">EIXO</label>
                </li>
              }

              {activePISTA ? 
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="PISTA"
                  checked
                  onClick={() =>{
                    if(activePISTA === true){
                      setActivePISTA(false)
                    }else{
                      setActivePISTA(true)
                    }
                  }}
                  {...register("PISTA")}
                />
                <label htmlFor="PISTA">PISTA</label>
              </li> 
              : 
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="PISTA"
                  onClick={() =>{
                    if(activePISTA === true){
                      setActivePISTA(false)
                    }else{
                      setActivePISTA(true)
                    }
                  }}
                  {...register("PISTA")}
                />
                <label htmlFor="PISTA">PISTA</label>
              </li>
              }
            </ul>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Trincas
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              {activeFI ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="FI"
                    checked
                    onClick={() =>{
                      if(activeFI === true){
                        setActiveFI(false)
                      }else{
                        setActiveFI(true)
                        setDescription(descrption + " Fissuras - FI;");
                      }
                    }}
                    {...register("FI")}
                  />
                  <label htmlFor="FI">FI</label>
                </li>
              :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="FI"
                    onClick={() =>{
                      if(activeFI === true){
                        setActiveFI(false)
                      }else{
                        setActiveFI(true)
                        setDescription(descrption + " Fissuras - FI;");
                      }
                    }}
                    {...register("FI")}
                  />
                  <label htmlFor="FI">FI</label>
                </li>
              }

              {activeTTC ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TTC"
                    checked
                    onClick={() =>{
                      if(activeTTC === true){
                        setActiveTTC(false)
                      }else{
                        setActiveTTC(true)
                        setDescription(descrption + " Trincas Isoladas Tranversais Curtas - TTC;");
                      }
                    }}
                    {...register("TTC")}
                  />
                  <label htmlFor="TTC">TTC</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TTC"
                    onClick={() =>{
                      if(activeTTC === true){
                        setActiveTTC(false)
                      }else{
                        setActiveTTC(true)
                        setDescription(descrption + " Trincas Isoladas Tranversais Curtas - TTC;");
                      }
                    }}
                    {...register("TTC")}
                  />
                  <label htmlFor="TTC">TTC</label>
                </li>
              }

              {activeTTL ?
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TTL"
                    checked
                    onClick={() =>{
                      if(activeTTL === true){
                        setActiveTTL(false)
                      }else{
                        setActiveTTL(true)
                        setDescription(
                          descrption +
                            " Trincas Isoladas Tranversais Longas - TTL;"
                        );
                      }
                    }}
                    {...register("TTL")}
                  />
                  <label htmlFor="TTL">TTL</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TTL"
                    onClick={() =>{
                      if(activeTTL === true){
                        setActiveTTL(false)
                      }else{
                        setActiveTTL(true)
                        setDescription(
                          descrption +
                            " Trincas Isoladas Tranversais Longas - TTL;"
                        );
                      }
                    }}
                    {...register("TTL")}
                  />
                  <label htmlFor="TTL">TTL</label>
                </li>
              }

              {activeTLC ?
                <li className="flex gap-2 items-center ">
                <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TLC"
                    onClick={() =>{
                      if(activeTLC === true){
                        setActiveTLC(false)
                      }else{
                        setActiveTLC(true)
                        setDescription(
                          descrption +
                            " Trincas Isoladas Longitudinais Curtas - TLC;"
                        );
                      }
                    }}
                    {...register("TLC")}
                  />
                  <label htmlFor="TLC">TLC</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TLC"
                    onClick={() =>{
                      if(activeTLC === true){
                        setActiveTLC(false)
                      }else{
                        setActiveTLC(true)
                        setDescription(
                          descrption +
                            " Trincas Isoladas Longitudinais Curtas - TLC;"
                        );
                      }
                    }}
                    {...register("TLC")}
                  />
                  <label htmlFor="TLC">TLC</label>
                </li>
              }
              
              {activeTLL ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TLL"
                    checked
                    onClick={() =>{
                      if(activeTLL === true){
                        setActiveTLL(false)
                      }else{
                        setActiveTLL(true)
                        setDescription(
                          descrption +
                            " Trincas Isoladas Longitudinais Longas - TLL"
                        );
                      }
                    }}
                    {...register("TLL")}
                  />
                  <label htmlFor="TLL">TLL</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TLL"
                    onClick={() =>{
                      if(activeTLL === true){
                        setActiveTLL(false)
                      }else{
                        setActiveTLL(true)
                        setDescription(
                          descrption +
                            " Trincas Isoladas Longitudinais Longas - TLL"
                        );
                      }
                    }}
                    {...register("TLL")}
                  />
                  <label htmlFor="TLL">TLL</label>
                </li>
              }
              
              {activeTRR ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TRR"
                    checked
                    onClick={() =>{
                      if(activeTRR === true){
                        setActiveTRR(false)
                      }else{
                        setActiveTRR(true)
                        setDescription(
                          descrption + " Trincas Isolodas Devido a Retração - TRR"
                        );
                      }
                    }}
                    {...register("TRR")}
                  />
                  <label htmlFor="TRR">TRR</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TRR"
                    onClick={() =>{
                      if(activeTRR === true){
                        setActiveTRR(false)
                      }else{
                        setActiveTRR(true)
                        setDescription(
                          descrption + " Trincas Isolodas Devido a Retração - TRR"
                        );
                      }
                    }}
                    {...register("TRR")}
                  />
                  <label htmlFor="TRR">TRR</label>
                </li>
              }
              
              {activeJ ?
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="J"
                    checked
                    onClick={() =>{
                      if(activeJ === true){
                        setActiveJ(false)
                      }else{
                        setActiveJ(true)
                        setDescription(
                          descrption +
                            "Trincas Interligadas Tipo jacaré Sem Erosão - J"
                        );
                      }
                    }}
                    {...register("J")}
                  />
                  <label htmlFor="J">J</label>
                </li>
              :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="J"
                    onClick={() =>{
                      if(activeJ === true){
                        setActiveJ(false)
                      }else{
                        setActiveJ(true)
                        setDescription(
                          descrption +
                            "Trincas Interligadas Tipo jacaré Sem Erosão - J"
                        );
                      }
                    }}
                    {...register("J")}
                  />
                  <label htmlFor="J">J</label>
                </li>  
              }

              {activeTB ? 
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TB"
                  checked
                  onClick={() =>{
                    if(activeTB === true){
                      setActiveTB(false)
                    }else{
                      setActiveTB(true)
                      setDescription(
                        descrption +
                          "Trincas Interligadas Tipo Bloco sem Erosão - TB"
                      );
                    }
                  }}
                  {...register("TB")}
                />
                <label htmlFor="TB">TB</label>
              </li>
              :
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="TB"
                  onClick={() =>{
                    if(activeTB === true){
                      setActiveTB(false)
                    }else{
                      setActiveTB(true)
                      setDescription(
                        descrption +
                          "Trincas Interligadas Tipo Bloco sem Erosão - TB"
                      );
                    }
                  }}
                  {...register("TB")}
                />
                <label htmlFor="TB">TB</label>
              </li>  
              }
              
              {activeJE ? 
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="JE"
                  checked
                  onClick={() =>{
                    if(activeJE === true){
                      setActiveJE(false)
                    }else{
                      setActiveJE(true)
                      setDescription(
                        descrption +
                          " Trincas Interligadas Tipo jacaré com Erosão - JE;"
                      );
                    }
                  }}
                  {...register("JE")}
                />
                <label htmlFor="JE">JE</label>
              </li>
              :
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="JE"
                  onClick={() =>{
                    if(activeJE === true){
                      setActiveJE(false)
                    }else{
                      setActiveJE(true)
                      setDescription(
                        descrption +
                          " Trincas Interligadas Tipo jacaré com Erosão - JE;"
                      );
                    }
                  }}
                  {...register("JE")}
                />
                <label htmlFor="JE">JE</label>
              </li>
              }

              {activeTBE ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TBE"
                    checked
                    onClick={() =>{
                      if(activeTBE === true){
                        setActiveTBE(false)
                      }else{
                        setActiveTBE(true)
                        setDescription(
                          descrption +
                            " Trincas Interligadas Tipo Bloco com Erosão - TBE;"
                        );
                      }
                    }}
                    {...register("TBE")}
                  />
                  <label htmlFor="TBE">TBE</label>
                </li>
              :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="TBE"
                    onClick={() =>{
                      if(activeTBE === true){
                        setActiveTBE(false)
                      }else{
                        setActiveTBE(true)
                        setDescription(
                          descrption +
                            " Trincas Interligadas Tipo Bloco com Erosão - TBE;"
                        );
                      }
                    }}
                    {...register("TBE")}
                  />
                <label htmlFor="TBE">TBE</label>
              </li>
              }
              
            </ul>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Afundamentos
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              {activeALP ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="ALP"
                    checked
                    onClick={() =>{
                      if(activeALP === true){
                        setActiveALP(false)
                      }else{
                        setActiveALP(true)
                        setDescription(
                          descrption + " Afundamento Plástico Local - ALP;"
                        );
                      }
                    }}
                    {...register("ALP")}
                  />
                  <label htmlFor="ALP">ALP</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ALP"
                  onClick={() =>{
                    if(activeALP === true){
                      setActiveALP(false)
                    }else{
                      setActiveALP(true)
                      setDescription(
                        descrption + " Afundamento Plástico Local - ALP;"
                      );
                    }
                  }}
                  {...register("ALP")}
                />
                <label htmlFor="ALP">ALP</label>
              </li>
              }

              {activeATP ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="ATP"
                    checked
                    onClick={() =>{
                      if(activeATP === true){
                        setActiveATP(false)
                      }else{
                        setActiveATP(true)
                        setDescription(
                          descrption + " Afundamento Plástico Da Trilha - ATP;"
                        );
                      }
                    }}
                    {...register("ATP")}
                  />
                  <label htmlFor="ATP">ATP</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="ATP"
                    onClick={() =>{
                      if(activeATP === true){
                        setActiveATP(false)
                      }else{
                        setActiveATP(true)
                        setDescription(
                          descrption + " Afundamento Plástico Da Trilha - ATP;"
                        );
                      }
                    }}
                    {...register("ATP")}
                  />
                  <label htmlFor="ATP">ATP</label>
                </li>
              }
              
              {activeALC ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="ALC"
                    checked
                    onClick={() =>{
                      if(activeALC === true){
                        setActiveALC(false)
                      }else{
                        setActiveALC(true)
                        setDescription(
                          descrption + " Afundamento De Consolidção Local - ALC;"
                        );
                      }
                    }}
                    {...register("ALC")}
                  />
                  <label htmlFor="ALC">ALC</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ALC"
                  onClick={() =>{
                    if(activeALC === true){
                      setActiveALC(false)
                    }else{
                      setActiveALC(true)
                      setDescription(
                        descrption + " Afundamento De Consolidção Local - ALC;"
                      );
                    }
                  }}
                  {...register("ALC")}
                />
                  <label htmlFor="ALC">ALC</label>
                </li>
              }

              {activeATC ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="ATC"
                    checked
                    onClick={() =>{
                      if(activeATC === true){
                        setActiveATC(false)
                      }else{
                        setActiveATC(true)
                        setDescription(
                          descrption +
                            " Afundamento De Consolidação Da Trilha - ATC;"
                        );
                      }
                    }}
                    {...register("ATC")}
                  />
                  <label htmlFor="ATC">ATC</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="ATC"
                  onClick={() =>{
                    if(activeATC === true){
                      setActiveATC(false)
                    }else{
                      setActiveATC(true)
                      setDescription(
                        descrption +
                          " Afundamento De Consolidação Da Trilha - ATC;"
                      );
                    }
                  }}
                  {...register("ATC")}
                />
                <label htmlFor="ATC">ATC</label>
                </li>
              }
              
            </ul>

            <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">
              Outros Defeitos
            </h2>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              {activeO ? 
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="O"
                    checked
                     onClick={() =>{
                    if(activeO === true){
                      setActiveO(false)
                    }else{
                      setActiveO(true)
                      setDescription(descrption + " Ondulação - O;");
                    }
                  }}
                    {...register("O")}
                  />
                  <label htmlFor="O">O</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                  <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="O"
                    
                    onClick={() =>{
                    if(activeO === true){
                      setActiveO(false)
                    }else{
                      setActiveO(true)
                      setDescription(descrption + " Ondulação - O;");
                    }
                  }}
                    {...register("O")}
                  />
                  <label htmlFor="O">O</label>
                </li>
              }

              {activeP ?
                <li className="flex gap-2 items-center ">
                <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="P"
                    checked
                    onClick={() =>{
                    if(activeP === true){
                      setActiveP(false)
                    }else{
                      setActiveP(true)
                      setDescription(descrption + " Panela ou Buraco - P;");
                    }
                  }}
                   {...register("P")}
                  />
                  <label htmlFor="P">P</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="P"
                 
                  onClick={() =>{
                    if(activeP === true){
                      setActiveP(false)
                    }else{
                      setActiveP(true)
                      setDescription(descrption + " Panela ou Buraco - P;");
                    }
                  }}
                  {...register("P")}
                />
                <label htmlFor="P">P</label>
                </li>
              }
              
              {activeE ? 
                <li className="flex gap-2 items-center ">
                <input
                    className="w-4 h-4 cursor-pointer"
                    type="checkbox"
                    id="E"
                    checked
                    onClick={() =>{
                    if(activeE === true){
                      setActiveE(false)
                    }else{
                      setActiveE(true)
                      setDescription(descrption + " Escorregamento - E;");
                    }
                  }}
                    {...register("E")}
                  />
                  <label htmlFor="E">E</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="E"
                  onClick={() =>{
                    if(activeE === true){
                      setActiveE(false)
                    }else{
                      setActiveE(true)
                      setDescription(descrption + " Escorregamento - E;");
                    }
                  }}
                  {...register("E")}
                />
                <label htmlFor="E">E</label>
                </li>
              }
              
              {activeEX ?
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="EX"
                  checked
                  onClick={() =>{
                    if(activeEX === true){
                      setActiveEX(false)
                    }else{
                      setActiveEX(true)
                      setDescription(descrption + " Exsudação - EX;");
                    }
                  }}
                  {...register("EX")}
                />
                <label htmlFor="EX">EX</label>
              </li>
              :
              <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="EX"
                  onClick={() =>{
                    if(activeEX === true){
                      setActiveEX(false)
                    }else{
                      setActiveEX(true)
                      setDescription(descrption + " Exsudação - EX;");
                    }
                  }}
                  {...register("EX")}
                />
                <label htmlFor="EX">EX</label>
              </li>
              }
              
              {activeD ? 
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="D"
                  checked
                  onClick={() =>{
                    if(activeD === true){
                      setActiveD(false)
                    }else{
                      setActiveD(true)
                      setDescription(descrption + " Desgaste - D;");
                    }
                  }}
                  {...register("D")}
                />
                  <label htmlFor="D">D</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="D"
                  
                  onClick={() =>{
                    if(activeD === true){
                      setActiveD(false)
                    }else{
                      setActiveD(true)
                      setDescription(descrption + " Desgaste - D;");
                    }
                  }}
                  {...register("D")}
                />
                <label htmlFor="D">D</label>
                </li>
              }
              
              {activeR ? 
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="R"
                  checked
                  onClick={() =>{
                    if(activeR === true){
                      setActiveR(false)
                    }else{
                      setActiveR(true)
                      setDescription(descrption + " Remendo - R;");
                    }
                  }}
                  {...register("R")}
                />
                <label htmlFor="R">R</label>
                </li>
                :
                <li className="flex gap-2 items-center ">
                <input
                  className="w-4 h-4 cursor-pointer"
                  type="checkbox"
                  id="R"
                  
                  onClick={() =>{
                    if(activeR === true){
                      setActiveR(false)
                    }else{
                      setActiveR(true)
                      setDescription(descrption + " Remendo - R;");
                    }
                  }}
                  {...register("R")}
                />
                <label htmlFor="R">R</label>
                </li>
              }
              
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
