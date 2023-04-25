import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { useNavigate, useParams } from "react-router-dom";

export const UserContextRoad = createContext();

export const UserStorageRoad = ({ children }) => {
  const [dataRoad, setDataRoad] = useState([]);
  const [dataRoadCity, setDataRoadCity] = useState([]);

  async function Roads(id) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.get(`/road/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setDataRoad(response.data);
  }

  async function RoadsCity(id) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const response = await api.get(`/road/${id}/city/null/findMany`, {
      headers: { Authorization: "Bearer " + token },
    });

    console.log(response);
    setDataRoadCity(response.data);
  }

  return (
    <UserContextRoad.Provider
      value={{ Roads, dataRoad, RoadsCity, dataRoadCity }}
    >
      {children}
    </UserContextRoad.Provider>
  );
};
