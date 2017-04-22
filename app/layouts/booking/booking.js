import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, List, ListItem, Radio } from 'native-base';
import DatePicker from 'react-native-datepicker';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  View, Text, Image
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
                  <Col><DatePicker mode='date' /></Col>
                  <Col><DatePicker mode='date' /></Col>
                </Row>
                <Row>
                  <Col><DatePicker mode='time' iconSource={require('./clock.png')} /></Col>
                  <Col><DatePicker mode='time' iconSource={require('./clock.png')} /></Col>
                </Row>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text>KÍCH THƯỚC XE</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Col size={2} >
                  <Image style={{ width: 'auto', height: 20 }} source={require('./standard.png')} />
                </Col>
                <Col size={8}>
                  <Text style={{ paddingLeft: 5 }}>Thông thường</Text>
                  <Text style={{ paddingLeft: 5 }}>(Coupe, Sedan, Wagon, Hatchback)</Text>
                </Col>
                <Col size={1} ><Radio selected={true} /></Col>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid>
                <Col size={2} >
                  <Image style={{ width: 'auto', height: 20 }} source={require('./oversize.png')} />
                </Col>
                <Col size={8}>
                  <Text style={{ paddingLeft: 5 }}>Trung bình</Text>
                  <Text style={{ paddingLeft: 5 }}>(SUV, Crossover, Minivan)</Text>
                </Col>
                <Col size={1} ><Radio /></Col>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid>
                <Col size={2} >
                  <Image style={{ width: 'auto', height: 20 }} source={require('./supersize.png')} />
                </Col>
                <Col size={8}>
                  <Text style={{ paddingLeft: 5 }}>Lớn</Text>
                  <Text style={{ paddingLeft: 5 }}>(Truck/Van)</Text>
                </Col>
                <Col size={1} ><Radio /></Col>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text> HÌNH THỨC THANH TOÁN </Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Col>
                  <Row>
                    <Radio selected={true} />
                    <Text style={{ paddingLeft: 5 }}>Sau khi rời bãi</Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Radio />
                    <Text style={{ paddingLeft: 5 }}>Thanh toán trước</Text>
                  </Row>

                </Col>




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