import { PencilLine } from "@phosphor-icons/react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export function Information(){
    const {id, video} = useParams()
    console.log(id, video)
    return(
        <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
        <div className="flex flex-col">
            <strong className="py-2 text-text-100">
                <span className="text-gray-400 tracking-wider mr-2">Rodovia:</span>
                Teste
            </strong>
            <strong className="py-2 text-text-100 ">
                <span className="text-gray-400 tracking-wider mr-2 ">Malha:</span>
                Teste
            </strong>
            <strong className="py-2 text-text-100 ">
                <span className="text-gray-400 tracking-wider mr-2 ">Extensão:</span>
                Teste    
            </strong>
            <strong className="py-2 text-text-100 ">
                <span className="text-gray-400 tracking-wider mr-2 ">Núcleo Regional:</span>
                Teste    
            </strong>
            <strong className="py-2 text-text-100 ">
                <span className="text-gray-400 tracking-wider mr-2 ">UF:</span>
                Teste
            </strong>
            <strong className="py-2 text-text-100 ">
                <span className="text-gray-400 tracking-wider mr-2 ">Descrição:</span>
                Teste
            </strong>
        </div>
        <div className="py-2 flex justify-end justify-self-end">
            <button className="flex  gap-1 items-center  text-sky-600  rounded p-1 px-2 text hover:bg-sky-600 hover:text-white">
                <PencilLine size={18}/>
                <p className="tracking-tight">Atualizar</p>
            </button>
        </div>
    </div>
    )
}