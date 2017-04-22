/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';

import {
  View,
  Text
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
      <View style={Styles.container}>
        <Text>Show cai Map len di!!!</Text>
      </View>
    )
  }
}

// export default connect(mapStateToProps)(Home);