/**
 * Created by AnTran on 4/22/17.
 */
import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 50
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  controlsWrapper: {
    // backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 50
  }
});

export default STYLES;