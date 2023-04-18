
import {
    PencilLine
  } from "@phosphor-icons/react";
export function RoadInformation(){
    return(
        <section className="overflow-y-scroll">
            <header className="mt-5 flex justify-end ">
                <button className="flex justify-center gap-2 items-center ju text-sky-600 border rounded p-1 text-sm hover:bg-sky-600 hover:text-white">
                    <PencilLine size={18}/>
                    <p className="tracking-tight">Atualizar</p>
                </button>
            </header>
            <div className="flex flex-col p-2.5 bg-white rounded-md mt-2.5 shadow-lg ">
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

            <h2 className="mt-5 mb-1 text-xl font-medium">Coordenadas</h2>
            <div className="flex flex-col p-2.5 bg-white rounded-md shadow-lg mb-5">
                <strong className="py-2 text-text-100">
                    <span className="text-gray-400 tracking-wider mr-2">Latitude inicial:</span>
                    Teste
                </strong>
                <strong className="py-2 text-text-100 ">
                    <span className="text-gray-400 tracking-wider mr-2 ">Longitude inicial:</span>
                    Teste
                </strong>
                <strong className="py-2 text-text-100 ">
                    <span className="text-gray-400 tracking-wider mr-2 ">Latitude final:</span>
                    Teste    
                </strong>
                <strong className="py-2 text-text-100 ">
                    <span className="text-gray-400 tracking-wider mr-2 ">Latitude final:</span>
                    Teste    
                </strong>
            </div>
        </section>
    )
}