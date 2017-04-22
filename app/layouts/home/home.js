/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';
import {
  View,
  TextView
} from 'react-native';
import Styles from './styles'

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.container}>
        <TextView>Show cai Map len di!!!</TextView>
      </View>
    )
  }
}

// export default connect(mapStateToProps)(Home);