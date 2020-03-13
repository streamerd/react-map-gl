/* global document */

import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {GeolocateControl}  from 'react-map-gl';
const MAPBOX_PUBLIC_KEY = process.env.MAPBOX_PUBLIC_KEY;

  const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};


class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 53.551086,
        longitude: 9.993682,
        zoom: 12,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <div>
<     ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_PUBLIC_KEY}
        >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          showUserLocation={true}
          trackUserLocation={true}
          label="Click to get live location"
        />

      </ReactMapGL>
      </div>
      
    );
  }
}

document.body.style.margin = 0;
render(<Root />, document.body.appendChild(document.createElement('div')));