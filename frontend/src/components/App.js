import React, { Component } from 'react'
import Map from "./Map";
import SideBar from "./SideBar/SideBar";
import {googleMapURL} from "../index";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLocations()
  }

  render() {
    return (
      <div style={{ zIndex: -1 }}>
        <SideBar
        locations={this.props.locations}
        addLocation={this.props.addLocation}
        />
        <Map
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
