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

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Search extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <Container>
          <Header searchBar rounded>
              <Item>
                  <Icon name="md-search" />
                  <Input placeholder="Your destination" />
                  <Icon name="md-close" />
              </Item>
          </Header>

          <Content>
            <Text>Lorem ipsum</Text>
          </Content>
      </Container>
    )
  }
}

// export default connect(mapStateToProps)(Home);