import React from 'react';
import {compose, withProps} from 'recompose';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from 'react-google-maps';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC2O_IrxIOITwcdTGbv6cPC42qaHcImZ1Y&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `600px`, width: '100%' }} />,
    containerElement: <div className="content-main map" style={{ height: `600px`, width: '100%' }} />,
    mapElement: <div style={{ height: `600px`, width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: 32.0750419, lng: 34.7819586 }}>
    <Marker position={{ lat: 32.0750419, lng: 34.7819586 }} />
  </GoogleMap>
));

export default Map;
