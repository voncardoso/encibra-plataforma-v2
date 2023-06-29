import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  HouseLine,
  Image,
  Lock,
  LockOpen,
  MapPin,
  PencilLine,
  PlusCircle,
  TrashSimple,
} from "@phosphor-icons/react";
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
import MapboxClient from "@mapbox/mapbox-sdk/services/directions";
import { api } from "../../../lib/api";
import Pagination from "@mui/material/Pagination";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Modalimage } from "./Modalimage";
import { ModalUpdate } from "./ModalUpdate";
import { UserContextRoad } from "../../../Context/useContextRoad";

export function Patology() {
  const { dataRoad } = useContext(UserContextRoad);
  const params = useParams();
  const [dataPatology, setDataPatology] = useState([]);
  const { id, video } = useParams();
  const [lock, setLock] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // variavel mapa
  const [showPopup, setShowPopup] = useState(null);
  const [viewport, setViewport] = useState();
  const [route, setRoute] = useState(null);
  const [routePatology, setRoutePatology] = useState(null);
  const [start, setStart] = useState({ latitude: 0, longitude: 0 });
  const [end, setEnd] = useState({ latitude: 0, longitude: 0 });
  const [startPatology, setStartPatology] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [endPatology, setEndPatology] = useState({ latitude: 0, longitude: 0 });
  const [dataStrech, setDataStrech] = useState({});
  const directionsClient = MapboxClient({
    accessToken:
      "pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw",
  });
  const directionsClient1 = MapboxClient({
    accessToken:
      "pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw",
  });

  let strech = null;
  if (dataRoad.stretch) {
    strech = JSON.parse(dataRoad?.stretch);
  }

  useEffect(() => {
    async function getPatology() {
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const patology = {};

      const response = await api.put(
        `/road/${id}/patology/null/findMany`,
        patology,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // function filtrar as patologias
      setDataPatology(
        response.data
          .filter((item) => item.videoId === Number(video) &&  item.reportId === null )
          .sort((a, b) => a.km - b.km)
      );
    }
    getPatology();
  }, []);

  //function para redenrizar o traçado da rodovia
  useEffect(() => {
    function getSrech() {
      setDataStrech(strech);

      // setando a localização inicial e final da rodovias
      setStart({
        latitude: +strech?.initialLatitude,
        longitude: +strech?.initialLongitude,
      });
      setEnd({
        latitude: +strech?.endLatitude,
        longitude: +strech?.endLongitude,
      });
    }

    getSrech();
  }, [dataRoad, params.id]);


  useEffect(() => {
    function getCoordenadas() {
      dataPatology.map((item, index) => {
        if (index === 0) {
          setStartPatology({
            latitude: +item?.latitude,
            longitude: +item?.longitude,
          });
        }
        if (dataPatology.length - 1 === index) {
          setEndPatology({
            latitude: +item?.latitude,
            longitude: +item?.longitude,
          });
        }
      });
    }
    getCoordenadas();
  }, [dataRoad, strech]);

  //function para redenrizar o traçado da rodovia
  useEffect(() => {
    directionsClient
      .getDirections({
        profile: "driving",
        waypoints: [
          { coordinates: [startPatology.longitude, startPatology.latitude] },
          { coordinates: [endPatology.longitude, endPatology.latitude] },
        ],
        geometries: "geojson",
      })
      .send()
      .then((response) => {
        setRoute(response.body.routes[0]);
        setViewport({
          ...viewport,
          latitude: +`${startPatology.latitude}`,
          longitude: +`${startPatology.longitude}`,
          zoom: 8,
          bearing: 0,
          pitch: 0,
        });
      });
  }, [startPatology]);

  function arrayUpdate(object){
    const newArray = [...dataPatology];
    const index = newArray.findIndex(item => item.id === object.id)

    if (index !== -1) {
      // Substitua o objeto no novo array
      newArray[index] = object;
    }

    setDataPatology(newArray)
  }

  function handleLock() {
    if (lock === true) {
      setLock(false);
    } else {
      setLock(true);
    }
  }

  async function deletePatology(idPatology) {
    const token = window.localStorage.getItem("encibraapptoken-v2");
    const city = {};

    const result = window.confirm("Certeza que deseja deletar a patologia? ");

    if (result) {
      const response = await api.put(
        `/road/${id}/patology/${idPatology}/delete`,
        city,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      

      if (response.status === 200) {
        // function para deleter o imtem do array dataCity
        setDataPatology(
          dataPatology.filter((item) => item.id !== response.data.id)
        );
        window.alert("Muncípio deletado com sucesso");
      }
    }
  }

  // criar paginação
  function paginate(items, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }

  const paginatedData = paginate(dataPatology, currentPage, itemsPerPage);
  const totalPages = Math.ceil(dataPatology.length / itemsPerPage);

  function goToPage(event, pageNumber) {

    setCurrentPage(pageNumber);
  }

  return (
    <div className="mt-5 flex flex-col justify-center">
      <header className="flex justify-end ">
        <NavLink
          className="mb-5 flex items-center gap-1 hover:text-gold-400 hover:underline"
          to={`/rodovias/videos/${id}/patology/${video}/register`}
        >
          <PlusCircle className="text-gold-400" size={22} />
          Cadastrar Patologia
        </NavLink>
      </header>
      <table className="table-auto w-full text-center ">
        <thead>
          <tr className="bg-gray-300 ">
            <th className="p-2 rounded-ss-md">Lado</th>
            <th className="p-2">Tipo</th>
            <th className="p-2">Descrição</th>
            <th className="p-2">Km</th>
            <th className="p-2">Min</th>
            <th className="p-2">Latitude</th>
            <th className="p-2">Longitude</th>
            <th className="p-2 flex justify-end">
              <button
                className=" text-sm  items-center justify-items-end gap-1 p-1 text-sm text-text-100 border rounded border-text-100 hover:bg-text-100 hover:text-white"
                onClick={handleLock}
              >
                {lock ? <LockOpen size={18} /> : <Lock size={18} />}
              </button>
            </th>
            <th>
              <NavLink></NavLink>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.map((patology) => {
            const roadSide = JSON.parse(patology.roadSide);
            const cracks = JSON.parse(patology.cracks);
            const sags = JSON.parse(patology.sags);
            const otherDefects = JSON.parse(patology.otherDefects);

            return (
              <tr
                key={patology.id}
                className=" bg-white hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200"
              >
                <td className="p-2  ">
                  {roadSide.BD && "BD "}
                  {roadSide.BE && "BE "}
                  {roadSide.EIXO && "EIXO "}
                  {roadSide.PISTA && "PISTA "}
                </td>
                <td className="p-2  ">
                  {sags.ALC && "ALC "}
                  {sags.ALP && "ALP "}
                  {sags.ATC && "ATC "}
                  {sags.ATP && "ATP "}
                  {otherDefects.D && "D "}
                  {otherDefects.E && "E "}
                  {otherDefects.EX && "EX "}
                  {otherDefects.O && "O "}
                  {otherDefects.P && "P "}
                  {otherDefects.R && "R "}
                  {cracks.FI && "FI "}
                  {cracks.J && "J "}
                  {cracks.JE && "JE "}
                  {cracks.TB && "TB "}
                  {cracks.TBE && "TBE "}
                  {cracks.TLC && "TLC "}
                  {cracks.TTL && "TTL "}
                  {cracks.TRR && "TRR "}
                  {cracks.TTC && "TTC "}
                  {cracks.TLL && "TLL "}
                </td>
                <td className="p-2  w-48 ">
                  <p className="truncate w-48">{patology.descrption}</p>
                </td>
                <td className="p-2  ">{patology.km}</td>
                <td className="p-2  ">{patology.videoTime}</td>
                <td className="p-2  ">{patology.latitude}</td>
                <td className="p-2  ">{patology.longitude}</td>
                <td className="p-2">
                  <div className="flex justify-end gap-4 items-center h-auto">
                    <Dialog>
                      <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                        <PencilLine size={18} />
                      </DialogTrigger>
                      <ModalUpdate
                        data={patology}
                        roadSide={roadSide}
                        cracks={cracks}
                        sags={sags}
                        otherDefects={otherDefects}
                        id={patology.id}
                        arrayUpdate={arrayUpdate}
                      />
                    </Dialog>

                    {patology.screenshotUrl ? (
                      <Dialog>
                        <DialogTrigger className="">
                          <Image size={24} color={"#56A899"} />
                        </DialogTrigger>
                        <Modalimage
                          image={patology.screenshotUrl}
                          id={patology.id}
                          arrayUpdate={arrayUpdate}
                        />
                      </Dialog>
                    ) : (
                      <Dialog>
                        <DialogTrigger className="">
                          <Image size={24} color={"#6b7280"} />
                        </DialogTrigger>
                        <Modalimage
                          image={patology.screenshotUrl}
                          id={patology.id}
                          arrayUpdate={arrayUpdate}
                        />
                      </Dialog>
                    )}
                    {lock && (
                      <TrashSimple
                        size={24}
                        color={"#e64a33"}
                        onClick={() => {
                          deletePatology(patology.id);
                        }}
                      />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
          <tr className=" bg-gray-300 border-b-2 border-gray-200 ">
            <td colSpan={9} className="p-2 rounded-ee-md rounded-es-md"></td>
          </tr>
        </tbody>
      </table>
      <div className="mx-auto flex items-center">
        <Pagination
          className="mt-2.5 mb-3"
          count={totalPages}
          onChange={goToPage}
          shape="rounded"
        />
      </div>
      {strech || startPatology.latitude ? (
        <div className="mb-5">
          <ReactMapGL
            key={`${+start?.latitude}-${+start?.longitude}`}
            initialViewState={{
              latitude: +strech?.initialLatitude,
              longitude: +strech?.initialLongitude,
              zoom: 8,
            }}
            cooperativeGestures={true}
            style={{ width: "100%", height: "500px", borderRadius: "6px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
          >
             {/**Tra a rota dos pontos iniciais */}
            <Marker
              latitude={+strech?.initialLatitude}
              longitude={+strech?.initialLongitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div className="marker" />
            </Marker>
            <Marker
              latitude={+strech?.endLatitude}
              longitude={+strech?.endLongitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div className="marker" />
            </Marker>

           
            {route && (
              <Source type="geojson" data={route.geometry}>
                <Layer
                  id="route"
                  type="line"
                  paint={{ "line-color": "#0070f3", "line-width": 4 }}
                />
              </Source>
            )}

            {/**Mostrar a imagem ao clicar no pin correspondente */}
            {dataPatology.map((item) =>{
              return(
                <section key={item.id}>
                  <Marker
                    latitude={+item?.latitude}
                    longitude={+item?.longitude}
                    anchor="bottom"
                    closeButton={(e) => setShowPopup(false)}
                    onClick={(e) => {
                      e.originalEvent.stopPropagation();
                        setShowPopup(item);
                        
                    }}
                  >
                    {item.screenshotUrl !== "" && item.observation === "" && <MapPin className="text-sky-600 cursor-pointer" size={50} weight="duotone"/>}
                    {item.screenshotUrl === "" && item.observation === "" && <MapPin className="text-red-500 cursor-pointer" size={50} weight="duotone"/>}
                    {item.observation === "Vila" && <HouseLine className="text-emerald-500 cursor-pointer" size={50} weight="duotone"/>}
                  </Marker>
                </section>
              )
            })}

            {showPopup && 
            <Popup
              longitude={showPopup.longitude}
              latitude={showPopup.latitude}
              anchor="center"
              onClose={(e) => {
                setShowPopup(null);
              }}
              maxWidth={"60vw"}
            >
              {showPopup.screenshotUrl ? 
                <img src={showPopup.screenshotUrl} alt="" /> 
                : 
                <h1 className="text-4xl">
                  {showPopup.km} km   
                </h1>
              }
            </Popup>}

            {/**controle dos mapa  */}
            <div className="m-2 p-2 relative z-10 bg-white w-52 rounded-md">
                  <ul>
                    <li className="p-2 flex items-center gap-2 text-sm font-medium">
                      <MapPin weight="duotone" className="text-sky-600" size={22}/>
                     Com imagem
                    </li>
                    <li className="p-2 flex items-center gap-2 text-sm font-medium ">
                      <MapPin weight="duotone" className="text-red-500"  size={22}/>
                      Sem Imagem
                    </li>
                    <li className="p-2 flex items-center gap-2 text-sm">
                      <HouseLine className="text-emerald-500" weight="duotone" size={22}/>
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
      ): ""}
    </div>
  );
}
