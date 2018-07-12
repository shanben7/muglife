import React, { Component } from 'react'
import Map from "./Map";
import SideBar from "./SideBar/SideBar";
import {googleMapURL} from "../index";

class App extends Component {
  constructor(props) {
    super(props);
    // TODO: fill with blank location
    this.state = { newLocation: '' }
  }

  componentDidMount() {
    this.props.fetchLocations()
  }

  addLocation (event) {
    event.preventDefault(); // Prevent form from reloading page
    const { newLocation } = this.state;

    if(newLocation) {
      const location = { name: newLocation };
      this.props.addLocation(location);
      this.setState({ newLocation: '' })
    }
  }

  render() {

    let { newLocation } = this.state;
    const { locations, isLoading, isSaving, error, deleteLocation } = this.props;

    return (
      <div className="App">
        <SideBar />
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
