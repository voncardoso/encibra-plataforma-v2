import { createContext, useState } from "react";
import { api } from "../lib/api";
import { useNavigate } from "react-router-dom";

export const UserContextLogin = createContext();

export const UserStorageLogin = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function userLogin() {
    try {
      console.log("context");
      const data = {
        email: "teste.seguranca3@example.com",
        password: "securepassword",
      };
      const response = await api.post("/auth/login", data);
      console.log(response);
    } catch {
    } finally {
    }
  }

  return (
    <UserContextLogin.Provider value={{ userLogin }}>
      {children}
    </UserContextLogin.Provider>
  );
};
