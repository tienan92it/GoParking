/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';

import {
<<<<<<< HEAD
  View , Text
=======
  View,
  TextView,
  Text
>>>>>>> origin/ui-home-screen
} from 'react-native';
import Styles from './styles';
import { 
  Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input
} from 'native-base';
import Map from './../../components/map';

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
<<<<<<< HEAD
      <View style={Styles.container}>
        <Text>Show cai Map len di!!!</Text>
      </View>
=======
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
            <Map />
          </Content>
          {/*<Footer>
              <FooterTab>
                  <Button full>
                      <Text>Footer</Text>
                  </Button>
              </FooterTab>
          </Footer>*/}
      </Container>
>>>>>>> origin/ui-home-screen
    )
  }
}

// export default connect(mapStateToProps)(Home);