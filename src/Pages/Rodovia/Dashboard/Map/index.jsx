import MapboxClient from '@mapbox/mapbox-sdk/services/directions';
import { useEffect, useState } from 'react';
import ReactMapGL, {
  Marker,
  Source,
  Layer,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
  Map
} from "react-map-gl";
import { useNavigate } from 'react-router-dom';
import { api } from '../../../../lib/api';
import { MapPin } from '@phosphor-icons/react';
import ParaGeoJson from "../../../../GeoJson/Para.json";
import NR01 from "../../../../GeoJson/NR-01.json";

export function MapDashboard(){
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [start, setStart] = useState({ latitude: 0, longitude: 0});
  const [end, setEnd] = useState({ latitude: -0.5845891, longitude: -47.6525196 });
  const [route, setRoute] = useState(null);
  const [activeSigla, setActiveSigla] = useState(false);
  let strech = null;
  // faz a requisição ao banco de dados
  useEffect(() => {
    async function GetRoads() {
      const token = window.localStorage.getItem("encibraapptoken-v2");
      const response = await api.get("/road", {
        headers: { Authorization: "Bearer " + token },
      });
      setData(response.data);
    }
    GetRoads();
  }, []);

  const layerStylePara = {
    id: "maine0",
    type: "fill",
    source: "maine",
    layout: {},
    paint: {
      "fill-opacity": 0.1,
    },
  };


    return(
        <div className="mb-5">
        <Map
          initialViewState={{
            longitude: -53.066844,
            latitude:  -4.066257,
            zoom: 5
          }}
          cooperativeGestures={true}
          style={{width: '100%', height: '600px', borderRadius: "6px"}}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken="pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw"
        >
          
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
          {data.map((item, index) =>{
            strech = JSON.parse(item?.stretch);
            {activeSigla && <Marker
              key={index}
              latitude={Number(strech?.initialLatitude)}
              longitude={Number(strech?.initialLongitude)}
            >
            <div className="bg-white p-2 rounded-md cursor-pointer hover:bg-gray-200">
              <div onClick={() => {
              navigate(`/rodovias/information/${item.id}`);
            }} className="flex items-center text-sm  gap-1 rounded-md">
                <MapPin className="text-sky-600" weight="fill" size={24}/>
                {item?.acronym}
              </div>
            </div>
          </Marker>}
            return(
              <Marker
                    key={index}
                    latitude={Number(strech?.initialLatitude)}
                    longitude={Number(strech?.initialLongitude)}
                  >
                  <div className="bg-white p-2 rounded-md cursor-pointer hover:bg-gray-200">
                    <div onClick={() => {
                    navigate(`/rodovias/information/${item.id}`);
                  }} className="flex items-center text-sm  gap-1 rounded-md">
                      <MapPin className="text-sky-600" weight="fill" size={24}/>
                      {item?.acronym}
                    </div>
                  </div>
                </Marker>
            )
          })}


            <ul className="relative z-30">
              sigla
            </ul>


          <Source id="my-data11" type="geojson" data={ParaGeoJson}>
            <Layer {...layerStylePara} />
          </Source>

          

          <GeolocateControl position="top-right" />
          <FullscreenControl position="top-right" />
          <NavigationControl position="top-right" />
          <ScaleControl />
        </Map>
      </div>
    )
}