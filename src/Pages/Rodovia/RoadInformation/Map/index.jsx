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
  Popup,
  Map
} from "react-map-gl";
import { useLocation } from 'react-router-dom';
export function MapRoad({startLatitude, startLongitude}){
  const {pathname} = useLocation()  
  const directionsClient = MapboxClient({ accessToken: "pk.eyJ1Ijoidm9uMzQiLCJhIjoiY2w5NzJkaTI0MnJ6eTNub2l1dXA4M3YxeCJ9.Z0GAMbATYKVCN_esIi7lFw" });
  const [start, setStart] = useState({ latitude: 0, longitude: 0});
  const [end, setEnd] = useState({ latitude: -0.5845891, longitude: -47.6525196 });
  const [route, setRoute] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: -1.1203796,
    longitude: -48.3873969,
    zoom: 12
  });


  
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
       latitude: start.latitude,
       longitude: start.longitude,
       zoom: 14
     });
   });
     
   }, []);



   if(startLatitude){
    return(
        <div className="mb-5">
        <Map
          initialViewState={{
            longitude: -47.6599985,
            latitude:  -0.58459,
            zoom: 13
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
          

          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
        </Map>
      </div>
    )
   }
   }