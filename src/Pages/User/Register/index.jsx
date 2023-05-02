import { useForm } from "react-hook-form";
import { api } from "../../../lib/api";

export function RegisterUser(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
      } = useForm({
        defaultValues: {},
      });

    async function handleRegister(data){
        const token = window.localStorage.getItem("encibraapptoken-v2");
        const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            position: data.position,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }

        const response = await api.post("/users", 
            user,
            {
                headers: { Authorization: "Bearer " + token },
            } 
        )

        if(response.status === 201){
            window.alert("Usuário cdastrado com sucesso")
            reset()
        }
    }

    return(
        <section className="h-screen  flex items-start bg-white overflow-auto w-screen  border-t-8 border-b-8 border-background">
           <form onSubmit={handleSubmit(handleRegister)} className="grid  ml-0  w-screen  bg-white mr-5 mt-5 rounded-xl p-5 gap-5">
                <h1 className="col-span-3 text-2xl font-bold text-text-100">Cadastro de Usários</h1>

                <label htmlFor="name">
                    Nome
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("name", { required: true })}
                    />
                </label>

                <label htmlFor="position">
                    Cargo
                    <select
                        id="position"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("position", { required: true })}
                    >
                        <option value="">Selecione o cargo</option>
                        <option value="ADMIN">Administrador</option>
                        <option value="ANALYST_ENGINEER"> Engeherio Analista</option>
                        <option value="ENGINEER">Engeherio</option>
                    </select>
                </label>

                <label htmlFor="phone">
                    Celular
                    <input
                        type="text"
                        id="phone"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("phone", { required: true })}
                    />
                </label>

                <label htmlFor="email">
                    E-mail
                    <input
                        type="text"
                        id="email"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("email", { required: true })}
                    />
                </label>
                <label htmlFor="password">
                    passsword
                    <input
                        type="text"
                        id="password"
                        className="bg-gray-input w-full rounded-md p-2"
                        {...register("password", { required: true })}
                    />
                </label>
                <label htmlFor=""></label>

                <div className="">
                    <button className="col-span-3 mt-5 mb-5 bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
                        Cadastrar
                    </button>
                </div>
           </form>
        </section>
    )
}