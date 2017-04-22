import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, List, ListItem, Radio  , Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
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
              <Text  style={Styles.primaryTextColor} >BÃI ĐẬU XE HEAVEN</Text>
            </ListItem>
            <ListItem >
              <Text> <Icon name='map-marker' /> 128 Điện Biên Phủ, Hồ Chí Minh.</Text>
            </ListItem>
            <ListItem>
              <Text><Icon name='clock-o' /> 7:00 sáng - 12:00 tối</Text>
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
                    <Text style={{ paddingLeft: 5 }}>SAU KHI RỜI BÃI</Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Radio />
                    <Text style={{ paddingLeft: 5 }}>TRƯỚC KHI ĐẾN BÃI</Text>
                  </Row>
                </Col>
              </Grid>
            </ListItem>
            <ListItem>
            
              <Text><Icon name='exclamation-circle' /> Với hình thức SAU KHI RỜI BÃI, đặt chỗ của bạn sẽ tự động hủy sau 5 phút nếu bạn không đến bãi đậu xe.</Text>
            </ListItem>
            <ListItem>
              <Button full success style={{flex : 1 }}>
                <Text style={Styles.whiteTextColor}>Hoàn thành</Text>
              </Button>
            </ListItem>
          </List>

        </Content>
      </Container>

    )
  }
}

// export default connect(mapStateToProps)(Home);