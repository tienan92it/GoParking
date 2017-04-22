/**
 * Created by AnTran on 4/22/17.
 */
import { StyleSheet } from 'react-native'

const STYLES = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  panelTop: {
    flex: 0.25,
    flexDirection: 'row',
    backgroundColor: "#1d7d12",
    alignItems: "center",
    justifyContent: "center"
  },
  panelBody: {
    flex: 0.75,
    margin: 30
  },
  avatar: {
    flex: 0.5,
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  },
  name: {
    flex: 0.5,
    fontSize: 24,
    color: "#fff",
    textAlign: "center"
  },
  itemMenu: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  iconMenu: {
    width: 20,
    height: 20,
    flex: 0.2,
    resizeMode: "contain"
  },
  titleMenu: {
    flex: 0.8
  }
});

export default STYLES;