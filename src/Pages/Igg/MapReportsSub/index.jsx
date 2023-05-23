import { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContextRoad } from "../../../Context/useContextRoad";
import MapboxClient from "@mapbox/mapbox-sdk/services/directions";
import { useEffect } from "react";
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
import { api } from "../../../lib/api";


export default function MapReportsSub(){
    const params = useParams();
    const { Roads, dataRoad, setIdReloadRoad } = useContext(UserContextRoad);
    const { pathname } = useLocation();
    const [dataReports, setDataReport] = useState([])
    const [dataPatologySubTrecho, setDataPatologySubTrecho] = useState([]);

    // variavel mapa
    const [showPopup, setShowPopup] = useState(null);
    const [viewport, setViewport] = useState();
    const [route, setRoute] = useState(null);
    const [startPatology, setStartPatology] = useState({
        latitude: 0,
        longitude: 0,
      });
      const [endPatology, setEndPatology] = useState({ latitude: 0, longitude: 0 });
      const directionsClient = MapboxClient({
          accessToken:
            "pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw",
        });
        const DataIgg = dataRoad.iggs?.filter((igg) => igg.id === Number(params.igg));
        const DataVideo = dataRoad.videos?.filter(
          (video) => video.id === Number(DataIgg[0].videoId)
        );
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
  
      const DataPatology = dataRoad.patology
      ?.filter((patologys) => patologys.videoId === DataVideo[0].id &&  patologys.reportId === null && patologys.km >= Number(dataReports.initialKm) && patologys.km  <= Number(dataReports.finalKm))
      .sort((a, b) => a.km - b.km).concat(dataPatologySubTrecho).sort((a, b) => a.km - b.km);

    
    useEffect(() => {
        Roads(params.id);
        setIdReloadRoad(params.id);
    }, [pathname]);

    useEffect(() => {
        function getCoordenadas() {
          DataPatology?.map((item, index) => {
                console.log(index)
            if (index === 0) {
                console.log("teste",item)
              setStartPatology({
                latitude: +item.latitude,
                longitude: +item.longitude,
              });
            }
            if (DataPatology.length - 1 === index) {
              setEndPatology({
                latitude: +item?.latitude,
                longitude: +item?.longitude,
              });
            }
          });
        }
        getCoordenadas();
      }, [dataRoad]);

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

      console.log("data patology", DataPatology)
    return (
        <section style={{width: "1094px", height: "760px"}} className="m-auto h-auto flex items-center">
            <ReactMapGL
                key={`${+startPatology.latitude}-${+startPatology.longitude}`}
                initialViewState={{
                    latitude: +startPatology.latitude,
                    longitude: +startPatology.longitude,
                    zoom: 11,
                  }}
                cooperativeGestures={true}
                mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
                mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
                style={{height: "790px", padding:"20px", borderRadius: "6px" }}
            >
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
            </ReactMapGL>
        </section>
    )
}