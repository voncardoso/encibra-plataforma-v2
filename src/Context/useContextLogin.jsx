import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export const UserContextLogin = createContext();

export const UserStorageLogin = ({ children }) => {
  const [validateTokenLogin, setValidateTokenLogin] = useState(false);
  const [errorAuth, setErrorAuth] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [dataUser, setDataUser] = useState({})
  const navigate = useNavigate();

  async function autoLogin(){
    const token = window.localStorage.getItem('encibraapptoken-v2');
    if(token){
        try{
          const response = await api.post("/auth/validate-token", {
            token: `${token}`
          });
          if(response.status === 200){
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
          window.localStorage.setItem("encibraappId-v2", response.data.id)
          setDataUser(response.data)
          navigate('/rodovias')
          setErrorAuth(false)
        }else{
          setLoadingAuth(false)
        }
      } catch {
        setErrorAuth(true)
      } finally {
        
      }
    }
  }

  async function getUserId(){
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const id = window.localStorage.getItem("encibraappId-v2");
    const response = await api.get(`/users/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
      
    setDataUser(response.data)
  }

  return (
    <UserContextLogin.Provider value={{autoLogin, userLogin, errorAuth, loadingAuth, validateTokenLogin, dataUser, getUserId }}>
      {children}
    </UserContextLogin.Provider>
  );
};
