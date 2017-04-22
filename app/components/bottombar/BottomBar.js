/**
 * Created by AnTran on 4/22/17.
 */
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Styles from './styles'
import Images from '../../config/Images'

const BottomBar = (props) => {
  const { reserveAction, pathAction } = props

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.leftButton}
                        onPress={reserveAction}>
        <Image style={Styles.icon} source={Images.CreditCard}/>
        <Text style={Styles.textButton}>Dat cho</Text>
      </TouchableOpacity>
      <View style={Styles.divider}/>
      <TouchableOpacity style={Styles.rightButton}
                        onPress={pathAction}>
        <Image style={Styles.icon} source={Images.LocationArrow}/>
        <Text style={Styles.textButton}>Chi duong</Text>
      </TouchableOpacity>
    </View>

  )

  BottomBar.propTypes = {
    reserveAction: React.PropTypes.func,
    pathAction: React.PropTypes.func
  };

  BottomBar.defaultProps = {
    reserveAction: () => console.log("click vao reserve roi ne"),
    pathAction: () => console.log("click vao path roi ne")
  };
}

export default BottomBar