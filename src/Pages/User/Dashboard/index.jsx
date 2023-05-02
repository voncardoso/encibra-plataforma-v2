import { CaretRight, PlusCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../../lib/api";

export function DashboardUser(){
    const [dataUser, setDataUser] = useState([])
    const navigate = useNavigate()
    useEffect(() =>{
        async function GetUsers(){
            const token = window.localStorage.getItem("encibraapptoken-v2");
            const response = await api.get("/users", {
              headers: { Authorization: "Bearer " + token },
            });
            setDataUser(response.data)
        }
        GetUsers()
    }, [])
    
    if(dataUser){
        return(
            <section  className="w-full overflow-y-scroll ">
                <header className="flex justify-between pr-5 pt-5 pb-8 items-center">
                    <strong className="text-2xl">Usuários</strong>
                    <NavLink
                        className="flex items-center gap-1 hover:text-gold-400 hover:underline"
                        to="/user/registro"
                    >
                        <PlusCircle className="text-gold-400" size={22} />
                        Cadastrar Usuários
                    </NavLink>
                </header>
                
                <div className="pr-5 mb-5">
                    <table className="w-full text-center">
                        <thead>
                            <tr className="bg-gray-300 ">
                                <th className="p-2 rounded-ss-md">Nome</th>
                                <th className="p-2">Cargo</th>
                                <th className="p-2">Celular</th>
                                <th className="p-2">E-mail</th>
                                <th className="p-2"></th>

                            </tr>
                        </thead>
                        <tbody>
                            {dataUser.map((user) =>{
                                return(
                                <tr key={user.id}
                                onClick={() =>{
                                    navigate(`/user/${user.id}`);
                                }}
                                    className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
                                >
                                    <td className="p-2">{user.name}</td>
                                    <td className="p-2">{user.position}</td>
                                    <td className="p-2">{user.phone}</td>
                                    <td className="p-2">{user.email}</td>
                                    <td className="p-2">
                                        <CaretRight size={20} />
                                    </td>
                                </tr>
                                )
                            })}
                            <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
                                <td colSpan={5} className="p-2 rounded-ee-md rounded-es-md"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            
          </section>
        )
    }
}