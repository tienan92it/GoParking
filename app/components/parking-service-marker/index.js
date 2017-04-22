import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { 
  Text, Icon
} from 'native-base';
import Styles from './styles';
import Images from '../../config/Images'

export default class ParkingServiceMarker extends Component {
  render() {
    return (
      <View style={Styles.parkingServiceMarker}>
        <View style={Styles.pricing}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            {this.getPrice()}k
          </Text>
        </View>
      </View>
    );
  }

  getPrice = () => {
    return Math.floor(Math.random() * 100) + 20;
  }
};