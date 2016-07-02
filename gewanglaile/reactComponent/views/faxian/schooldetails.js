/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SchoolDetail from './schooldetail';
import SchoolCourse from './schoolcourse';
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

var SchoolDetails = React.createClass({
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
        <ScrollableTabView style={styles.container} renderTabBar={() =><JRWTabBar />}>
          <SchoolDetail tabLabel="详情" />
          <SchoolCourse ref="receive" tabLabel="课程"/>
        </ScrollableTabView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
    backgroundColor:'#fff',
  },
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
});


module.exports = SchoolDetails;
