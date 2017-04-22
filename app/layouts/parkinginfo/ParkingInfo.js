/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'
import {
  Container, Header, Left, Button, Icon, Body, Title, Right
} from 'native-base';
import Styles from './styles'

import BottomBar from '../../components/bottombar/BottomBar'

import Images from '../../config/Images'
// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";
import BookingScene from './../booking/booking';

export default class ParkingInfo extends Component {

  constructor (props) {
    super(props)
    this.onBackPress = this.onBackPress.bind(this)
    this.onReserveParking = this.onReserveParking.bind(this)
    this.showPathToParking = this.showPathToParking.bind(this)
  }

  onBackPress (navigator) {
    navigator.pop();
  }

  onReserveParking (navigator) {
    // Go to reserve
    navigator.push({
      title: "Book",
      component: BookingScene
    });
  }

  showPathToParking (navigator) {
    //show path to parking
    alert("Show path to parking")
  }

  render() {

    const {navigator} = this.props

    return (
      <View style={Styles.container}>
        <Container>
          <Header backgroundColor="#1d7d12">
            <Left>
              <Button transparent onPress={() => this.onBackPress(navigator)}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
            <Title>Thông tin bãi giữ xe</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='share' />
              </Button>
            </Right>
          </Header>

          <View style={{flex: 0.7, flexDirection: 'column', backgroundColor: 'white'}}>
            <Image style={Styles.coverImage}
                   source={Images.CoverImage}/>
            <View style={Styles.baseContent}>
              <Text style={Styles.title}>Parking Heaven</Text>
              <Text style={Styles.commonText}>28 Điện Biên Phủ, Quận 1</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={Styles.clockIcon} source={Images.Clock}/>
                <Text style={Styles.commonText}>9g sáng - 12g tối</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={Styles.ratingStar} source={Images.RatingStar}/>
                <Text style={Styles.smallText}>(302 đánh giá)</Text>
              </View>
            </View>
            <View style={Styles.divider} />
            <View style={Styles.priceContent}>
              <Text style={Styles.title}>Giá</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={Styles.commonText}>1 giờ</Text>
                <Text style={[Styles.commonText, {marginRight: 30}]}>10 000 VND</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={Styles.commonText}>4 giờ</Text>
                <Text style={[Styles.commonText, {marginRight: 30}]}>40 000 VND</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={Styles.commonText}>Giá ngày tối đa</Text>
                <Text style={[Styles.commonText, {marginRight: 30}]}>80 000 VND</Text>
              </View>
            </View>
          </View>
          <BottomBar style={{alignSelf: 'flex-end'}}
                     reserveAction={() => this.onReserveParking(navigator)}
                     pathAction={() => this.showPathToParking(navigator)}/>
        </Container>
      </View>
    )
  }
}