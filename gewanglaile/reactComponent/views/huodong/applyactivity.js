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

var ApplyActivity = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  _apply:function(){
    console.log('申请活动');
  },
  render: function(){
    return (
      <View style={styles.bigcontainer}>
        <ScrollView style={styles.container}>
          <View style={styles.top}>
            <View style={styles.row}>
              <Text style={styles.rowtext}>活动名称: 南京好声音晋级赛第一场</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowtext}>活动日期: 3月16日</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowtext}>活动费用: AA</Text>
            </View>
            <View style={[styles.row,{flexDirection:'row'}]}>
              <Text style={styles.rowtext}>参加人数: </Text>
              <TouchableOpacity>
                <Image resizeMode={'contain'} style={styles.minus} source={require('./../../res/huodong/minus.png')}></Image>
              </TouchableOpacity>
              <Text style={styles.rowtext}> 1 </Text>
              <TouchableOpacity>
                <Image resizeMode={'contain'} style={styles.plus} source={require('./../../res/huodong/plus.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowtext}>活动地址: 孵鹰大厦C座楼下</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowtext}>联系人手机号: 18934825482</Text>
            </View>
            <View style={styles.banner}>
              <Image resizeMode={'contain'} style={styles.bannerimg} source={require('./../../res/common/ktv.jpg')}></Image>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={[styles.row,{marginBottom:10,}]}>
              <Text style={styles.rowtext}>报名留言: </Text>
            </View>
            <TextInput multiline={true} style={styles.textarea} placeholder="在这里留言(最多可输入150字)" placeholderTextColor="#303055" />
          </View>
          <TouchableOpacity style={styles.btn} onPress={this._apply}>
            <View style={styles.btnview}>
              <Text style={styles.btntext}>确定</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  top:{
    marginTop:5,
    borderBottomWidth:1,
    borderBottomColor:'#fff',
  },
  banner:{
    position:'absolute',
    top:25,
    right:30,
  },
  bannerimg:{
    width:130,
    height:100,
    borderColor:'#fff',
    borderWidth:1
  },
  bottom:{
    marginTop:15,
  },
  row:{
    marginLeft:30,
    marginRight:30,
    marginBottom:15,
  },
  rowtext:{
    color:'#fff',
    fontSize:14,
  },
  textarea:{
    borderWidth:1,
    borderColor:'#fff',
    marginLeft:30,
    marginRight:30,
    width:Dimensions.get('window').width-60,
    color:'#fff',
    height:150,
    marginBottom:15,
    padding:5,
    fontSize:14,
  },
  btn:{
    alignItems:'center',
    justifyContent:'center',
  },
  btnview:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#303055',
    width:85,
    height:42,
    borderColor:'#fff',
    borderWidth:1,
    borderRadius:4,
  },
  btntext:{
    fontSize:14,
    color:'#fff',
  },
  minus:{
    width:18,
    height:18,
  },
  plus:{
    width:18,
    height:18,
  }
});

module.exports = ApplyActivity;
