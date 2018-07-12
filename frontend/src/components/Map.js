import React from 'react';
import {withGoogleMap, GoogleMap,} from "react-google-maps";
import Location from './Location';

const MapContainer = withGoogleMap((props) =>
  <GoogleMap
    defaultOptions={{mapTypeControl: false}}
    defaultZoom={15}
    defaultCenter={{lat: 49.263070, lng: -123.246165}}
  >
    {props.isMarkerShown && <Location name={"my house"} lat={49.265250} lng={-123.250550} discount={0.10}/>}
  </GoogleMap>
);

export default MapContainer;