import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, List, ListItem } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  View, Text
} from 'react-native';
import Styles from './styles'

// import {connect} from 'react-redux';
// import {actionCreators} from '../../reducer/reducer';

export default class Booking extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container >
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>PARKING HEAVEN</Text>
            </ListItem>
            <ListItem >
              <Text> <Icon name='navigate' /> 128 Dien Bien Phu, Ho Chi Minh</Text>
            </ListItem>
            <ListItem>
              <Text><Icon name='time' /> 7:00 sáng - 12:00 tối</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>NGÀY GIỜ ĐẶT CHỖ </Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Col><DatePicker mode='date'  /></Col>
                  <Col><DatePicker mode='date' /></Col>
                </Row>
                <Row>
                  <Col><DatePicker mode='time' iconSource={ require('./clock.png')} /></Col>
                  <Col><DatePicker mode='time'  iconSource={ require('./clock.png')}/></Col>
                </Row>

              </Grid>


            </ListItem>
          </List>




          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>

    )
  }
}

// export default connect(mapStateToProps)(Home);