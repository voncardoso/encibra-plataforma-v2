import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { UserContextLogin } from "../../Context/useContextLogin"

export function PrivateRoutes({children}){
    const {autoLogin, validateTokenLogin} = useContext(UserContextLogin)
    const token = window.localStorage.getItem('encibraapptoken-v2');

    useEffect(() =>{
        autoLogin()
    }, [])


 
    if(validateTokenLogin){
        return validateTokenLogin ? children : <Navigate to="/"/>
    }
}