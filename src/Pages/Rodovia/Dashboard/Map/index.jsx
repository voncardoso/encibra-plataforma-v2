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
import { MagnifyingGlass, MapPin } from '@phosphor-icons/react';
import ParaGeoJson from "../../../../GeoJson/Para.json";


export function MapDashboard(){
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [start, setStart] = useState({ latitude: 0, longitude: 0});
  const [end, setEnd] = useState({ latitude: -0.5845891, longitude: -47.6525196 });
  const [route, setRoute] = useState(null);
  const [activeSigla, setActiveSigla] = useState(false);
  const [filteredRoad, setFilteredRoad] = useState([]);
  const [seach, setSeach] = useState("")
  const [activeName, setActiveName] = useState(true)
  let strech = null;
  console.log("teste")
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

  useEffect(() =>{
    if(seach.length > 0){
      setFilteredRoad(data.filter((item) => item.acronym.toLocaleUpperCase().includes(seach.toLocaleUpperCase())))
    }else if(seach.length === 0){
      setFilteredRoad([])
    }
  }, [seach])

  console.log("ativar nome", activeName)
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
          {filteredRoad.length === 0 ?
            data.map((item, index) =>{
            strech = JSON.parse(item?.stretch);

            {activeSigla && 
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
            }
            return(
              <Marker
                    key={index}
                    latitude={Number(strech?.initialLatitude)}
                    longitude={Number(strech?.initialLongitude)}
                  >
                  <div className=" rounded-md cursor-pointer hover:text-lg">
                    {activeName ? <div onClick={() => {
                      navigate(`/rodovias/information/${item.id}`);
                      }
                     } 
                     className="bg-white p-2 flex items-center text-sm  gap-1 rounded-md"
                    >
                      <MapPin className="text-sky-600" weight="fill" size={24}/>
                      {item?.acronym}
                    </div> 
                    : 
                    <div onClick={() => {
                      navigate(`/rodovias/information/${item.id}`);
                      }
                     } 
                     className="flex items-center text-sm  gap-1 rounded-md"
                    >
                      <MapPin className="text-sky-600" weight="fill" size={30}/>
                    </div>}
                  </div>
                </Marker>
            )
          }):
            filteredRoad.map((item, index) =>{
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


            
          <label className='flex items-center rounded-md relative z-20  w-44 m-4 mb-2 bg-white text-base'>
            <input  
              className='p-2 w-full rounded-md focus:outline-none' 
              type="text" 
              placeholder='Buscar rodovia'
              value={seach}
              onChange={(event) => setSeach(event.target.value)}
            />
            <MagnifyingGlass className='relative z-40 mr-2 text-gray-400' size={30}/>
          </label>
               
            
          <ul className="flex rounded-md gap-2 items-center relative z-30 bg-white z-20 p-4 w-44 m-4 mt-0">
            <input  
              className=" rounded-md focus:outline-none" 
              type="checkbox" 
              placeholder='Buscar rodovia'
              defaultChecked={activeName}
              onChange={(event) =>{
                activeName ? setActiveName(false) : setActiveName(true)
              }}
            />
            <strong>Nome da Rodovia</strong>
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