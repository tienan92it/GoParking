import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, List, ListItem, Radio, Button, Header, Left, Body, Icon, Title, Right } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  View, Text, Image
} from 'react-native';
import Styles from './styles'
import BookingSuccess from './../bookingSuccess/bookingSuccess';

// import {connect} from 'react-redux';
// import {actionCreators} from '../../reducer/reducer';

export default class Booking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sizeCarRadioList: [true, false, false]
    }
  }
  onBackPress() {
    const {navigator} = this.props;
    navigator.pop();

  }
  changeSizeCarRadioList(index) {
    let currentSizeCarRadioList = this.state.sizeCarRadioList;
    currentSizeCarRadioList.fill(false);
    currentSizeCarRadioList[index] = true;
    this.setState({ sizeCarRadioList: currentSizeCarRadioList });
  }

  render() {
    return (
      <Container >
        <Header backgroundColor="#1d7d12">
          <Left>
            <Button transparent onPress={() => this.onBackPress(navigator)}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Đặt chỗ</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
            <ListItem itemDivider>
              <Text style={Styles.primaryTextColor} >BÃI ĐẬU XE HEAVEN</Text>
            </ListItem>
            <ListItem >
              <Text> <FontAwesomeIcon name='map-marker' /> 128 Điện Biên Phủ, Hồ Chí Minh.</Text>
            </ListItem>
            <ListItem>
              <Text><FontAwesomeIcon name='clock-o' /> 7:00 sáng - 12:00 tối</Text>
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
                <Col size={1} ><Radio onPress={() => { this.changeSizeCarRadioList(0) }} selected={this.state.sizeCarRadioList[0]} /></Col>
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
                <Col size={1} ><Radio onPress={() => { this.changeSizeCarRadioList(1) }} selected={this.state.sizeCarRadioList[1]} /></Col>
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
                <Col size={1} ><Radio onPress={() => { this.changeSizeCarRadioList(2) }} selected={this.state.sizeCarRadioList[2]} /></Col>
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

              <Text><FontAwesomeIcon name='exclamation-circle' /> Với hình thức SAU KHI RỜI BÃI, đặt chỗ của bạn sẽ tự động hủy sau 5 phút nếu bạn không đến bãi đậu xe.</Text>
            </ListItem>
            <ListItem>
              <Button onPress={this._onConfirmationBtnPress} full success style={{ flex: 1 }}>
                <Text style={Styles.whiteTextColor}>Hoàn thành</Text>
              </Button>
            </ListItem>
          </List>

        </Content>
      </Container>

    )
  }

  _onConfirmationBtnPress = () => {
    const {navigator} = this.props;
    navigator.push({
      title: "Booking preview",
      component: BookingSuccess
    })
  }
}

// export default connect(mapStateToProps)(Home);