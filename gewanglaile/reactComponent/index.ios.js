'use strict';

import React, { Component } from 'react';
import Xiutu from './views/xiutu';
import Huodong from './views/huodong';
import Tingge from './views/tingge';
import Faxian from './views/faxian';
import Wode from './views/wode';
import Util from './views/utils';
import Service from './views/service';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Image,
  NavigatorIOS,
  AsyncStorage,
} from 'react-native';

var gewanglaile = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 0,
      notifCount: 0,
      presses: 0,
      data:{

      }
    };
  },
  componentDidMount:function(){
  },

  _addNavigator: function(component, title){
    var data = null;
    var display = false;
    var barTintColor = '#f9f9f9';
    if(title === '秀图'){
      // title = '';
      // display = true;
      // data = this.state.data;
      barTintColor = '#f3ea85';
    }
    if(title === '活动'){
      // display = true;
      // title = '';
      barTintColor = '#f9f9f9';
    }
    if(title === '听歌'){
      barTintColor = '#fff';
    }
    if(title === '发现'){
      // display = true;
      // title = '';
      barTintColor = '#f9f9f9';
    }
    if(title === '我的'){
      // display = true;
      // title = '';
      barTintColor = '#f9f9f9';
    }
    return <NavigatorIOS
      ref='nav'
      style={{flex:1}}
      barTintColor={barTintColor}
      titleTextColor="#333"
      tintColor="#333"
      translucent={false}
      navigationBarHidden={display}
      initialRoute={{
          component: component,
          title: title,
          passProps:{
            data: data
          },
        }}
      />;
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="#51a7ff"
        barTintColor="white">
        <TabBarIOS.Item
          icon={require('image!xiutu_normal')}
          title=""
          selected={this.state.selectedTab === 0}
          style={styles.tabbarItem}
          onPress={() => {
            this.setState({
              selectedTab: 0,
            });
          }}>
          {this._addNavigator(Xiutu, '秀图')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('image!huodong_normal')}
          title=""
          selected={this.state.selectedTab === 1}
          onPress={() => {
            this.setState({
              selectedTab: 1,
            });
          }}>
          {this._addNavigator(Huodong, '活动')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('image!tingge_normal')}
          title=""
          selected={this.state.selectedTab === 2}
          onPress={() => {
            this.setState({
              selectedTab: 2,
            });
          }}>
          {this._addNavigator(Tingge, '听歌')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('image!find_normal')}
          title=""
          selected={this.state.selectedTab === 3}
          onPress={() => {
            this.setState({
              selectedTab: 3,
            });
          }}>
          {this._addNavigator(Faxian, '发现')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('image!mine_normal')}
          title=""
          selected={this.state.selectedTab === 4}
          onPress={() => {
            this.setState({
              selectedTab: 4,
            });
          }}>
          {this._addNavigator(Wode, '我的')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  tabbarItem:{
    marginTop:-2
  }
});

AppRegistry.registerComponent('gewanglaile', () => gewanglaile);
