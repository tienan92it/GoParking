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
import _ from 'lodash';

export default class Map extends Component {
    render() {
    const { navigator } = this.props
    const destination = _.get(this.props, ['destination'], {});
    const region = {
      ...destination,
      latitudeDelta: 0.006,
      longitudeDelta: 0.006
    }

    return (
      <View style={Styles.mapWrapper}>
        <MapView
          style={Styles.map}
          region={region}
        >
          <MapView.Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude
            }}
            onPress={(e) => {this._onParkServiceMarkerPress()}}
          >
            <ParkingServiceMarker />
          </MapView.Marker>
        </MapView>
        
        <TouchableOpacity onPress={() => this._onMyLocationBtnPress()}>
          <MaterialIcons style={Styles.myLocationBtn} name="my-location" />
          <Text>My location</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onParkServiceMarkerPress = (parkingService) => {
    this.props.onSelectParkingService(parkingService);
  }

  _onMyLocationBtnPress = () => {
    this.setState({
      region: {
        latitude: 21.0061913,
        longitude: 105.8313511,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }
    })

    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        // this.setState({initialPosition});
        alert(initialPosition)
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000}
    );
  }
};