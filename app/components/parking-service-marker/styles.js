import { StyleSheet } from 'react-native'
// const mapPin = require('./../../assets/map-pin.svg');

const STYLES = StyleSheet.create({
  parkingServiceMarker: {
    width: 50,
    height: 50,
    alignItems: 'center'
  },
  pricing: {
    backgroundColor: "blue",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 4
  },
  pricingText: {
    color: '#fff'
  },
  marker: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});

export default STYLES;