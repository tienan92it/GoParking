/**
 * Created by AnTran on 4/22/17.
 */
import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window'); 
const STYLES = StyleSheet.create({
  mapWrapper: {
    height: height - 80,
    backgroundColor: "red"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default STYLES;