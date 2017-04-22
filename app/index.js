/**
 * Created by AnTran on 4/22/17.
 */
import React from 'react';
import {
  Navigator
} from 'react-native';

// import {Provider} from 'react-redux';
// import reducers from './reducer/reducer';

// import { createStore } from 'redux';
// const store = createStore(reducers);

import Home from './layouts/home/home';
import Booking from './layouts/booking/booking';

const defaultRoute = {
  title: 'Home',
  component: Booking
}

const GoParking = (props) => {
  return (
    <Navigator
      style={{backgroundColor: "red"}}
      initialRoute={defaultRoute}
      renderScene={(route, navigator) => {
        return <route.component route={route} navigator={navigator}/>
      }}/>
  )
}

export default GoParking