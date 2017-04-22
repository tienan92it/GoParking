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

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Container style={{backgroundColor: "blue", flex: 1,}}>
          <Header>
              <Left>
                  <Button transparent>
                      <Icon name='menu' />
                  </Button>
              </Left>
              <Right>
                <Button transparent>
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
            <Map onSelectParkingService={this._onSelectParkingService} />
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
}

// export default connect(mapStateToProps)(Home);