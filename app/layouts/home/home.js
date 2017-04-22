/**
 * Created by AnTran on 4/22/17.
 */
import React, { Component } from 'react';

import {
  View, TextView, Text, ListView, TouchableOpacity, Image
} from 'react-native';
import Styles from './styles';
import { 
  Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input
} from 'native-base';
import Images from '../../config/Images'
import Map from './../../components/map';
import ParkingInfo from './../parkinginfo/ParkingInfo';
import ReservedList from './../reserved/ReservedList'
import ParkingPopup from './../../components/parkingpopup/ParkingPopup'
import Search from './../search/search';
import _ from 'lodash';

import {connect} from 'react-redux';
import {actionCreators} from "../../reducer/reducer";

import Drawer from 'react-native-drawer'

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 0},
}

class Home extends Component {
  DEFAULT_DESTINATION = {
    latitude: 10.7782422,
    longitude: 106.7012126
  };

  constructor (props) {
    super(props)

    this.onMenuItemPress = this.onMenuItemPress.bind(this)
    this._onClickPopup = this._onClickPopup.bind(this)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
      menuList: ds.cloneWithRows([]),
      currentId: 1,
    }
  }

  componentDidMount() {
    this.setState({
      menuList: this.state.menuList.cloneWithRows([{icon: Images.personIcon, title: 'Thông tin cá nhân', id: 1},
        {icon: Images.reservedIcon, title: 'Dach sách đặt chỗ', id: 2},
        {icon: Images.settingIcon, title: 'Cài đặt', id: 3},
        {icon: Images.helpIcon, title: 'Trợ giúp', id: 4}])
    })
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  onMenuItemPress(id, navigator) {
    this.closeControlPanel()
    this.setState({
      currentId: id
    })
    switch (id) {
      case 1:
        // this.getHomeTimeline()
        break
      case 2:
        // this.getUserTimeline()
        navigator.push({
          title: "ReservedList",
          component: ReservedList
        });
        break
      default:
        return
    }
    // this.getUserTimeline()
  }

  render() {

    const {navigator, dispatch} = this.props;
    const destination = _.get(
      this.props, ['location', 'destination'], this.DEFAULT_DESTINATION
    );

    let controlPanel = (<View style={Styles.panel}>
      <View style={Styles.panelTop}>
        {/*<Image style={Styles.avatar}*/}
               {/*source={{uri: this.state.userInfo.profile_image_url_https}}/>*/}
        <Text style={Styles.name}>Go Parking</Text>
      </View>
      <ListView
        style={Styles.panelBody}
        dataSource={this.state.menuList}
        enableEmptySections={true}
        renderRow={(rowData) => <TouchableOpacity onPress={() => this.onMenuItemPress(rowData.id, navigator)}
                                                  style={Styles.itemMenu}>
          <Image style={Styles.iconMenu}
                 source={rowData.icon}/>
          <Text style={Styles.titleMenu}>{rowData.title}</Text>
        </TouchableOpacity>}
        renderSeparator={this.renderMenuSeparator}
      />
    </View>)
    let mainContent =
      (<View style={{flex: 1}}>
        <Header style={{backgroundColor: "#00B386"}}>
          <Left>
            <Button transparent onPress={this.openControlPanel}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Right>
            <Button onPress={() => {
              this.onSearchBtnPress(navigator);
            }} transparent>
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

        <Content style={{flex: 1}}>
          <Map navigator={navigator}
               destination={destination}
               onSelectParkingService={this._onSelectParkingService} 
               onMyLocationBtnPress={this.onMyLocationBtnPress}
          />
        </Content>
        {/*<Footer>
         <FooterTab>
         <Button full>
         <Text>Footer</Text>
         </Button>
         </FooterTab>
         </Footer>*/}

        <ParkingPopup ref={(ref) => this._popup = ref}
                      onClickPopup={() => this._onClickPopup(navigator)} />
      </View>)


    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={controlPanel}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        {mainContent}
      </Drawer>
    )
  }

  onMyLocationBtnPress = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.storeLocation({
      destination: this.DEFAULT_DESTINATION
    }));
  }

  _onSelectParkingService = () => {
    // const {navigator} = this.props;
    
    // navigator.push({
    //   title: "Parking Info",
    //   component: ParkingInfo
    // });
    // this.setState({
    //   parkingPopup: <ParkingPopup/>
    // })
    this._popup.open()
  }

  renderMenuSeparator(sectionID, rowID) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: .5,
          backgroundColor: 'black',
          marginLeft: 20,
          marginRight: 20
        }}
      />
    )
  }

  _onClickPopup(navigator) {
    // alert("click roi ne")

    navigator.push({
      title: "Parking Info",
      component: ParkingInfo
    })
  }

  onSearchBtnPress = (navigator) => {
    navigator.push({
      title: "Search",
      component: Search
    })
  }
}

const mapStateToProps = (state) => {
  return {
    location : state.searchReducer.params
  }
}

export default connect(mapStateToProps)(Home);