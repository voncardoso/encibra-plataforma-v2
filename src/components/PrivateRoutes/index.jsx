import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { UserContextLogin } from "../../Context/useContextLogin"

export function PrivateRoutes({children}){
    const {autoLogin, validateTokenLogin} = useContext(UserContextLogin)

    useEffect(() =>{
        autoLogin()
    }, [])


    return validateTokenLogin ? children : <Navigate to="/"/>
}