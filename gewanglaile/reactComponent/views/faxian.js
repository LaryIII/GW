/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './utils';
import Service from './service';
import Births from './faxian/births';
import Place from './faxian/place';
import Luyinpeng from './faxian/luyinpeng';
import Jishutie from './faxian/jishutie';
import Liangge from './faxian/liangge';
import School from './faxian/school';

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

var Faxian = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  _gotoBirths:function(){
    this.props.navigator.push({
      title: '生日榜',
      component: Births,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _gotoPlace:function(){
    this.props.navigator.push({
      title: '聚会场所',
      component: Place,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _gotoLuyinpeng:function(){
    this.props.navigator.push({
      title: '录音棚',
      component: Luyinpeng,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _gotoSchool:function(){
    this.props.navigator.push({
      title: '学校',
      component: School,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _gotoJishutie:function(){
    this.props.navigator.push({
      title: '技术贴',
      component: Jishutie,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _gotoLiangge:function(){
    this.props.navigator.push({
      title: '靓歌',
      component: Liangge,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  render: function(){

    return (
      <View style={styles.bigcontainer}>
        <ScrollView style={styles.container}>
          <View style={styles.line}>
            <TouchableOpacity onPress={this._gotoBirths}>
              <View style={styles.td1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('image!birthday')}></Image>
                <Text style={styles.text}>生日</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._gotoPlace}>
              <View style={styles.td2}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('image!place')}></Image>
                <Text style={styles.text}>场所</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity onPress={this._gotoLuyinpeng}>
              <View style={styles.td1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('image!luyinpeng')}></Image>
                <Text style={styles.text}>录音棚</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._gotoJishutie}>
              <View style={styles.td2}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('image!techtie')}></Image>
                <Text style={styles.text}>技术贴</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line}>
            <TouchableOpacity onPress={this._gotoLiangge}>
              <View style={styles.td1}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('image!liangge')}></Image>
                <Text style={styles.text}>靓歌</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._gotoSchool}>
              <View style={styles.td2}>
                <Image style={styles.icon} resizeMode={'contain'} source={require('image!school')}></Image>
                <Text style={styles.text}>学校</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    marginTop:20,
  },
  line:{
    flex:1,
    flexDirection:'row',
  },
  td1:{
    width:120,
    height:120,
    borderWidth:0.5,
    borderColor:'#fff',
    alignItems:'center',
    marginLeft:(Dimensions.get('window').width-240)/3,
    marginBottom:30,
  },
  td2:{
    width:120,
    height:120,
    borderWidth:0.5,
    borderColor:'#fff',
    alignItems:'center',
    marginLeft:(Dimensions.get('window').width-240)/3,
    marginBottom:30,
  },
  icon:{
    marginTop:20,
    marginBottom:20,
  },
  text:{
    fontSize:18,
    color:'#fff',
  }
});

module.exports = Faxian;
