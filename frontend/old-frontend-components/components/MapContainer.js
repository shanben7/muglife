import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import '../styles/map.css';
import StopMarker from "./StopMarker";
import styled from 'styled-components';

class MapContainer extends React.Component {

  renderStopMarkers() {
    return this.props.stops.map(s => this.renderStopMarker(s));
  }

  renderStopMarker(stop) {
    return <StopMarker
      lat={stop.lat}
      lng={stop.lng}
      name={stop.name}
      discount={stop.discount}
    />;
  }

  togglePopover() {
    console.log("in toggle popover");
    if (document.getElementById('popover-positioned-top')) {
      var openPopover = document.getElementById('popover-positioned-top');
      console.log("toggling display");
      if (openPopover.style.display != "none") {
        openPopover.style.display = "none";
      } else {
        openPopover.style.display = "block";
      }
    }
  }

  render() {
    const StopMarkers = this.props.stops && this.renderStopMarkers();

    return (
      <GoogleMap
        defaultOptions={{ mapTypeControl: false }}
        center={this.props.center}
        zoom={this.props.zoom}
        onClick={this.togglePopover()}
      >
        {StopMarkers}
      </GoogleMap>
    );
  }
}

export default MapContainer;

MapContainer.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  stops: PropTypes.arrayOf(PropTypes.shape),
};

MapContainer.defaultProps = {
  center: [49.2606087, -123.2481878],
  zoom: 15,
  stops: [{lat: 49.2606087, lng: -123.2481878, name: "JJ Bean"}]
};