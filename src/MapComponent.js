import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import MarkerComponent from './MarkerComponent';

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  ><MarkerComponent center={props.center}/>}
  </GoogleMap>
))

export default MapComponent;