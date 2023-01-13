import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import style from '../../styles/Home.module.css'
import { polyline, lines, extended } from '../../data/polylines'
import { useState, useEffect } from 'react'
import L from 'leaflet'

export default function Map({
  handleClick = () => {},
}){

  const coords = [49.28594, -123.11129]

  const colorBlue = {color: '#005ba5'}
  const colorYellow = {color: '#EAAA00'}

  var Icon = L.Icon.extend({
    options: {
      iconSize: [30, 30]
    }
  })
  
  var newIcon = new Icon({
    iconUrl: '/train.png'
  })

  
  // console.log(stops)
  return ( 
    <MapContainer 
      className={style.map} 
      center={coords} 
      zoom={14}
      scrollWheelZoom={true}
      >
      <TileLayer 
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
        url="https://api.mapbox.com/styles/v1/sn00ze/clcrbgbkl002q14s652s8zzdy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic24wMHplIiwiYSI6ImNsY3JiaXhnbDBlYTczcG53dWtjN25mdGMifQ.htTSNyCoa1KbyudVOtOY1w"
      />
    
      {
    
        polyline.map((stations, i) => {
          return (
        <>
          <Marker 
            position={stations.location}
            icon={newIcon}
            key={i}
            eventHandlers={{
              click: handleClick
            }}
          >
            <Popup>
                Skytrain. <br/> {stations.name}. <br/>
            </Popup>
          </Marker>
        
        </>

          )
        })
      }
          <CircleMarker center={polyline[0].location} pathOptions={colorBlue} radius={20}>
            <Popup>
              Start of the Expoline Station
            </Popup>
          </CircleMarker>
          <CircleMarker center={polyline[19].location} pathOptions={colorBlue} radius={20}>
            <Popup>
              End of the Surrey Expoline Station
            </Popup>
          </CircleMarker>
          <CircleMarker center={polyline[15].location} pathOptions={colorYellow} radius={20}>
            <Popup>
              Station Split
            </Popup>
          </CircleMarker>
          <CircleMarker center={polyline[23].location} pathOptions={colorBlue} radius={20}>
            <Popup>
              End of the Coquitlam Expoline Station
            </Popup>
          </CircleMarker>
    <Polyline pathOptions={colorBlue} positions={lines}/>
    <Polyline pathOptions={colorYellow} positions={extended}/>
    </MapContainer>
  )
}