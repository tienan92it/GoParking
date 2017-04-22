/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  View,
  TextView,
  Text,
  StyleSheet
} from 'react-native';
import Styles from './styles';

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style ={Styles.container}>
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
          </MapView>
        </View>
        <View style={Styles.controlsWrapper}>
          <Text>Control wrapper</Text>
        </View>
      </View>
    )
  }
}

// export default connect(mapStateToProps)(Home);