/**
 * Created by AnTran on 4/23/17.
 */
import {combineReducers} from 'redux';


// Defined types, can be based on your scenes that you want they get data each the other.
const types = {
  location: 'location',
  dataHome: 'Home'
}

// Defined actions
export const actionCreators = {
  storeLocation (params){
    return {
      type: types.location,
      payload: params,
    }
  },
}

const initialState = {};

// Store your data to Redux based on your action
const searchReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case types.location: {
      return {
        ...state,
        params: payload,
      }
    }
    case types.dataHome: {
      return {
        ...state,
        params: payload,
      }
    }
    default:
      return state;
  }
}


export default combineReducers({
  searchReducer,
})