/**
 * Created by AnTran on 4/22/17.
 */
import React from 'react';
import {
  Navigator
} from 'react-native';

import {Provider} from 'react-redux';
import reducers from './reducer/reducer';

import { createStore } from 'redux';
const store = createStore(reducers);

import Home from './layouts/home/home';
import Booking from './layouts/booking/booking';
import ParkingInfo from './layouts/parkinginfo/ParkingInfo'
import ReservedList from './layouts/reserved/ReservedList'
import Search from './layouts/search/search';

const defaultRoute = {
  title: 'Search',
  component: Home
}

const GoParking = (props) => {
  return (
    <Provider store={store}>
      <Navigator
        initialRoute={defaultRoute}
        renderScene={(route, navigator) => {
          const {passProps} = route;
          return <route.component route={route} navigator={navigator} passProps={passProps} />
        }}/>
    </Provider>
  )
}

export default GoParking