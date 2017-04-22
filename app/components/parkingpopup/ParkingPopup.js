/**
 * Created by AnTran on 4/22/17.
 */
import React from 'react';
import { Animated, StyleSheet, Easing, Text, Dimensions, View, Image, TouchableOpacity } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { OPEN_ANIM_DURATION, CLOSE_ANIM_DURATION } from '../../config/constants';
import Images from '../../config/Images'
import Styles from './styles'

export const computePosition = (windowHeight) => {
  // const { wHeight } = windowHeight;
  // const { oHeight } = 400;
  const top  = windowHeight - 170;
  const left = 0;
  return { top, left };
}


const window = Dimensions.get('window');

export default class ParkingPopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slide: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.slide, {
      duration: CLOSE_ANIM_DURATION,
      toValue: 0,
      easing: Easing.in(Easing.cubic),
    }).start();
  }

  close() {
    return new Promise(resolve => {
      Animated.timing(this.state.slide, {
        duration: CLOSE_ANIM_DURATION,
        toValue: 0,
        easing: Easing.in(Easing.cubic),
      }).start(resolve);
    });
  }

  open() {
    return new Promise(resolve => {
      Animated.timing(this.state.slide, {
        duration: OPEN_ANIM_DURATION,
        toValue: 1,
        easing: Easing.out(Easing.cubic),
      }).start(resolve);
    })
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 50
    };

    const { onClickPopup } = this.props
    // alert(JSON.stringify(window))
    // const { style, children, layouts, ...other } = this.props;
    // const { height: oHeight } = 400;
    // const { width } = wWidth;
    const animation = {
      transform: [{
        translateY: this.state.slide.interpolate({
          inputRange: [0, 1],
          outputRange: [170, 0]
        }),
      }]
    };
    const position = computePosition(window.height);
    return (
      <Animated.View style={[styles.options, { width: window.width }, animation, position]}>
        <GestureRecognizer config={config}
                           onSwipeDown={() => this.close()}
                           style={{ width: window.width, height: 170, flex: 1, backgroundColor: this.state.backgroundColor }}>
          <TouchableOpacity style={[Styles.infoContent, {width: window.width}]} onPress={onClickPopup}>
            <Image style={{width: 130, height: 130, resizeMode: 'contain', margin: 10}} source={Images.CoverImage}/>
            <View style={{flexDirection: 'column'}}>
              <Text style={Styles.title}>Parking Heaven</Text>
              <Text style={Styles.price}>20k/giờ</Text>
              <Text style={Styles.commonText}>Còn 10 chỗ</Text>
              <Image style={Styles.ratingStar} source={Images.RatingStar}/>
            </View>
          </TouchableOpacity>
        </GestureRecognizer>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  options: {
    position: 'absolute',
    backgroundColor: 'white',

    // Shadow only works on iOS.
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 4,

    // This will elevate the view on Android, causing shadow to be drawn.
    elevation: 5,
  },
});