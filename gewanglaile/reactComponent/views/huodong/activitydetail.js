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

var ActivityDetail = React.createClass({
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
          <View style={styles.joinnum}>
            <Text style={styles.joinnumtext}>3/100</Text>
            <Image resizeMode={'contain'} style={styles.joinavatar} source={require('./../../res/common/ktv.jpg')}></Image>
            <Image resizeMode={'contain'} style={styles.joinavatar} source={require('./../../res/common/ktv.jpg')}></Image>
            <Image resizeMode={'contain'} style={styles.joinavatar} source={require('./../../res/common/ktv.jpg')}></Image>
            <Image resizeMode={'contain'} style={styles.joinavatar} source={require('./../../res/common/ktv.jpg')}></Image>
          </View>
          <View style={styles.mapview}>
            <View style={styles.map}>
              <Image resizeMode={'contain'} style={styles.mapimg} source={require('./../../res/common/ktv.jpg')}></Image>
            </View>
            <View style={[styles.row,{marginTop:3}]}>
              <Image resizeMode={'contain'} style={styles.innericon} source={require('image!locate_active')}></Image>
              <Text style={styles.innertext}>江苏省南京市浦口区南京软件园孵鹰大厦C座楼下</Text>
            </View>
          </View>
          <View style={styles.orgs}>
            <View style={styles.row}>
              <Image resizeMode={'contain'} style={styles.innericon} source={require('image!zuzhizhe2')}></Image>
              <Text style={styles.innertext}>组织者: 陶晓进</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <View style={styles.row}>
              <Image resizeMode={'contain'} style={styles.innericon} source={require('image!huodong_detail')}></Image>
              <Text style={styles.innertext}>详情</Text>
            </View>
            <Text style={styles.detailtext}>详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</Text>
          </View>
        </ScrollView>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btntext}>报名申请</Text>
          </View>
        </TouchableOpacity>
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
    marginTop:3,
    marginBottom:60,
  },
  banner:{
    marginTop:2,
    marginBottom:5,
    marginLeft:30,
    marginRight:30,

  },
  bannerimg:{
    width:Dimensions.get('window').width-60,
    height:190,
    borderWidth:1,
    borderColor:'#fff',
  },
  joinnum:{
    borderTopWidth:1,
    borderTopColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#fff',
    height:48,
    alignItems:'center',
    flexDirection:'row',
  },
  joinnumtext:{
    color:'#fff',
    fontSize:15,
    marginRight:5,
    marginLeft:10,
  },
  joinavatar:{
    width:36,
    height:36,
    borderRadius:18,
    marginRight:5,
  },
  mapview:{
    marginTop:5,
  },
  map:{
    marginLeft:30,
    marginRight:30,
  },
  mapimg:{
    width:Dimensions.get('window').width-60,
    height:150,
    borderColor:'#fff',
    borderWidth:1,
  },
  row:{
    height:30,
    marginLeft:30,
    marginRight:30,
    alignItems:'center',
    flexDirection:"row",
  },
  innericon:{
    width:19,
    height:26,
    marginRight:2,
  },
  innertext:{
    fontSize:14,
    color:'#fff',
    width:Dimensions.get('window').width-60-22,
  },
  detailtext:{
    marginLeft:30,
    marginRight:30,
    width:Dimensions.get('window').width-60,
    fontSize:14,
    color:'#fff',
  },
  btn:{
    position:'absolute',
    bottom:0,
    left:0,
    height:40,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  btntext:{
    color:'#fa3354',
    fontSize:15,
  }
});

module.exports = ActivityDetail;
