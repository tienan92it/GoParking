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
        <Text>asdjhaksdh</Text>
          <Image style={Styles.marker} source={Images.mapMarker}/>
      </View>
    );
  }
};