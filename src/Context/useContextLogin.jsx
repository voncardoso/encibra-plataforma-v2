import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export const UserContextLogin = createContext();

export const UserStorageLogin = ({ children }) => {
  const [validateTokenLogin, setValidateTokenLogin] = useState(false);
  const [errorAuth, setErrorAuth] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const navigate = useNavigate();

  async function autoLogin(){
    const token = window.localStorage.getItem('encibraapptoken-v2');
    if(token){
        try{
          const response = await api.post("/auth/validate-token", {
            token: `${token}`
          });
          if(response.status === 200){
            navigate('/rodovias')
            setValidateTokenLogin(true)
          }
        }catch(err){
          setValidateTokenLogin(false)
          window.localStorage.removeItem('encibraapptoken-v2');
        }
    }   
  }

  async function userLogin(email, password) {
    if(email){
      try {
        setLoadingAuth(true)
        const data = {
          email: `${email}`,
          password: `${password}`,
        };
        const response = await api.post("/auth/login", data);
        if(response.status === 200){
          window.localStorage.setItem("encibraapptoken-v2", response.data.token)
          navigate('/rodovias')
          setErrorAuth(false)
        }else{
          console.log("error")
          setLoadingAuth(false)
        }
      } catch {
        console.log("error")
        setErrorAuth(true)
      } finally {
        
      }
    }
  }

  return (
    <UserContextLogin.Provider value={{autoLogin, userLogin, errorAuth, loadingAuth, validateTokenLogin }}>
      {children}
    </UserContextLogin.Provider>
  );
};
