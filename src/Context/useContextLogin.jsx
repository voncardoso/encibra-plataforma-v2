import { createContext, useState } from "react";
import { api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export const UserContextLogin = createContext();

export const UserStorageLogin = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [errorAuth, setErrorAuth] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const navigate = useNavigate();

  async function userLogin(email, password) {
    console.log(email, password)
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

  return (
    <UserContextLogin.Provider value={{ userLogin, errorAuth, loadingAuth }}>
      {children}
    </UserContextLogin.Provider>
  );
};
