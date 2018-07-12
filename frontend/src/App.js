import React, { Component } from 'react'
import './App.css'
import Locations from './components/Locations'
import MapContainer from "./components/Map";
import SideBar from "./components/SideBar/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MapContainer
          isMarkerShown
          containerElement={<div style={{ height: '100vh', width: '100%' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

        {/*<Locations />*/}

      </div>
    )
  }
}

export default App
