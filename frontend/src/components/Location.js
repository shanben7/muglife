import React from 'react'
import PropTypes from 'prop-types'
import { Marker, InfoWindow } from 'react-google-maps'

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInfoOpen: false };

    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  onToggleOpen () {
    this.setState({ isInfoOpen: !this.state.isInfoOpen });
  }

  render () {
    return (
      <Marker
        position={{ lat: this.props.lat, lng: this.props.lng }}
        onClick={this.onToggleOpen}
      >
        {this.state.isInfoOpen &&
        <InfoWindow onCloseClick={this.onToggleOpen}>
          <div>name: {this.props.name}, discount: {this.props.discount}</div>
        </InfoWindow>}
      </Marker>
    );
  }
}

export default Location;

Location.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  discount: PropTypes.number
};