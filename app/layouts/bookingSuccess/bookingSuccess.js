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

// import {connect} from 'react-redux';
// import {actionCreators} from '../../reducer/reducer';
import Home from './../home/home';

export default class BookingSuccess extends Component {

  constructor(props) {
    super(props)
  }
  onBackPress(navigator) {
    navigator.pop();
  }
  onClosePress() {
    const {navigator} = this.props;
    navigator.push({
      title: "Home",
      component: Home
    });
  }
  render() {
    return (
      <Container >
        <Header backgroundColor="#1d7d12">
          <Left />
          <Body>
            <Title style={{ fontSize: 15 }}>Thông tin đặt chỗ</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.onClosePress()}>
              <Icon name='md-close' />
            </Button>
          </Right>
        </Header>

        <Content>
          <Text style={Styles.successLabel}>ĐẶT CHỖ THÀNH CÔNG</Text>
          <List>
            <ListItem itemDivider>
              <Text style={Styles.boldLabel}  >Bãi đậu xe</Text>
            </ListItem>
            <ListItem>
              <Text>HEAVEN,128 Điện Biên Phủ, Hồ Chí Minh.</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={Styles.boldLabel}>Thời gian đặt</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Text >9:30 sáng ngày 20/04/2017 đến</Text>
                </Row>
                <Row>
                  <Text >12:50 chiều ngày 20/04/2017</Text>
                </Row>
              </Grid>
            </ListItem>
            <ListItem itemDivider>
              <Text style={Styles.boldLabel}>Hình thức thanh toán</Text>
            </ListItem>
            <ListItem>
              <Grid>
                <Row>
                  <Text>TRƯỚC KHI ĐẾN BÃI</Text>
                </Row>
                <Row>
                  <Text><FontAwesomeIcon name='exclamation-circle' /> Với hình thức SAU KHI RỜI BÃI, đặt chỗ của bạn sẽ tự động hủy sau 5 phút nếu bạn không đến bãi đậu xe.</Text>
                </Row>
                <Row style={Styles.centerItem} >
                  <Image style={Styles.qrcode} source={require('./qrcode.jpg')} />
                </Row>
              </Grid>
            </ListItem>
            <ListItem>
              <Button full success iconLeft style={{ flex: 1 }}>
                <Icon name='ios-navigate' />
                <Text style={Styles.whiteTextColor}>Chỉ đường</Text>
              </Button>


            </ListItem>
          </List>
        </Content>
      </Container>

    )
  }
}

// export default connect(mapStateToProps)(Home);