import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { ModalCreate } from "./ModalCreate";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import {
  PlusCircle,
  TrashSimple,
  Lock,
  PencilLine,
  LockOpen,
  Bridge,
  Buildings,
  Bookmarks,
  HouseLine
} from "@phosphor-icons/react";
import { ModalUpdate } from "./ModalUpdate";
import { api } from "../../../lib/api";
import Pagination from '@mui/material/Pagination';
import MapboxClient from '@mapbox/mapbox-sdk/services/directions';
import ReactMapGL, {
  Marker,
  Source,
  Layer,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
  Popup,
  Map,
} from "react-map-gl";
import Barco from "../../../assets/Balsa.png"

export function Points() {
  const { dataRoad } = useContext(UserContextRoad);
  const params = useParams();
  const [lock, setLock] = useState(false);
  const [dataPoints, setDataPoints] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [route, setRoute] = useState(null);
  const [start, setStart] = useState({ latitude: 0, longitude: 0});
  const [end, setEnd] = useState({ latitude: 0, longitude: 0 });
  const [dataStrech, setDataStrech] = useState({})
  const {pathname} = useLocation();
  const directionsClient = MapboxClient({ accessToken: "pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw" });
  const [viewport, setViewport] = useState({
    latitude: start.latitude ,
    longitude: start.longitude,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });
  let strech = null;

  useEffect(() =>{
    function getCity(){
      setDataPoints(dataRoad.points)
    }  
    getCity();
  }, [dataRoad])

  if (dataRoad.stretch) {
    strech = JSON.parse(dataRoad?.stretch);
  }

  //function para redenrizar o traçado da rodovia
  useEffect(() =>{
    function getSrech(){
      setDataStrech(strech)

      // setando a localização inicial e final da rodovias
      setStart({
        latitude: +strech?.initialLatitude,
        longitude: +strech?.initialLongitude
      })
      setEnd({
        latitude: +strech?.endLatitude,
        longitude: +strech?.endLongitude
      })
    }  

    getSrech();
  }, [dataRoad, params.id])
 //function para redenrizar o traçado da rodovia
  useEffect(() => {
    directionsClient.getDirections({
     profile: 'driving',
     waypoints: [
       { coordinates: [start.longitude, start.latitude] },
       { coordinates: [end.longitude, end.latitude] }
     ],
     geometries: 'geojson'
   }) 
   .send()
   .then(response => {
     setRoute(response.body.routes[0]);
     setViewport({
       ...viewport,
       latitude: +`${start.latitude}`,
       longitude: +`${start.longitude}`,
       zoom: 8,
        bearing: 0,
        pitch: 0,

     });
   });
   }, [start, pathname]);


  function handleLock() {
    if (lock === true) {
      setLock(false);
    } else {
      setLock(true);
    }
  }

  function arrayCretae(object){
    setDataPoints([...dataPoints, object])  
  }

  function arrayUpdate(object){
    setDataPoints(dataPoints.map(item => {
      if (item.id === object.id) {
        return object;
      }
      return item;
    })) 
  }

  async function deletePoint(id) {
    console.log();
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const points = {};

    const result = window.confirm("Certeza que deseja deletar o ponto? ");

    if (result) {
      const response = await api.put(
        `/road/${params.id}/points/${id}/delete`,
        points,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if(response.status === 200){
        setDataPoints(dataPoints.filter(item => item.id !== response.data.id))
        window.alert("Ponto deletado com sucesso");
      }
    }
  }

  // criar paginação
  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if(items){
      return items.slice(startIndex, endIndex);
    }
  }
  const paginatedData = paginate(dataPoints, currentPage, itemsPerPage);
  const totalPages = Math.ceil(dataPoints?.length / itemsPerPage);
  
  function goToPage(event, pageNumber) {
    console.log("",pageNumber)
    setCurrentPage(pageNumber);
  }

  if (dataPoints) {
    return (
      <>
        {dataPoints.length !== 0 ? (
          <section className="mt-5">
            <div className="pr-5 flex flex-col">
              <table className="w-full text-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Tipo</th>
                    <th className="p-2">Descrição</th>
                    <th className="p-2">Km</th>
                    <th className="p-2">Latitude</th>
                    <th className="p-2">Longitude</th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog >
                          <DialogTrigger  className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
                            <PlusCircle size={18} />
                            <p className="">Inserir</p>
                          </DialogTrigger>
                          <ModalCreate arrayCretae={arrayCretae}/> 
                          
                        </Dialog>
                      ) : (
                        ""
                      )}
                      <button
                        className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                        onClick={handleLock}
                      >
                        {lock ? <LockOpen size={18} /> : <Lock size={18} />}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((point) => {
                    return (
                      <tr key={point.id} className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                        <td className="p-2">{point.type}</td>
                        <td className="p-2">{point.description}</td>
                        <td className="p-2">{point.kilometer}</td>
                        <td className="p-2">{point.latitude}</td>
                        <td className="p-2">{point.longitude}</td>

                        <td className="p-2 flex justify-end gap-3">
                          <div className="flex justify gap-3">
                            {lock ? (
                              <>

                             <Dialog >
                                <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                                  <PencilLine size={18} />
                                </DialogTrigger>
                                  <ModalUpdate data={point} arrayUpdate={arrayUpdate}/>
                                </Dialog>   
                                <button
                                  className="flex  text-sm justify-center items-center gap-1 p-1 text-sm text-red-500 border rounded border-red-500 hover:bg-red-500 hover:text-white"
                                  onClick={() => {
                                    deletePoint(point.id);
                                  }}
                                >
                                  <TrashSimple size={18} />
                                </button>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
                    <td
                      colSpan={7}
                      className="p-2 rounded-ee-md rounded-es-md"
                    ></td>
                  </tr>
                </tbody>
              </table>
              <div className="mx-auto flex items-center mb-5">
                <Pagination className="mt-2.5" count={totalPages} onChange={goToPage}  shape="rounded" />
            </div>
            <div className="mb-5">
              <ReactMapGL
                   key={`${dataPoints[0]?.latitude}-${dataPoints[0]?.longitude}`}
                   initialViewState={{
                    latitude: +dataPoints[0]?.latitude,
                    longitude: +dataPoints[0]?.longitude,
                    zoom: 10
                  }}
                  cooperativeGestures={true}
                  
                  style={{width: '100%', height: '500px', borderRadius: "6px"}}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
              >
                {dataPoints.map((marker, index) =>{
                 return(
                  <Marker
                    key={index}
                    latitude={Number(marker.latitude)}
                    longitude={Number(marker.longitude)}
                  >
                  <div className="bg-white p-2">
                   
                    {marker.type === "Vila" && 
                      <div className="flex items-center text-sm  gap-1 rounded-md">
                        <HouseLine className="text-emerald-500" weight="fill" size={20}/>
                        {marker.description}
                      </div>
                      || 
                      marker.type === "Ponte" && 
                        <div className="flex items-center text-sm  gap-1 rounded-md">
                          <Bridge className="text-orange-500" weight="fill" size={20}/> 
                          {marker.description}
                        </div>
                      || 
                      marker.type === "Divisa entre municípios" && 
                        <div className="flex items-center text-sm  gap-1 rounded-md">
                          <Bookmarks  className="text-indigo-500" weight="fill"size={20}/> 
                          {marker.description}
                        </div>
                      || 
                      marker.type === "Sede do município" && 
                        <div className="flex items-center text-sm  gap-1 rounded-md">
                           <Buildings className="text-sky-600" weight="fill" size={20}/> 
                          {marker.description}
                        </div>
                      || 
                      marker.type === "Travessia de balsa" && 
                        <span className="flex items-center text-sm  gap-1 rounded-md">
                           <img className="w-5" src={Barco} alt="" /> 
                          {marker.description}
                        </span>
                    }
                  </div>
                </Marker>
                 )
                })}

                  <Marker latitude={start.latitude} longitude={start.longitude} offsetLeft={-20} offsetTop={-10}>
                    <div className="marker" />
                  </Marker>
                  <Marker latitude={end.latitude} longitude={end.longitude} offsetLeft={-20} offsetTop={-10}>
                    <div className="marker" />
                  </Marker>
                  {route && (
                    <Source type="geojson" data={route.geometry}>
                      <Layer
                        id="route"
                        type="line"
                        paint={{ 'line-color': '#0070f3', 'line-width': 4 }}
                      />
                    </Source>
                  )}

                <div className="m-2 p-2 relative z-10 bg-white w-52 rounded-md">
                  <ul>
                    <li className="p-2 flex items-center gap-2 text-sm font-medium">
                      <Bookmarks  className="text-indigo-500" weight="fill"size={22}/>
                      Divisa entre municípios
                    </li>
                    <li className="p-2 flex items-center gap-2 text-sm font-medium ">
                      <Bridge className="text-orange-500" weight="fill" size={22}/>
                      Ponte
                    </li>
                    <li className="p-2 flex items-center gap-2 text-sm font-medium">
                      <Buildings className="text-sky-600" weight="fill" size={22}/>
                      Sede do município
                    </li>
                    <li className="p-2 flex items-center gap-2 text-sm font-medium">
                      <img className="w-5" src={Barco} alt="" />
                      Travessia de balsa
                    </li>
                    <li className="p-2 flex items-center gap-2 text-sm">
                      <HouseLine className="text-emerald-500" weight="fill" size={22}/>
                      Vila
                    </li>
                  </ul>
                </div>

                <GeolocateControl position="top-right" />
                <FullscreenControl position="top-right" />
                <NavigationControl position="top-right" />
                <ScaleControl />
                
              </ReactMapGL>
            </div>
            </div>
          </section>
        ) : (
          <section className="mt-5">
            <div className="pr-5">
              <table className="w-full text-sm-center ">
                <thead>
                  <tr className="bg-gray-300 ">
                    <th className="p-2 rounded-ss-md">Tipo</th>
                    <th className="p-2">Descrição</th>
                    <th className="p-2">Km</th>
                    <th className="p-2">Latitude</th>
                    <th className="p-2">Longitude</th>
                    <th className=" p-2 rounded-se-md text-center flex gap-3 justify-end">
                      {lock ? (
                        <Dialog >
                        <DialogTrigger  className="flex justify-center items-center gap-1 p-1 text-sm text-gold-400 border rounded border-gold-400 hover:bg-gold-400 hover:text-white">
                          <PlusCircle size={18} />
                          <p className="">Inserir</p>
                        </DialogTrigger>
                        <ModalCreate arrayCretae={arrayCretae}/> 
                        
                      </Dialog>
                      ) : (
                        ""
                      )}
                      <button
                        className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                        onClick={handleLock}
                      >
                        {lock ? <LockOpen size={18} /> : <Lock size={18} />}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200">
                    <td colSpan={6} className="p-4">
                      Não possui pontos cadastrados
                    </td>
                  </tr>

                  <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
                    <td
                      colSpan={7}
                      className="p-2 rounded-ee-md rounded-es-md"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </>
    );
  }
}
