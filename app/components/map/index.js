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
import Images from '../../config/Images'
import dummyData from './../../dummy-data';

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
            // onPress={(e) => {this._onParkServiceMarkerPress()}}
            image={Images.currentLocation}
          >
            {/*<ParkingServiceMarker />*/}
          </MapView.Marker>
          {
            dummyData.parkingServices.map((parkingService, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={{
                    latitude: parkingService.latitude,
                    longitude: parkingService.longitude
                  }}
                  onPress={(e) => {this._onParkServiceMarkerPress()}}
                  image={Images.mapMarker}
                >
                  {/*<ParkingServiceMarker />*/}
                </MapView.Marker>
              )
            })
          }
        </MapView>

        <TouchableOpacity style={{position: "absolute", right: 15, bottom: 15}} onPress={this._onMyLocationBtnPress}>
          <MaterialIcons style={{fontSize: 30}} name="my-location" />
        </TouchableOpacity>
      </View>
    );
  }

  _onParkServiceMarkerPress = (parkingService) => {
    this.props.onSelectParkingService(parkingService);
  }

  _onMyLocationBtnPress = () => {
    this.props.onMyLocationBtnPress();
  }
};