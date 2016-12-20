import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import './Map.css';

const coords = {
  lat: 40.7128,
  lng: -74.0059
};

const Mapp = props => (

  <div id="map-view-container">
    <Gmaps
    width={'45vw'}
    height={'30vw'}
    lat={coords.lat}
    lng={coords.lng}
    zoom={12}>

    <Marker
    lat={coords.lat}
    lng={coords.lng}
    draggable={true}/>

    <InfoWindow
    lat={coords.lat}
    lng={coords.lng}
    content={'GA is somwhere here!'}/>

    <Circle
    lat={coords.lat}
    lng={coords.lng}
    radius={100}/>

    </Gmaps>
  </div>

);

export default Mapp;
