import React, { Component } from 'react'
import Map from "./Map";
import SideBar from "./SideBar/SideBar";
import {googleMapURL} from "../index";
import { Navbar } from 'react-bootstrap';

// TODO: type all component props with PropTypes or possibly TS

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations()
  }

  render() {
    return (




        <div id="outer-container">
          <Navbar style={{marginBottom: "0", background: '#373a47'}} inverse>
            <Navbar.Text pullRight>
              mugLife
            </Navbar.Text>
          </Navbar>
          <SideBar
            locations={this.props.locations}
            addLocation={this.props.addLocation}
          />
          <main id="page-wrap">

            <Map style={{ zIndex: -1 }}
                 googleMapURL={googleMapURL}
                 locations={this.props.locations}
                 loadingElement={<div style={{ height: '100%' }} />}
                 containerElement={<div style={{ height: '100vh', width: '100%' }} />}
                 mapElement={<div style={{ height: `100%` }} />}
            />
          </main>


      </div>
    )
  }
}

export default App;
