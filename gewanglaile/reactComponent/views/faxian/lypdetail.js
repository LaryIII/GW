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

var LYPDetail = React.createClass({
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
            <Text style={styles.rowtext}>南京艺术学院简称“南艺”，是中国独立建制创办最早并延续至今办学实力最雄厚的高等艺术学府，中国六大艺术学院之一，江苏省唯一的综合性艺术院校，国家文化部与江苏省政府省部共建大学。
南京艺术学院的前身是1912年中国美术教育的奠基人刘海粟先生约同画友创办的上海美术图画院，1930年更名为上海美术专科学校，由蔡元培先生任上海美专董事局主席，1959年定名为南京艺术学院。已发展成为在国内外卓有影响的综合性高等艺术学府，拥有多学科、本硕博多层次教育体系的新型综合性艺术院校。</Text>
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

module.exports = LYPDetail;
