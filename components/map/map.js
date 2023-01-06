import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import style from '../../styles/Home.module.css'
import { polyline } from '../../data/polylines'
import { useState, useEffect } from 'react'
import L from 'leaflet'

export default function Map({
  handleClick = () => {}
}){

  const coords = [49.28594, -123.11129]

  const colorBlue = {color: '#005ba5'}

  var Icon = L.Icon.extend({
    options: {
      iconSize: [30, 30]
    }
  })
  
  var newIcon = new Icon({
    iconUrl: '/train.png'
  })

  const [stops, setStops] = useState([]) 

  useEffect(() => {
    setStops(polyline)
  }, [])
 
  return ( 
    <MapContainer 
      className={style.map} 
      center={coords} 
      zoom={14}
      scrollWheelZoom={true}
      >
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    
      {
    
        stops.map((stations, i) => {
          
          return (

          <Marker 
            position={stations}
            icon={newIcon}
            key={i}
            eventHandlers={{
              click: handleClick
            }}
          >
            <Popup >
                Skytrain. <br/> Waterfront. <br/> {i}
            </Popup>


          </Marker>

          )
        })
        
      }

    <Polyline pathOptions={colorBlue} positions={polyline}/>
    </MapContainer>
  )
}