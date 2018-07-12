import React from 'react';
import {withGoogleMap, GoogleMap, Marker,} from "react-google-maps";

const MapContainer = withGoogleMap((props) =>
  <GoogleMap
    defaultOptions={{mapTypeControl: false}}
    defaultZoom={15}
    defaultCenter={{lat: 49.263070, lng: -123.246165}}
  >
    {props.isMarkerShown && <Marker position={{lat: 49.265250, lng: -123.250550}}/>}
  </GoogleMap>
);

export default MapContainer;