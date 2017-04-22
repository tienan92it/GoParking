import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { 
  Text, Icon
} from 'native-base';
import Styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ParkingServiceMarker extends Component {
  render() {
    return (
      <View style={Styles.parkingServiceMarker}>
        <Icon name="ios-pin" />
        <Text style={Styles.pricing}>20$</Text>
        <MaterialIcons name="my-location" />
      </View>
    );
  }
};