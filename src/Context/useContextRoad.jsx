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

  async function RoadsCity(id) {
  const city ={

  }
    const response = await api.put(`/road/${id}/city/null/findMany`, city , {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    setDataRoadCity(response.data);
  }

  async function RoadsPoints(id) {
    const response = await api.put(`/road/${26}/points/null/findMany`, {
      headers: { Authorization: "Bearer " + token },
    });

    setDataRoadCity(response.data);
  }

  console.log(dataRoad.city)

  return (
    <UserContextRoad.Provider
      value={{ Roads, dataRoad, RoadsCity, dataRoadCity }}
    >
      {children}
    </UserContextRoad.Provider>
  );
};
