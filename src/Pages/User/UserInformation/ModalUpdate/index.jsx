import { X } from "@phosphor-icons/react";
import {
    DialogOverlay,
    DialogContent,
    DialogPortal,
    DialogClose,
  } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { api } from "../../../../lib/api";
import { useParams } from "react-router-dom";

export function ModalUpdete(props){
    
    const params = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
      } = useForm({
        defaultValues: {},
      });

      async function handleUpdateUser(data){
        const token = window.localStorage.getItem("encibraapptoken-v2");
        const user = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            position: data.position,
            password: data.password,
            updatedAt: new Date().toISOString()
        }
        const response = await api.put(`/users/${params.id}`, user, {
            headers: { Authorization: "Bearer " + token },
        });

        if(response.status === 200){
            props.arrayUpdateUser(response.data)
            window.alert("Usuário atualizado com sucesso");
        }

      }
    return(
        <DialogPortal>
            <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
            <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
                <header className="flex mb-5 justify-between">
                    <h1 className="text-xl text font-bold">Atualizar Usuário</h1>
                    <DialogClose asChild>
                    <   button className="relative bottom-2">
                            <X />
                        </button>
                    </DialogClose>
                </header>
                <form onSubmit={handleSubmit(handleUpdateUser)} action="">
                    <label htmlFor="name">
                        Nome
                        <input
                            type="text"
                            id="name"
                            defaultValue={props.data.name}
                            className="bg-gray-input w-full rounded-md p-2 mb-2"
                            {...register("name")}
                        />
                    </label>

                    <label htmlFor="position">
                        Cargo
                        <select
                            id="position"
                            defaultValue={props.data.position}
                            className="bg-gray-input w-full rounded-md p-2 mb-2"
                            {...register("position")}
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
                            defaultValue={props.data.phone}
                            className="bg-gray-input w-full rounded-md p-2 mb-2"
                            {...register("phone")}
                        />
                    </label>

                    <label htmlFor="email">
                        E-mail
                        <input
                            type="text"
                            id="email"
                            defaultValue={props.data.email}
                            className="bg-gray-input w-full rounded-md p-2 mb-2"
                            {...register("email")}
                        />
                    </label>

                    <label htmlFor="password">
                        Senha
                        <input
                            type="text"
                            id="password"
                            className="bg-gray-input w-full rounded-md p-2 mb-2"
                            {...register("password")}
                        />
                    </label>
                
                    <label htmlFor=""></label>

                    
                    <button className="w-full col-span-3 mt-5 mb-5 bg-gold-400  py-2.5 px-8 rounded-md text-white hover:bg-gold-300">
                        Atualizar
                    </button>
                    
                </form>
            </DialogContent>
        </DialogPortal>
    )
}