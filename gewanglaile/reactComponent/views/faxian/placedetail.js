/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
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
  TextInput,
} from 'react-native';

var PlaceDetail = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  render: function(){
    return (
      <View style={styles.bigcontainer}>
        <ScrollView style={styles.container}>
          <View style={styles.banner}>
            <Image resizeMode={'cover'} style={styles.bannerimg} source={require('./../../res/common/ktv.jpg')}></Image>
          </View>
          <View style={[styles.row,{marginTop:5,}]}>
            <Text style={styles.rowtext}>家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)家庭聚会(12)</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowtext}>025-88886666</Text>
          </View>
          <View style={[styles.row,{marginBottom:0}]}>
            <Text style={styles.rowtext}>地址: 秦淮区苜蓿园后标营88号</Text>
          </View>
          <View style={styles.mapview}>
            <Image resizeMode={'cover'} style={styles.mapimg} source={require('./../../res/common/ktv.jpg')}></Image>
          </View>
        </ScrollView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
    backgroundColor:'#c0c0c0',
  },
  container:{
    flex:1,
  },
  banner:{

  },
  bannerimg:{
    width:Dimensions.get('window').width,
    height:190,
  },
  row:{
    marginBottom:5,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#fff',
  },
  rowtext:{
    color:'#110e10',
    fontSize:15,
  },
  mapview:{

  },
  mapimg:{
    width:Dimensions.get('window').width,
    height:200,
  }
});

module.exports = PlaceDetail;
