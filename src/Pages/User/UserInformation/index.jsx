import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../../lib/api";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { PencilLine, TrashSimple } from "@phosphor-icons/react";
import {ModalUpdete} from "./ModalUpdate"

export function UserInformation(){
    const [user, setUser] = useState({});
    const params = useParams()
    useEffect(() =>{
        async function GetUser(){
            const token = window.localStorage.getItem("encibraapptoken-v2");
            const response = await api.get(`/users/${params.id}`, {
                headers: { Authorization: "Bearer " + token },
              });
            setUser(response.data)
        }
        GetUser()
    }, [])

    function arrayUpdateUser(object){
        setUser(object)
    }

    async function Delete(id){
        console.log(id)
        const token = window.localStorage.getItem("encibraapptoken-v2");
        
        const result = window.confirm("Certeza que deseja deletar o usuário? ");

        if (result) {
            const response = await api.delete(
              `/users/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
      
             if(response.status === 200){
              // function para deleter o imtem do array dataCity
             
              window.alert("Usuário deletado com sucesso");
             }
          }
    }

    console.log(user)
    if(user){
        return(
            <section className="w-screen ">
                <header className="flex justify-between pr-5 pt-5 pb-8 items-center">
                    <nav className="text-2xl">
                        <NavLink to="/user" >
                            <strong className="text-2xl hover:underline">Usuários </strong>
                        </NavLink>
                        |
                        <NavLink to="#" >
                            <strong className="text-2xl hover:underline"> {user.name}</strong>
                        </NavLink>
                    </nav>
                </header>

                <section className="pr-5">
                    <div className=" flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
                        <div className="flex flex-col">
                            <strong className="py-2 text-text-100">
                                <span className="text-gray-400 tracking-wider mr-2">
                                    Nome:
                                </span>
                                {user.name}
                        </strong>
                        <strong className="py-2 text-text-100 ">
                            <span className="text-gray-400 tracking-wider mr-2 ">E-mail:</span>
                                {user.email}
                        </strong>
                        <strong className="py-2 text-text-100 ">
                            <span className="text-gray-400 tracking-wider mr-2 ">
                              Cargo:
                            </span>
                            {user.position}
                        </strong>
                        <strong className="py-2 text-text-100 ">
                            <span className="text-gray-400 tracking-wider mr-2 ">
                                Celular:
                            </span>
                            {user.phone}
                        </strong>
                        <strong className="py-2 text-text-100 ">
                            <span className="text-gray-400 tracking-wider mr-2 ">
                                Data de criação:
                            </span>
                                {user.createdAt}
                        </strong>
                        <strong className="py-2 text-text-100 ">
                            <span className="text-gray-400 tracking-wider mr-2 ">
                                Data de atualização:
                            </span>
                            {user.updatedAt}
                        </strong>
                        </div>
                        <div className="py-2 flex justify-end justify-self-end gap-2">
                            <Dialog>
                                <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                                    <PencilLine size={18} />
                                </DialogTrigger>
                            <ModalUpdete data={user} arrayUpdateUser={arrayUpdateUser}/>
                            </Dialog>
                            <button className="flex  text-sm justify-center items-center gap-1 p-1 text-sm text-red-500 border rounded border-red-500 hover:bg-red-500 hover:text-white">
                                <TrashSimple onClick={() =>{
                                    Delete(user.id)
                                }} size={18} />
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}