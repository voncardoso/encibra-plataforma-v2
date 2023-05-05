import {
    DialogOverlay,
    DialogContent,
    DialogPortal,
    DialogClose,
  } from "@radix-ui/react-dialog";

export function Modalimage(props){
    console.log("props", props)
    if(props.image){
        return(
            <DialogPortal>
                <DialogOverlay className=" fixed inset-0 bg-black bg-opacity-50" />
                <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-4">
                    <img src={props.image} alt="" />
                </DialogContent>
            </DialogPortal>
        )
    }
}