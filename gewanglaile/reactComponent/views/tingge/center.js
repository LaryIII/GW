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
} from 'react-native';

var Center = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  _gotoback:function(){
    console.log(11111);
    this.props.onBack();
  },
  render: function(){
    return (
      <View style={styles.bigcontainer} {...this.props}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.leftview} onPress={this._gotoback}>
            <View style={styles.leftbtn}>
              <Image resizeMode={'contain'} style={styles.backicon} source={require('image!back')}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.text1}>
            <Text style={styles.bold1}>月亮代表我的心 - 刘宝仲</Text>
          </View>
          <TouchableOpacity onPress={this._gotoSetting} style={styles.settingbtn}>
            <View style={styles.setting}>
              <Image style={styles.icon1} resizeMode={'contain'} source={require('image!tingge_share')}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.toolbar}>
            <TouchableOpacity style={styles.toolbtn}>
              <Image style={styles.toolicon} resizeMode={'contain'} source={require('image!meihua')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbtn}>
              <Image style={styles.toolicon} resizeMode={'contain'} source={require('image!yellow_star')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbtn}>
              <Image style={styles.btoolicon} resizeMode={'contain'} source={require('image!b_star')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbtn}>
              <Image style={styles.toolicon} resizeMode={'contain'} source={require('image!b_star')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolbtn}>
              <Image style={styles.toolicon} resizeMode={'contain'} source={require('image!tingge_shoucang')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.huabian_top}>
            <Image style={styles.huabianicon} resizeMode={'contain'} source={require('image!huabian_down')}></Image>
          </View>
          <View style={styles.fengmianbox}>
            <Image style={styles.fengmian} resizeMode={'contain'} source={require('image!b_default')}></Image>
          </View>
          <View style={styles.huabian_down}>
            <Image style={styles.huabianicon} resizeMode={'contain'} source={require('image!huabian')}></Image>
          </View>
          <View style={styles.infobox}>
            <View style={styles.leftbox}>
              <Image style={styles.staricon} resizeMode={'contain'} source={require('image!blue_star')}></Image>
              <View style={styles.borderbox}>
                <Text style={styles.bordernum}>1245</Text>
              </View>
            </View>
            <View style={styles.centerbox}>
              <Text style={styles.nickname}>王力宏</Text>
              <Image style={styles.avataricon} resizeMode={'contain'} source={require('image!photo')}></Image>
              <Image style={styles.huabian2icon} resizeMode={'contain'} source={require('image!avatar_huawen')}></Image>
            </View>
            <View style={styles.rightbox}>
              <Image style={styles.shoucangicon} resizeMode={'contain'} source={require('image!shoucang_num')}></Image>
              <View style={styles.borderbox}>
                <Text style={styles.bordernum}>1245</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.playbar}>
          <TouchableOpacity style={styles.playbtn}>
            <Image style={styles.playicon} resizeMode={'contain'} source={require('image!xunhuan')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playbtn}>
            <Image style={styles.playicon} resizeMode={'contain'} source={require('image!prev')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playbtn}>
            <Image style={styles.bplayicon} resizeMode={'contain'} source={require('image!bofangbtn')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playbtn}>
            <Image style={styles.playicon} resizeMode={'contain'} source={require('image!tingge_next')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playbtn}>
            <Image style={styles.playicon} resizeMode={'contain'} source={require('image!tingge_list')}></Image>
          </TouchableOpacity>
        </View>
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
    marginTop:0,
  },
  leftview:{
    position:'absolute',
    top:25,
    left:0,
    paddingLeft:12,
    width:9,
    height:15,
  },
  leftbtn:{
  },
  backicon:{
    width:9,
    height:15,
  },
  content: {
    paddingTop: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('window').width,
    backgroundColor:'#000036',
  },
  settingbtn:{
    flex:1,
    position:'absolute',
    justifyContent: 'center',
    right:10,
    top:7,
    width:20,
    height:50,
  },
  setting:{

  },
  icon1:{
    flex:1,
    width:16,
    height:16,
  },
  canceltext:{
    color:'#666',
    fontSize:15,
  },
  text1: {
    // width:Dimensions.get('window').width,
    alignItems: 'center',
  },
  bold1: {
    fontSize: 14,
    color: '#fff',
  },
  info1: {
    fontSize: 12,
  },
  playbar:{
    width:Dimensions.get('window').width,
    height:70,
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  playbtn:{
    flex:1,
    alignItems:'center',
  },
  playicon:{
    width:23,
    height:18,
  },
  toolbar:{
    width:Dimensions.get('window').width,
    height:40,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#000',
  },
  toolbtn:{
    flex:1,
    alignItems:'center',
  },
  toolicon:{
    width:23,
    height:18,
  },
  huabian_top:{
    width:Dimensions.get('window').width,
  },
  huabian_down:{
    width:Dimensions.get('window').width,
  },
  huabianicon:{
    width:Dimensions.get('window').width,
  },
  fengmianbox:{

  },
  fengmian:{
    width:Dimensions.get('window').width,
    height:180,
    backgroundColor:'#000',
  },

  infobox:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  leftbox:{
    marginTop:40,
    width:Dimensions.get('window').width/3,
    justifyContent:'center',
    alignItems:'center',
  },
  centerbox:{
    width:Dimensions.get('window').width/3,
    justifyContent:'center',
    alignItems:'center',
  },
  rightbox:{
    marginTop:40,
    width:Dimensions.get('window').width/3,
    justifyContent:'center',
    alignItems:'center',
  },
  staricon:{

  },
  borderbox:{
    marginTop:10,
    borderTopWidth:0.5,
    borderTopColor:'#0033cc',
    borderBottomWidth:0.5,
    borderBottomColor:'#0033cc',
    width:64,
    paddingTop:5,
    paddingBottom:5,
    alignItems:'center',
    justifyContent:'center',
  },
  bordernum:{
    color:'#33ccff',
    fontSize:12,
  },
  nickname:{
    color:'#ffeeab',
    fontSize:18,
  },
  avataricon:{

  },
  huabian2icon:{

  },
  shoucangicon:{

  }
});

module.exports = Center;
