/**
 * Created by AnTran on 4/22/17.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'white'
  },
  divider: {
    width: 1,
    backgroundColor: "#fff"
  },
  leftButton: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#00B386"
  },
  rightButton: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#00B386"
  },
  textButton: {
    fontSize: 20,
    color: "#fff"
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    margin: 10
  }

})