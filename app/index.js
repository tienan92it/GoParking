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

import Home from './layouts/home/home'
import ParkingInfo from './layouts/parkinginfo/ParkingInfo'

const defaultRoute = {
  title: 'ParkingInfo',
  component: ParkingInfo
}

const GoParking = (props) => {
  return (
    <Navigator
      initialRoute={defaultRoute}
      renderScene={(route, navigator) => {
        return <route.component route={route} navigator={navigator}/>
      }}/>
  )
}

export default GoParking