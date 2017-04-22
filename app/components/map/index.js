import React, { Component } from 'react';
import Styles from './styles';
import MapView from 'react-native-maps';
import ParkingServiceMarker from './../../components/parking-service-marker';
import {
  View,
  TextView,
  Text,
  StyleSheet
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Map extends Component {
  render() {
    return (
      <View style={Styles.mapWrapper}>
        <MapView
          style={Styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
          >
            <ParkingServiceMarker />
          </MapView.Marker>
        </MapView>
        
        <MaterialIcons style={Styles.myLocationBtn} name="my-location" />
      </View>
    );
  }
};