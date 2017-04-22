/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  View,
  TextView,
  Text,
  StyleSheet
} from 'react-native';
import Styles from './styles';
import { 
  Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input
} from 'native-base';

// import {connect} from 'react-redux';
// import {actionCreators} from "../../reducer/reducer";

export default class Home extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
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
            <View style={Styles.mapWrapper}>
              <MapView
                style={Styles.map}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                  }}
                  title="ahihi"
                  description="This is description"
                />
              </MapView>
            </View>

            


          </Content>
          {/*<Footer>
              <FooterTab>
                  <Button full>
                      <Text>Footer</Text>
                  </Button>
              </FooterTab>
          </Footer>*/}
      </Container>
    )
  }
}

// export default connect(mapStateToProps)(Home);