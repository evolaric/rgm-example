import React, { Component } from "react";
import "./App.css";
import MapComponent from "./MapComponent";


class App extends Component {
  constructor() {
    super();
    this.state = {
      center: { lat: 45.530369, lng: -122.672111 },
      zoom: 11
    };
  }

  render() {
    return (
      <div className="App">
        <MapComponent
          center = {this.state.center}
          zoom = {this.state.zoom}
          defaultZoom={this.state.zoom}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
