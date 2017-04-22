/**
 * Created by AnTran on 4/22/17.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  baseContent: {
    margin: 10
  },
  priceContent: {
    margin: 10
  },
  coverImage: {
    width: "100%",
    height: "34%",
    resizeMode: "stretch"
  },
  divider: {
    height: 1,
    backgroundColor: "#000"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },
  commonText: {
    fontSize: 16,
    color: "#000"
  },
  ratingStar: {
    resizeMode: 'contain',
    width: 100,
    height: 20,
    marginRight: 10
  },
  smallText: {
    fontSize: 12,
    color: '#000'
  },
  clockIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginRight: 10
  }
})