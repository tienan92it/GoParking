/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'
import {
  Container, Header, Left, Button, Icon, Body, Title, Right, Content, List, ListItem, Thumbnail, Card, CardItem
} from 'native-base';
import Styles from './styles'

import Images from '../../config/Images'
// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

const list = [{name: 'Parking Heaven', address: '208 Dien Bien Phu', in_out: '10h - 17h', image: Images.CoverImage, date: '23/4/2017'},
  {name: 'Hell', address: '11 Le Duan', in_out: '8h - 20h', image: Images.reservedIcon, date: '23/4/2017'},
  {name: 'Devil', address: '69 Ton Duc Thang', in_out: '15h - 1h', image: Images.personIcon, date: '23/4/2017'}]

export default class ReservedList extends Component {

  constructor (props) {
    super(props)

    // this.state = {
    //   list: []
    // }
  }

  componentWillMount() {
    // this.setState({
    //   list: [{name: 'Parking Heaven', address: '208 Dien Bien Phu'},
    //     {name: 'Hell', address: '11 Le Duan'},
    //     {name: 'Devil', address: '69 Ton Duc Thang'}]
    // })
  }

  onBackPress (navigator) {
    // Back to home
    navigator.pop()
  }

  render() {

    self = this

    const {navigator} = this.props

    return(
      <Container>
        <Header backgroundColor="#1d7d12">
          <Left>
            <Button transparent onPress={() => this.onBackPress(navigator)}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
          <Title>Danh sách đặt chỗ</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='share' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {list.map(function (obj) {
              return (
                <Card>
                  <CardItem>
                    <Thumbnail square size={80} source={obj.image} />
                    <View style={Styles.itemBody}>
                      <Text style={Styles.title}>{obj.name}</Text>
                      <Text note>{obj.address}</Text>
                    </View>
                    <Right>
                      {/*<View style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>*/}
                        {/*<Image style={Styles.clockIcon} source={Images.Clock}/>*/}
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                          <Text style={{color: 'black'}}>{obj.date}</Text>
                          <Text style={{color: 'black'}}>{obj.in_out}</Text>
                        </View>
                      {/*</View>*/}
                    </Right>
                  </CardItem>
                </Card>
              )
            })}
          </List>
        </Content>
      </Container>
    )
  }
}