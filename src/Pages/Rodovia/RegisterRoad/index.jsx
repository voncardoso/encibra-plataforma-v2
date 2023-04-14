import { PlusCircle, TrashSimple } from "@phosphor-icons/react";
import { useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export function RegisterRoad(){
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: { counties: [{ name: '', extensao: ''}] },
    });

    const { fields, append, remove } = useFieldArray({ control, name: 'counties', extensao:'counties'})

    const handleRegister = (data) =>{
        console.log(data)
    }


    
    return(
        <section className="h-screen overflow-hidden flex items-center">
            <form 
                className=" h-5/6  overflow-auto scrollbar-thin mx-auto  bg-white mr-5 mt-5 rounded-xl p-5 grid grid-cols-3 gap-5 "
                onSubmit={handleSubmit(handleRegister)}    
            >
                <h1 className="col-span-3 text-2xl font-bold text-text-100">Cadastro de Rodovias</h1>

                <label htmlFor="">
                    Rodovia 
                    <input  
                        type="text" 
                        className="bg-gray-input w-full rounded-md p-2" 
                        {...register("rod", {required: true })}
                    />
                </label>
                <label htmlFor="">
                    Extensão em km
                    <input  
                        type="text" 
                        className="bg-gray-input w-full rounded-md p-2" 
                        {...register("highwayExtension", {required: true })}    
                    />
                </label>

                <label htmlFor="">
                    Malha
                    <select 
                        name="" 
                        id=""  
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("roadNetwork", {required: true })} 
                    >
                        <option value="">Selecione a Malha</option>
                        <option value="ESTADUAL">Estadual</option>
                        <option value="FEDERAL"> Federal</option>
                    </select>
                </label>

                <label htmlFor="">
                    Núcleo Regional
                    <select 
                        name="" 
                        id=""  
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("regionalCenter", {required: true })}
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

                <label htmlFor="">
                    UF
                    <select 
                        name="" 
                        id=""  
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("state", {required: true })}
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

                <div className="col-span-3 flex flex-col gap-5">
                    <h2 
                        className="col-span-3 text-lg font-bold border-b-2 border-gray-300"
                    >
                        Municipios
                    </h2>
                    {fields.map((field, index) => (
                        <div key={field.id} className="grid grid-cols-3 gap-5">
                          <input
                            name={`fields[${index}].name[${index}]`}
                            defaultValue={field.name}
                            {...register(`counties.${index}.name`)}
                            className="bg-gray-input w-full rounded-md p-2" 
                          />
                          <input
                            name={`fields[${index}].extensao[${index}]`}
                            defaultValue={field.extensao}
                            {...register(`counties.${index}.extensao`)}
                            className="bg-gray-input w-full rounded-md p-2" 
                          />
                          <button className="flex gap-1 text-left w-32 items-center hover:text-red-500" type="button" onClick={() => remove(index)}>
                            <TrashSimple className="text-red-500" size={22} /> Remover
                          </button>
                        </div>
                    ))}
                    <button className="flex gap-1 text-center w-32 hover:text-gold-400" type="button" onClick={() => append({ name: '', extensao: ''})}>
                        <PlusCircle className="text-gold-400" size={22} /> Adicionar
                    </button>
                </div>

                <div className="col-span-3 grid grid-cols-3 gap-5">
                    <h2 className="col-span-3 text-lg font-bold border-b-2 border-gray-300">Pontos</h2>
                    <label htmlFor="">
                        Tipo
                        <select 
                            name="" 
                            id="" 
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("typePoints", {required: true })}
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="1">Ponte</option>
                            <option value="2">Vila</option>
                            <option value="3">Divisa entre municípios</option>
                            <option value="4">Sede do município</option>
                            <option value="5">Travessia de balsa</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Latitude
                        <input 
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("latitudePoints", {required: true })}
                        />
                    </label>
                    <label htmlFor="">
                        Longitude
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("longitudePoints", {required: true })}
                        />
                    </label>
                    <label htmlFor="" className="col-span-2">
                        Descrição
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("descriptionsPoints", {required: true })}
                        />
                    </label>
                    <label htmlFor="">
                        Km
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("extensionsPoints", {required: true })}
                        />
                    </label>
                </div>

                <div className="col-span-3 grid grid-cols-2 gap-5">
                    <h2 
                        className="col-span-2 text-lg font-bold border-b-2 border-gray-300" >
                        Revestimentos
                    </h2>
                    <label htmlFor="">
                        Tipo
                        <select     
                            name="" 
                            id=""  
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("typeCoating", {required: true })}
                        >
                            <option value="">Selecione o revestimento</option>
                            <option value="PAVIMENTADO">Pavimentado</option>
                            <option value="NÃO PAVIMENTADO">Não Pavimentado</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        Extensão em km
                        <input 
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("extensionCoating", {required: true })}
                        />
                    </label>
                </div>

                <div className="col-span-3 grid grid-cols-2 gap-5">
                    <h2 className="col-span-3 text-lg font-bold">Trecho</h2>
                    <label htmlFor="">
                        Trecho
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("snippet", {required: true })}
                        />
                    </label>
                    <label htmlFor="">
                        Latitude Inicial
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("initialLatitude", {required: true })}
                        />
                    </label>
                    <label htmlFor="">
                        Latitude Final
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("endLatitude", {required: true })}
                        />
                    </label>
                    <label htmlFor="">
                        Longitude Inicial
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("initialLongitude", {required: true })}
                        />
                    </label>
                    <label htmlFor="">
                        Longitude Final
                        <input  
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2" 
                            {...register("endLongitude", {required: true })}    
                        />
                    </label>
                </div>

                <button className="mt-5 bg-gold-400  py-2.5 rounded-md text-white hover:bg-gold-300">
                    Cadastrar
                </button>
            </form>
        </section>
    )
}