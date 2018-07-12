import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {withGoogleMap, withScriptjs, GoogleMap,} from "react-google-maps";
import Location from './Location';

class Map extends Component {
  renderLocations() {
    return this.props.locations.map(location =>
      <Location
        name={location.name}
        lat={location.lat}
        lng={location.lng}
        discount={location.discount}
      />)
  }

  render() {
    return <GoogleMap
      defaultOptions={{mapTypeControl: false}}
      defaultZoom={15}
      defaultCenter={{lat: 49.263070, lng: -123.246165}}
    >
      {this.renderLocations()}
    </GoogleMap>;
  }
}

export default withScriptjs(withGoogleMap(Map));

Map.propTypes = {
  locations: [{
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    discount: PropTypes.number
  }]
};