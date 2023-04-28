import { useForm } from "react-hook-form";

export function RegisterVideo(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
      } = useForm({
        defaultValues: {},
      });
    return(
        <section className="  mt-5  flex overflow-auto w-full   border-b-8 border-background rounded-md">
            <form className=" bg-white w-full h-auto p-5 grid grid-cols-3 gap-5" action="">
                <h1 className="col-span-3 text-2xl font-bold text-text-100">
                    Cadastro de Rodovias
                </h1>
                <label htmlFor="stretch">
                    Techo
                    <input
                        id="stretch"
                        type="text"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("acronym", { required: true })}
                    />
                </label>
                <label htmlFor="extention">
                    Extensão
                    <input
                        type="text"
                        id="extention"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("extention", { required: true })}
                    />
                </label>
                <label htmlFor="">
                    Data
                    <input
                        type="date"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("acronym", { required: true })}
                    />
                </label>
                <label htmlFor="">
                    Km ínicial
                    <input
                        type="text"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("acronym", { required: true })}
                    />
                </label>
                <label htmlFor="">
                    Km final
                    <input
                        type="text"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("acronym", { required: true })}
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