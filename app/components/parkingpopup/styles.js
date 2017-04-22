/**
 * Created by AnTran on 4/22/17.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  infoContent: {
    height: 170,
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    color: '#00B386'
  },
  price: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#64b363',
    textAlign: 'center',
    borderRadius: 5,
    padding: 5
  },
  commonText: {
    fontSize: 16,
    color: 'black',
  },
  ratingStar: {
    resizeMode: 'contain',
    width: 100,
    height: 20,
    marginRight: 10
  },
})