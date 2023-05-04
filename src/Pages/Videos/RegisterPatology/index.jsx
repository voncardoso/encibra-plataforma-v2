import { useForm } from "react-hook-form";

export function RegisterPatology(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
      } = useForm({
        defaultValues: {},
      });

    async function handleRegisterPatology(data){
    }
    return(
        <section className="mt-5 flex overflow-auto w-full   border-b-8 border-background rounded-md">
            <form 
                onSubmit={handleSubmit(handleRegisterPatology)}
                action=""
                className=" bg-white w-full h-auto p-5"
            >
                <h1 className="col-span-3 text-2xl font-bold text-text-100">
                    Cadastro de Rodovias
                </h1>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Localização</h2>
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
                    <label htmlFor="stretch">
                        Latitude
                        <input
                            id="stretch"
                            type="text"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                    </label>
                    <label htmlFor="stretch">
                        Longitude
                        <input
                            id="stretch"
                            type="text"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                    </label>
                </div>
                
                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Lado</h2>
                <ul className="flex gap-x-10 gap-y-5 flex-wrap">
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="BD"
                        />
                        <label htmlFor="BD">BD</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="BD"
                        />
                        <label htmlFor="BD">BE</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="BD"
                        />
                        <label htmlFor="BD">EIXO</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="BD"
                        />
                        <label htmlFor="BD">PISTA</label>
                    </li>
                </ul>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Trincas</h2>
                <ul className="flex gap-x-10 gap-y-5 flex-wrap">
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="FI"
                        />
                        <label htmlFor="FI">FI</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TTC"
                        />
                        <label htmlFor="TTC">TTC</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TTL"
                        />
                        <label htmlFor="TTL">TTL</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TLC"
                        />
                        <label htmlFor="TLC">TLC</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TLL"
                        />
                        <label htmlFor="TLL">TLL</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TRR"
                        />
                        <label htmlFor="TRR">TRR</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="J"
                        />
                        <label htmlFor="J">J</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TB"
                        />
                        <label htmlFor="TB">TB</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="JE"
                        />
                        <label htmlFor="JE">JE</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="TBE"
                        />
                        <label htmlFor="TBE">TBE</label>
                    </li>
                </ul>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Afundamentos</h2>
                <ul className="flex gap-x-10 gap-y-5 flex-wrap">
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="ALP"
                        />
                        <label htmlFor="ALP">ALP</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="ATP"
                        />
                        <label htmlFor="ATP">ATP</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="ALC"
                        />
                        <label htmlFor="ALC">ALC</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="ATC"
                        />
                        <label htmlFor="ATC">ATC</label>
                    </li>
                </ul>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Outros Defeitos</h2>
                <ul className="flex gap-x-10 gap-y-5 flex-wrap">
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="O"
                        />
                        <label htmlFor="O">O</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="P"
                        />
                        <label htmlFor="P">P</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="E"
                        />
                        <label htmlFor="E">E</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="EX"
                        />
                        <label htmlFor="EX">EX</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="D"
                        />
                        <label htmlFor="D">D</label>
                    </li>
                    <li className="flex gap-2 items-center ">
                        <input 
                            className="w-4 h-4 cursor-pointer"
                            type="checkbox" 
                            id="R"
                        />
                        <label htmlFor="R">R</label>
                    </li>
                </ul>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Trincas Rodas</h2>
                <div className="col-span-3 grid grid-cols-3  gap-5">
                    <label htmlFor="stretch">
                        TRI em mm
                        <input
                            id="stretch"
                            type="text"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                    </label>
                    <label htmlFor="stretch">
                        TRE em mm
                        <input
                            id="stretch"
                            type="text"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                    </label>
                </div>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Observação</h2>
                <div className="col-span-3 grid grid-cols-3 mt-5 gap-5">
                    <label htmlFor="stretch">
                        <input
                            id="stretch"
                            type="text"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                    </label>
                </div>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Descricao</h2>
                <div className="col-span-3 grid grid-cols-3 mt-5 gap-5">
                    <textarea 
                        className="h-32 bg-gray-input w-full rounded-md p-2 col-span-3 resize-none"
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        required
                        on
                    >
                    </textarea>
                </div>

                <h2 className="border-b-2 border-gray-300 w-full col-span-3 mt-5 mb-3 text-lg font-bold text-text-100">Vídeo</h2>
                <div className="col-span-3 grid grid-cols-3  gap-5">
                    <label htmlFor="stretch">
                        Tempo
                        <input
                            id="stretch"
                            type="text"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                        <p className="text-sm mt-1">Ex: 00:00:00 ou 00:00</p>
                    </label>
                    <label htmlFor="stretch">
                        Foto
                        <input
                            id="stretch"
                            type="file"
                            className="bg-gray-input w-full rounded-md p-2"
                            {...register("stretch", { required: true })}
                        />
                    </label>
                </div>

                <div className="mt-10">
                    <button className="bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
                        Cadastrar
                    </button>
                </div>


            </form>
        </section>
    )
}