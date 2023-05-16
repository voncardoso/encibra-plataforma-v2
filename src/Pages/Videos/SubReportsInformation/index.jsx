import { LockOpen, PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function SubReportsInformation(){
    const [lock, setLock] = useState(false);
    return(
        <section>
            <header className="flex justify-end ">
                <NavLink
                    className="mb-2 flex items-center gap-1 hover:text-gold-400 hover:underline"
                    to={`/rodovias/videos/${""}/subtrecho/${""}/register`}
                >
                    <PlusCircle className="text-gold-400" size={22} />
                        Cadastrar patologia
                </NavLink>
            </header>
            <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
            <div className="flex flex-col">
                <strong className="py-2 text-text-100">
                    <span className="text-gray-400 tracking-wider mr-2">Trecho:</span>
                    Teste
                </strong>
                <strong className="py-2 text-text-100">
                    <span className="text-gray-400 tracking-wider mr-2">Km ínicial:</span>
                    Teste
                </strong>
                <strong className="py-2 text-text-100">
                    <span className="text-gray-400 tracking-wider mr-2">Km final:</span>
                    Teste
                </strong>
            </div>
            </div>

            <table className="mt-4 table-auto w-full text-center shadow-lg ">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="p-2 rounded-ss-md">Lado</th>
                        <th className="p-2">Tipo</th>
                        <th className="p-2">Descrição</th>
                        <th className="p-2">Km</th>
                        <th className="p-2">Min</th>
                        <th className="p-2">Latitude</th>
                        <th className="p-2">Longitude</th>
                        <th className="p-2 flex justify-end">
                          <button
                            className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                            
                          >
                            <LockOpen size={18} /> 
                          </button>
                        </th>
                        <th>
                          <NavLink></NavLink>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                    <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
                        <td colSpan={9} className="p-2 rounded-ee-md rounded-es-md"></td>
                    </tr>
                </tbody>
            </table>
            
        </section>
    )
}