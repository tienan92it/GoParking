import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window'); 
const STYLES = StyleSheet.create({
  mapWrapper: {
    height: height - 80,
    backgroundColor: "red"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  myLocationBtn: {
    fontSize: 30, position: "absolute", bottom: 20, right: 20
  }
});

export default STYLES;