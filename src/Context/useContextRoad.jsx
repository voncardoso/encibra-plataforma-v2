import { createContext, useEffect, useState } from "react";
import { api } from "../lib/api";
import { useLocation, useParams } from "react-router-dom";

export const UserContextRoad = createContext();

export const UserStorageRoad = ({ children }) => {
  const params = useParams();
  const [dataRoad, setDataRoad] = useState([]);
  const [dataRoadCity, setDataRoadCity] = useState([]);
  const {pathname} = useLocation();
  const [idReloadRoad, setIdReloadRoad] = useState()
  const token = window.localStorage.getItem("encibraapptoken-v2");

  useEffect(() => {
    async function roadGetReaload(){
      console.log("foi reload", idReloadRoad)
      const response = await api.get(`/road/${idReloadRoad}`, {
        headers: { Authorization: "Bearer " + token },
      });
      setDataRoad(response.data);
    }
    roadGetReaload()
  },[pathname])

  async function Roads(id) {
    const response = await api.get(`/road/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    setDataRoad(response.data);
  }

  return (
    <UserContextRoad.Provider value={{ Roads, dataRoad, dataRoadCity, setDataRoad, setIdReloadRoad }}>
      {children}
    </UserContextRoad.Provider>
  );
};
