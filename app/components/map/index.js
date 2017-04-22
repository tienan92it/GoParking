import React, { Component } from 'react';
import Styles from './styles';
import MapView from 'react-native-maps';
import ParkingServiceMarker from './../../components/parking-service-marker';
import {
  View,
  TextView,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Map extends Component {
  state = {
    // region: {
    //   latitude: 37.78825,
    //   longitude: -122.4324,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421
    // }
    region: {
      latitude: 10.7782168,
      longitude: 106.7016733,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05
    }
  }

  render() {
    return (
      <View style={Styles.mapWrapper}>
        <MapView
          style={Styles.map}
          region={this.state.region}
        >
          <MapView.Marker
            coordinate={{
              latitude: 10.7782168,
              longitude: 106.7016733
            }}
            onPress={(e) => {this._onParkServiceMarkerPress()}}
          >
            <ParkingServiceMarker />
          </MapView.Marker>
        </MapView>
        
        <TouchableOpacity onPress={this._onMyLocationBtnPress}>
          <MaterialIcons style={Styles.myLocationBtn} name="my-location" />
        </TouchableOpacity>
      </View>
    );
  }

  _onParkServiceMarkerPress = (parkingService) => {
    this.props.onSelectParkingService(parkingService);
  }

  _onMyLocationBtnPress = () => {
    alert("aaaa");
  }
};