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
import MapboxClient from "@mapbox/mapbox-sdk/services/directions";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../../lib/api";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { ModalUpdate } from "./ModalUpdate";
import { Modalimage } from "../Patology/Modalimage";
import Pagination from "@mui/material/Pagination";
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
import ModalUpdateInfomationMain from "./ModalUpdateInfomationMain";

export function SubReportsInformation(){
    const params = useParams()
    const [lock, setLock] = useState(false);
    const [dataReports, setDataReport] = useState([])
    const [dataPatologySubTrecho, setDataPatologySubTrecho] = useState([]);
    const [dataPatology, setDataPatology] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);


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
    
    useEffect(() =>{
        async function handleGetReports(){
            const token = window.localStorage.getItem("encibraapptoken-v2");
            const response = await api.get(`/reports/${params.reports}`,  {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            })
      
            setDataReport(response.data)
            setDataPatologySubTrecho(response.data.patology)
        }

        handleGetReports()
    }, [])

    
    useEffect(() => {
        async function getPatology() {
          const token = window.localStorage.getItem("encibraapptoken-v2");
          const patology = {};
    
          const response = await api.put(
            `/road/${params.id}/patology/null/findMany`,
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
              .filter((item) => item.videoId === Number(params.video) &&  item.reportId === null && item.km >= Number(dataReports.initialKm) && item.km  <= Number(dataReports.finalKm))
              .sort((a, b) => a.km - b.km)
          );
        }
        getPatology();
      }, [dataReports]);


     

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
            `/road/${params.id}/patology/${idPatology}/delete`,
            city,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          if (response.status === 200) {
            // function para deleter o imtem do array dataCity
            setDataPatologySubTrecho(
              dataPatologySubTrecho.filter((item) => item.id !== response.data.id)
            );
            window.alert("Patologia deletado com sucesso");
          }
        }
      }

    // juntar as duas patologis do sub trecho e a principal
    const arrayPatologyConcat = dataPatology.concat(dataPatologySubTrecho).sort((a, b) => a.km - b.km)
      
     // criar paginação
    function paginate(items, currentPage, itemsPerPage) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return items.slice(startIndex, endIndex);
    }

    const paginatedData = paginate(arrayPatologyConcat, currentPage, itemsPerPage);
    const totalPages = Math.ceil(arrayPatologyConcat.length / itemsPerPage);

    function goToPage(event, pageNumber) {
      setCurrentPage(pageNumber);
    }

    // mapa
    useEffect(() => {
        function getCoordenadas() {
            arrayPatologyConcat.map((item, index) => {
              
            if (index === 0) {
  
              setStartPatology({
                latitude: +item.latitude,
                longitude: +item.longitude,
              });
            }
            if (arrayPatologyConcat.length - 1 === index) {
              setEndPatology({
                latitude: +item?.latitude,
                longitude: +item?.longitude,
              });
            }
          });
        }
        getCoordenadas();
      }, [dataPatology]);

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
    setDataPoints(dataPoints.map(item => {
      if (item.id === object.id) {
        return object;
      }
      return item;
    })) 
  }


    
    if(arrayPatologyConcat){
        return(
            <section className="flex flex-col justify-center">
                <header className="flex justify-end ">
                    <NavLink
                        className="mb-2 flex items-center gap-1 hover:text-gold-400 hover:underline"
                        to={`/rodovias/videos/${params.id}/subtrecho/${params.video}/information/${params.reports}/register`}
                    >
                        <PlusCircle className="text-gold-400" size={22} />
                            Cadastrar patologia
                    </NavLink>
                </header>

                <div className=" flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
                  <div className="flex flex-col">
                      <strong className="py-2 text-text-100">
                          <span className="text-gray-400 tracking-wider mr-2">Trecho:</span>
                          {dataReports?.description}
                      </strong>
                      <strong className="py-2 text-text-100">
                          <span className="text-gray-400 tracking-wider mr-2">Km ínicial:</span>
                          {dataReports?.initialKm}
                      </strong>
                      <strong className="py-2 text-text-100">
                          <span className="text-gray-400 tracking-wider mr-2">Km final:</span>
                          {dataReports?.finalKm}
                      </strong>
                  </div>
                  <div>
                  <Dialog>
                      <DialogTrigger  className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                            <PencilLine size={18} />
                      </DialogTrigger >
                    <ModalUpdateInfomationMain data={dataReports} arrayUpdate={arrayUpdate}/>
                  </Dialog>
                  </div>
                </div>
    
                <table className="mt-4 table-auto w-full text-center shadow-lg ">
                    <thead>
                        <tr className="bg-gray-300">
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
                               {lock ?  <LockOpen size={18} /> : <Lock size={18} />}
                              </button>
                            </th>
                            <th>
                              <NavLink></NavLink>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData?.map((patology) =>{
                             const roadSide = JSON.parse(patology.roadSide);
                             const cracks = JSON.parse(patology.cracks);
                             const sags = JSON.parse(patology.sags);
                             const otherDefects = JSON.parse(patology.otherDefects);
                          return(
                            <tr className={`bg-${patology.reportId === null ? "white" : "gray-400"} hover:bg-gray-200 cursor-pointer border-b-2 border-gray-200`}>
                                <td className="p-2">
                                    {roadSide.BD && "BD "}
                                    {roadSide.BE && "BE "}
                                    {roadSide.EIXO && "EIXO "}
                                    {roadSide.PISTA && "PISTA "}
                                </td>
                                <td className="p-2">
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
                                <td className="p-2  w-48">
                                    <p className="truncate w-48">{patology.descrption}
                                    </p>
                                </td>
                                <td className="p-2">
                                    {patology.km}
                                </td>
                                <td className="p-2">
                                    {patology.videoTime}
                                </td>
                                <td className="p-2">
                                    {patology.latitude}
                                </td>
                                <td className="p-2">
                                    {patology.longitude}
                                </td>
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
                                            />
                                        </Dialog>
                                        ) : (
                                          <Dialog>
                                            <DialogTrigger className="">
                                              <Image size={24} color={"#E8E4E4"} />
                                            </DialogTrigger>
                                            
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
                          )  
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
                <div className="mb-5">
                <ReactMapGL
                  key={`${+startPatology.latitude}-${+startPatology.longitude}`}
                  initialViewState={{
                    latitude: +startPatology.latitude,
                    longitude: +startPatology.longitude,
                    zoom: 10,
                  }}
                  cooperativeGestures={true}
                  style={{ width: "100%", height: "500px", borderRadius: "6px" }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
                >
                   {/**Tra a rota dos pontos iniciais */}
                  <Marker
                    latitude={+startPatology.latitude}
                    longitude={+startPatology.longitude}
                    offsetLeft={-20}
                    offsetTop={-10}
                  >
                    <div className="marker" />
                  </Marker>
                  <Marker
                    latitude={+endPatology.latitude}
                    longitude={+endPatology.longitude}
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
                  {arrayPatologyConcat.map((item) =>{
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
                          {item.screenshotUrl !== "" && <MapPin className="text-sky-600 cursor-pointer" size={50} weight="duotone"/>}
                          {item.screenshotUrl === "" && <MapPin className="text-red-500 cursor-pointer" size={50} weight="duotone"/>}
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
            </section>
        )
    }
}