import React, { Component } from 'react';

import {
  View,
  TextView,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './styles';
import { 
  Card, CardItem
  , Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input
} from 'native-base';
import Home from './../home/home';
import _ from 'lodash';

import {connect} from 'react-redux';
import {actionCreators} from "../../reducer/reducer";

class Search extends Component {
  GG_API_KEY = "AIzaSyAgI7Mxlxt-YZXYGiIw0tBkrjvAXjKvsow";
  state = {
    autocompletedPlaces: []
  };

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Container>
          <Header searchBar rounded style={{backgroundColor: "#00B386"}}>
              <Item style={{flex: 1}}>
                  <Icon name="md-search" />
                  <Input onChangeText={this.onTextInputChange} placeholder="Điểm đến của bạn" />
              </Item>
              
                <View style={{alignItems: "center", justifyContent: "center", paddingLeft: 15}}>
                  <TouchableOpacity onPress={() => this.onCloseBtnPress()}>
                    <Icon style={{color: "#fff"}} name='md-close' />
                  </TouchableOpacity>
                </View>
              
          </Header>

          

          <Content>
            {
              this.state.autocompletedPlaces.length ?
              (<Card>
                {
                  this.state.autocompletedPlaces.map((autocompletedPlace, index) => {
                    return (
                      <CardItem button onPress={()=>{ this.onAutocompletedPlacePress(autocompletedPlace) }} key={index}>
                        <Text>{autocompletedPlace.description}</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                      </CardItem>
                    )
                  })
                }
              </Card>) : undefined
            }
          </Content>
      </Container>
    )
  }

  onAutocompletedPlacePress = (autocompletedPlace) => {
    const {navigator, dispatch} = this.props;
    const {place_id} = autocompletedPlace;
    this
      .getPlaceInfo(place_id)
      .then((response) => {
        const placeInfo = _.get(response, 'result');

        dispatch(actionCreators.storeLocation({destination: {
          latitude: _.get(placeInfo, 'geometry.location.lat'),
          longitude: _.get(placeInfo, 'geometry.location.lng')
        }}));

        // navigator.push({
        //   title: "Home",
        //   component: Home,
        //   passProps: {
        //     destination: {
        //       latitude: _.get(placeInfo, 'geometry.location.lat'),
        //       longitude: _.get(placeInfo, 'geometry.location.lng')
        //     }
        //   }
        // });
        navigator.pop()
      });
  }

  onTextInputChange = (text) => {
    this
      .getAutocompletedPlaces(text)
      .then((response)=>{
        this.setState({
          autocompletedPlaces: response.predictions || []
        })
      });
  }

  getPlaceInfo = async (placeId) => {
    endPoint = "https://maps.googleapis.com/maps/api/place/details/json";
    try {
      var result = await fetch(`${endPoint}?key=${this.GG_API_KEY}&placeid=${placeId}`);
      return result.json();

    } catch (e) {
      return Promise.reject(e);
    }
  }

  getAutocompletedPlaces = async (input) => {
    endPoint = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
    try {
      var result = await fetch(`${endPoint}?key=${this.GG_API_KEY}&input=${input}`);
      return result.json();

    } catch (e) {
      return Promise.reject(e);
    }
  }

  onCloseBtnPress = () => {
    const {navigator} = this.props;
    navigator.pop()
  }
}
const mapStateToProps = (state) => {
  return {
    location : state.searchReducer.params
  }
}

export default connect(mapStateToProps)(Search);