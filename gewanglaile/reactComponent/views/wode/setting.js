/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
import Feedback from './feedback';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

var Setting = React.createClass({
  getInitialState: function(){
    var userinfo = null;
    return {
      userinfo: userinfo,
    };
  },
  componentDidMount:function(){
    var that = this;
    AsyncStorage.getItem('userinfo',function(err,result){
      if(!err){
        userinfo = JSON.parse(result);
      }else{
        userinfo = null;
      }
      that.setState({
        userinfo: userinfo,
      });
    });
  },
  _gotoSM: function(){
    // this.props.navigator.push({
    //   title: '设置',
    //   component: Setting,
    //   navigationBarHidden:false,
    //   // backButtonTitle: "返回",
    //   // backButtonIcon: require('image!back'),
    //   leftButtonTitle: "返回",
    //   leftButtonIcon:require('image!back'),
    //   onLeftButtonPress: ()=>this.props.navigator.pop(),
    // });
  },
  _gotoFeedback:function(){
    this.props.navigator.push({
      title: '意见反馈',
      component: Feedback,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _quit: function(){
    var that = this;
    Util.get(Service.host + Service.logout, {sessionKey:userinfo.sessionKey}, function(data){
      console.log(data);
      if(data.code == 200){
        // 已安全退出：1、清除userinfo；2、页面返回到mine
        AsyncStorage.setItem('userinfo','',function(err){
          if(!err){
            that.props.events.emit('logout_success', {});
            that.props.navigator.pop();
          }
        })
      }else{

      }
    });
  },

  render: function(){
    var quitbtn = [];
    // if(this.state.userinfo && this.state.userinfo.sessionKey){
      quitbtn.push(
        <TouchableOpacity onPress={this._quit}>
          <View style={styles.applybtn}>
            <View style={styles.bluebtn}>
              <Text style={styles.bluebtntext}>安全退出</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    // }
    return (
      <View style={styles.bigcontainer}>
        <ScrollView style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={this._gotoSM}>
              <View style={[styles.item, {flexDirection:'row'}]}>
                <Text style={[styles.font,{flex:1}]}>版本声明</Text>
                <Image style={styles.arrow} resizeMode={'contain'} source={require('image!next')}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.item, {flexDirection:'row'}]}>
                <Text style={[styles.font,{flex:1}]}>新版本检测</Text>
                <Text style={styles.desc}>V1.1</Text>
                <Image style={styles.arrow} resizeMode={'contain'} source={require('image!next')}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:15,}}>
              <View style={[styles.item, {flexDirection:'row'}]}>
                <Text style={[styles.font,{flex:1}]}>关于我们</Text>
                <Image style={styles.arrow} resizeMode={'contain'} source={require('image!next')}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.item, {flexDirection:'row'}]}>
                <Text style={[styles.font,{flex:1}]}>常见问题</Text>
                <Image style={styles.arrow} resizeMode={'contain'} source={require('image!next')}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.item, {flexDirection:'row',}]}>
                <Text style={[styles.font,{flex:1}]}>客服热线</Text>
                <Text style={styles.desc,{marginRight:15,color:'#399bff',}}>400-988-8939</Text>
              </View>
            </TouchableOpacity>
          </View>
          {quitbtn}
        </ScrollView>
      </View>
    );
  },

  _loadPage: function(component, title){
    this.props.navigator.push({
      title: title,
      component: component,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },

  _clear: function(){
    this.props.navigator.pop();
    AsyncStorage.clear();
  }

});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
  },
  container:{
    flex:1,
    backgroundColor:'#000154',
  },
  item:{
    height:44,
    justifyContent: 'center',
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ddd',
    backgroundColor:'#fff',
    alignItems:'center',
  },
  font:{
    fontSize:15,
    marginLeft:15,
    marginRight:10,
  },
  wrapper:{
  },
  tag:{
    marginLeft:10,
    width:30,
    height:30,
  },
  desc:{
    textAlign:'right',
    marginRight:31,
    color:'#c0c0c0',
    fontSize:15,
  },
  arrow:{
    position:'absolute',
    top:16,
    right:15,
    width:6,
    height:11,
  },
  applybtn:{
    width:Dimensions.get('window').width,
    height:68,
    // borderTopWidth:0.5,
    // borderTopColor:'#dfdfdf',
    // backgroundColor:'#fff',
  },
  bluebtn:{
    backgroundColor:'#fff',
    borderRadius:5,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    height:40,
    justifyContent:'center',
    alignItems:'center',
  },
  bluebtntext:{
    color:'#333',
    fontSize:17,
  }
});

module.exports = Setting;
