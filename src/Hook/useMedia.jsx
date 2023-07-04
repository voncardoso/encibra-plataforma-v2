import { useEffect, useState } from "react";

export function useMedia(){
    const [match, setMatch] = useState(null);

    useEffect(() =>{
        function changeMacth(){
            var altura = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            setMatch(altura);
        }
        changeMacth();
        window.addEventListener('resize', changeMacth);

        return() =>{
            window.removeEventListener('risize', changeMacth);
        };
    }, [])
    return match;
}