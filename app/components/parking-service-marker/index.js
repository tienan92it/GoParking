import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { 
  Text, Icon
} from 'native-base';
import Styles from './styles';

export default class ParkingServiceMarker extends Component {
  render() {
    return (
      <View style={Styles.parkingServiceMarker}>
        <View style={Styles.pricing}>
          <Text style={{color: 'white', fontWeight: '600'}}>20$</Text>
        </View>
      </View>
    );
  }
};