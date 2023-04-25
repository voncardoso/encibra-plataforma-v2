import { X } from "@phosphor-icons/react";
import { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogPortal, DialogClose } from "@radix-ui/react-dialog";
export function NewModalCity(){
    return(
        <DialogPortal>
            <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50"/>
            <DialogContent className="fixed w-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
                <header className="flex mb-5 justify-between">
                    <h1 className="text-xl text font-bold">Adicionar Município</h1>
                    <DialogClose asChild>
                        <button className="relative bottom-2">
                            <X/>
                        </button>
                    </DialogClose>
                </header>
                <form action="">
                    <label className="" htmlFor="name">
                        Nome:
                        <input
                            id="name"
                            type="text" 
                            className="mb-4 bg-gray-input w-full rounded-md p-2"
                        />
                    </label>
                    <label htmlFor="extention">
                        Extensão:
                        <input 
                            id="extention"
                            type="text" 
                            className="bg-gray-input w-full rounded-md p-2"    
                        />
                    </label>

                    <button className="mt-6 bg-gold-400 w-full p-2 text-white rounded hover:bg-gold-300">
                        Adicionar
                    </button>
                </form>
                </DialogContent>
        </DialogPortal>
    )
}