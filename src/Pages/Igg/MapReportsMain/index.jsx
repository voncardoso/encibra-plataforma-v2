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


export default function MapReportsMain(){
    const params = useParams();
    const { Roads, dataRoad, setIdReloadRoad } = useContext(UserContextRoad);
    const { pathname } = useLocation();
    const [dataReports, setDataReport] = useState([])

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

    
    useEffect(() => {
        Roads(params.id);
        setIdReloadRoad(params.id);
    }, [pathname]);

    useEffect(() => {
        function getCoordenadas() {
            dataRoad.patology?.map((item, index) => {
                console.log(index)
            if (index === 0) {
                console.log("teste",item)
              setStartPatology({
                latitude: +item.latitude,
                longitude: +item.longitude,
              });
            }
            if (dataRoad.patology.length - 1 === index) {
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


    return (
        <section className="flex items-center h-screen w-screen">
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