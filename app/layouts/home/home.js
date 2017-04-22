/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';

import {
  View,
  TextView,
  Text
} from 'react-native';
import Styles from './styles';
import { 
  Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input
} from 'native-base';
import Map from './../../components/map';
import ParkingInfo from './../parkinginfo/ParkingInfo';
import Search from './../search/search';
import _ from 'lodash';

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Home extends Component {
  DEFAULT_DESTINATION = {
    latitude: 10.7782168,
    longitude: 106.7016733
  };

  constructor (props) {
    super(props)
  }

  render() {
    const {navigator} = this.props;
    const destination = _.get(
      this.props, ['passProps', 'destination'], this.DEFAULT_DESTINATION
    );

    return (
      <Container style={{backgroundColor: "blue", flex: 1,}}>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Left>
              <Right>
                <Button onPress={() => {
                  this.onSearchBtnPress(navigator);
                }} transparent>
                    <Icon name="md-search" />
                </Button>
              </Right>
          </Header>

          {/*<Header searchBar rounded>
              <Item>
                  <Icon name="md-search" />
                  <Input placeholder="Your destination" />
                  <Icon name="md-close" />
              </Item>
          </Header>*/}

          <Content style={{backgroundColor: "green", flex: 1,}}>
            <Map 
              destination={destination}
              onSelectParkingService={this._onSelectParkingService} />
          </Content>
          {/*<Footer>
              <FooterTab>
                  <Button full>
                      <Text>Footer</Text>
                  </Button>
              </FooterTab>
          </Footer>*/}
      </Container>
    )
  }

  _onSelectParkingService = () => {
    const {navigator} = this.props;
    
    navigator.push({
      title: "Parking Info",
      component: ParkingInfo
    });
  }

  onSearchBtnPress = (navigator) => {
    navigator.push({
      title: "Search",
      component: Search
    })
  }
}

// export default connect(mapStateToProps)(Home);