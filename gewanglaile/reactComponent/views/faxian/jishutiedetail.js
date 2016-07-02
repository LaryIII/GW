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

var JishutieDetail = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  _share:function(){

  },
  render: function(){
    return (
      <View style={styles.bigcontainer}>
        <View style={styles.header}>
          <View style={styles.leftview}>
            <TouchableOpacity onPress={()=>this.props.navigator.pop()}>
              <View style={styles.leftbtn}>
                <Image resizeMode={'contain'} style={styles.backicon} source={require('image!back')}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.centerview}>
            <Text style={styles.centertext}>技术贴详情</Text>
          </View>
          <View style={styles.rightview}>
            <TouchableOpacity onPress={this._share}>
              <View style={styles.rightbtn}>
                <Image resizeMode={'contain'} style={styles.shareicon} source={require('image!share')}></Image>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <Text style={styles.tietext}>南京艺术学院简称“南艺”，是中国独立建制创办最早并延续至今办学实力最雄厚的高等艺术学府，中国六大艺术学院之一，江苏省唯一的综合性艺术院校，国家文化部与江苏省政府省部共建大学。
南京艺术学院的前身是1912年中国美术教育的奠基人刘海粟先生约同画友创办的上海美术图画院，1930年更名为上海美术专科学校，由蔡元培先生任上海美专董事局主席，1959年定名为南京艺术学院。已发展成为在国内外卓有影响的综合性高等艺术学府，拥有多学科、本硕博多层次教育体系的新型综合性艺术院校。</Text>
          <Image resizeMode={'cover'} style={styles.tieimg} source={require('./../../res/common/ktv.jpg')}></Image>
        </ScrollView>
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
    marginTop:-20,
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:40,
  },
  tietext:{
    color:'#252525',
    fontSize:12,
  },
  tieimg:{

  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:64,
    backgroundColor:'#000036',
  },
  leftview:{
    position:'absolute',
    top:0,
    left:0,
    paddingTop:30,
    paddingLeft:12
  },
  leftbtn:{

  },
  backicon:{
    width:9,
    height:15,
  },
  centerview:{
    marginTop:10,
  },
  centertext:{
    fontSize:17,
    color:'#fff',
  },
  rightview:{
    position:'absolute',
    top:0,
    right:0,
    paddingTop:30,
    paddingRight:12
  },
  rightbtn:{

  },
  shareicon:{
    width:16,
    height:15
  }
});

module.exports = JishutieDetail;
