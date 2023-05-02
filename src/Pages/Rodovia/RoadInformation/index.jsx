import { useContext, useEffect, useState } from "react";
import { UserContextRoad } from "../../../Context/useContextRoad";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { PencilLine } from "@phosphor-icons/react";
import { ModalUpdate } from "./ModalUpdate";
import { ModalUpdateCoordinates } from "./ModalUpdateCoordinates";


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
  Map
} from "react-map-gl";
import { useLocation, useParams } from 'react-router-dom';


export function RoadInformation() {
  const { dataRoad } = useContext(UserContextRoad);
  const [dataInformation, setDataInformation] = useState({})
  const [dataStrech, setDataStrech] = useState({})
  const {pathname} = useLocation();
  const params = useParams()  
  const directionsClient = MapboxClient({ accessToken: "pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw" });
  const [start, setStart] = useState({ latitude: 0, longitude: 0});
  const [end, setEnd] = useState({ latitude: 0, longitude: 0 });
  const [route, setRoute] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: start.latitude ,
    longitude: start.longitude,
    zoom: 3.5,
    bearing: 0,
    pitch: 0
  });
  let strech = null;

  if (dataRoad.stretch) {
    strech = JSON.parse(dataRoad?.stretch);
  }

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

      setDataInformation({
        acronym : dataRoad.acronym,
        extention: dataRoad.extention,
        id: dataRoad.id,
        kml: dataRoad.kml,
        mesh: dataRoad.mesh,
        regional: dataRoad.regional,
        revesment:dataRoad.revesment,
        uf: dataRoad.uf,
        url: dataRoad.url,
      })
    }  

    getSrech();
  }, [dataRoad, params.id])


  function arrayUpdate(object){
    const strechParse = JSON.parse(object.stretch)
    const strech = {
      description : strechParse.description,
      endLatitude : strechParse.endLatitude,
      endLongitude : strechParse.endLongitude,
      initialLatitude : strechParse.initialLatitude,
      initialLongitude : strechParse.initialLongitude,
    }
    setDataStrech(strech) 
    
  }

  function arrayUpdateInformation(object){
    setDataInformation({
      acronym : object.acronym,
      extention: object.extention,
      id: object.id,
      kml: object.kml,
      mesh: object.mesh,
      regional: object.regional,
      revesment:object.revesment,
      uf: object.uf,
      url: object.url,
    })
  }

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
   
   const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  if(dataInformation && strech){
    return (
      <section className="">
        <div className="flex flex justify-between items-end p-2.5 mt-5 bg-white rounded-md mt-2.5 shadow-lg ">
          <div className="flex flex-col">
            <strong className="py-2 text-text-100">
              <span className="text-gray-400 tracking-wider mr-2">
                Rodovia:
              </span>
              {dataInformation.acronym}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">Malha:</span>
              {dataInformation.mesh}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Extensão:
              </span>
              {dataInformation.extention} Km
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Núcleo Regional:
              </span>
              {dataInformation.regional}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">UF:</span>
              {dataInformation.uf}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Descrição:
              </span>
              {dataStrech?.description}
            </strong>
          </div>
          <div className="py-2 flex justify-end justify-self-end">
            <Dialog>
              <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                <PencilLine size={18} />
              </DialogTrigger>
              <ModalUpdate data={dataRoad} arrayUpdateInformation={arrayUpdateInformation}/>
            </Dialog>
          </div>
        </div>

        <h2 className="mt-5 mb-1 text-xl font-medium">Coordenadas</h2>
        <div className="flex flex justify-between items-end p-2.5 bg-white rounded-md shadow-lg mb-5">
          <div className="flex flex-col">
            <strong className="py-2 text-text-100">
              <span className="text-gray-400 tracking-wider mr-2">
                Latitude inicial:
              </span>
              {dataStrech?.initialLatitude}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Longitude inicial:
              </span>
              {dataStrech?.initialLongitude}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Latitude final:
              </span>
              {dataStrech?.endLatitude}
            </strong>
            <strong className="py-2 text-text-100 ">
              <span className="text-gray-400 tracking-wider mr-2 ">
                Latitude final:
              </span>
              {dataStrech?.endLongitude}
            </strong>
          </div>
          <div className="py-2 flex justify-end ">
            <Dialog>
              <DialogTrigger className="flex text-sm justify-center items-center gap-1 p-1 text-sm text-sky-600 border rounded border-sky-600 hover:bg-sky-600 hover:text-white">
                <PencilLine size={18} />
              </DialogTrigger>
              <ModalUpdateCoordinates data={dataRoad} arrayUpdate={arrayUpdate}/>
            </Dialog>
          </div>
        </div>
       
        {start.latitude ?   
        <div className="mb-5">
          
              <ReactMapGL
               key={`${start.latitude}-${start.longitude}`}
              initialViewState={{
                latitude: +start.latitude,
                longitude: +start.longitude,
                zoom:11
              }}
             
              onViewportChange={handleViewportChange}
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
          

                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />
              </ReactMapGL>
          </div>: ""}
            
      </section>
  );
  }
  
}
