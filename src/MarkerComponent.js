import React, { Component } from "react";
import {
  InfoWindow,
  Marker
} from "react-google-maps";

class MarkerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      animation: 2
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: true,
      animation: 1
    });
  }

  toggleClose() {
    this.setState({
      isOpen: false,
      animation: 4
    });
  }

  render() {
    return (
      <Marker
        position={this.props.center}
        onClick={this.toggleOpen}
        animation={this.state.animation}
        title={'Keep It Weird'}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.toggleClose}>
            <h3>Info Window</h3>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerComponent;
