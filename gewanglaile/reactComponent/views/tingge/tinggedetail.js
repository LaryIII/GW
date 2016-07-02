/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Left from './left';
import Center from './center';
import Right from './right';
import JRWTabBar from './../common/jrwtabbar';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  ActivityIndicatorIOS,
  AsyncStorage,
  RefreshControl,
} from 'react-native';

var TingeDetail = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  _gotoImgDetail:function(id,type){

  },

  render: function(){
    return (
      <View style={styles.bigcontainer}>
        <ScrollableTabView initialPage={1} style={styles.container} renderTabBar={() =><JRWTabBar style={{height:0}} />}>
          <Left tabLabel="1" onBack={()=>{
            this.props.navigator.pop();
          }} />
          <Center tabLabel="2" onBack={()=>{
            this.props.navigator.pop();
          }}/>
          <Right tabLabel="3" />
        </ScrollableTabView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
    backgroundColor:'#000154',
  },
  container:{
    flex:1,
    backgroundColor:'#000154',
  },
});


module.exports = TingeDetail;
