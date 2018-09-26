import React, { Component } from "react";
import { InfoWindow, Marker } from "react-google-maps";

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
        title={"Keep It Weird"}
      >
        {this.state.isOpen && (
          <InfoWindow
            onCloseClick={this.toggleClose}
            options={{ maxWidth: 320 }}
          >
            <div>
              <h3>InfoWindow</h3>
              <p>
                A tree needs to be your friend if you're going to paint him. The
                only prerequisite is that it makes you happy. If it makes you
                happy then it's good. I thought today we would do a happy little
                picture. This present moment is perfect simply due to the fact
                you're experiencing it. Work on one thing at a time. Don't get
                carried away - we have plenty of time. I really believe that if
                you practice enough you could paint the 'Mona Lisa' with a
                two-inch brush.
              </p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerComponent;
