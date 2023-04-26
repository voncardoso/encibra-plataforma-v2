import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { json, useNavigate, useParams } from "react-router-dom";

export const UserContextRoad = createContext();

export const UserStorageRoad = ({ children }) => {
  const [dataRoad, setDataRoad] = useState([]);
  const [dataRoadCity, setDataRoadCity] = useState([]);
  const token = window.localStorage.getItem("encibraapptoken-v2");

  async function Roads(id) {
    const response = await api.get(`/road/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setDataRoad(response.data);
  }

  console.log("contexto", dataRoad);
  return (
    <UserContextRoad.Provider value={{ Roads, dataRoad, dataRoadCity }}>
      {children}
    </UserContextRoad.Provider>
  );
};
