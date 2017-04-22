import React, { Component } from 'react';

import {
  View,
  TextView,
  Text
} from 'react-native';
import Styles from './styles';
import { 
  Card, CardItem
  , Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input
} from 'native-base';

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Search extends Component {
  GG_API_KEY = "AIzaSyAgI7Mxlxt-YZXYGiIw0tBkrjvAXjKvsow";
  state = {
    autocompletedPlaces: []
  };

  constructor (props) {
    super(props);

    this
      .getAutocompletedPlaces("vincom")
      .then((response)=>{
        this.setState({
          autocompletedPlaces: response.predictions || []
        })
      });
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
            <Card>
              {
                this.state.autocompletedPlaces.map((autocompletedPlace, index) => {
                  return (
                    <CardItem key={index}>
                      <Text>{autocompletedPlace.description}</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                    </CardItem>
                  )
                })
              }
            </Card>
          </Content>
      </Container>
    )
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
}

// export default connect(mapStateToProps)(Home);