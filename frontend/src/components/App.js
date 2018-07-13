import React, { Component } from 'react'
import Map from "./Map";
import SideBar from "./SideBar/SideBar";
import {googleMapURL} from "../index";

// TODO: type all component props with PropTypes or possibly TS

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations()
  }

  render() {
    return (
      <div>
        <SideBar
        locations={this.props.locations}
        addLocation={this.props.addLocation}
        />
        <Map style={{ zIndex: -1 }}
          googleMapURL={googleMapURL}
          locations={this.props.locations}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100vh', width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default App;
