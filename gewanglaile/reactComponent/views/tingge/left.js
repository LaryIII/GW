import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
import AllSong from './allsong';
import StarVIP from './starvip';
import ScrollableTabView from 'react-native-scrollable-tab-view';
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

var Left = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

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
        <View style={styles.banner}>
          <Image style={styles.fengmian} resizeMode={'contain'} source={require('image!b_default')}>
            <View style={styles.guanzhu}>
              <Text style={styles.guanzhutext}>已关注</Text>
            </View>
          </Image>
        </View>
        <ScrollableTabView style={styles.container} renderTabBar={() =><JRWTabBar />}>
          <AllSong tabLabel="全部歌曲" />
          <StarVIP tabLabel="送星嘉宾" />
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
    width:Dimensions.get('window').width,
    alignItems: 'center',
  },
  bold1: {
    fontSize: 14,
    color: '#fff',
  },
  info1: {
    fontSize: 12,
  },
  fengmian:{
    width:Dimensions.get('window').width,
    height:180,
    backgroundColor:'#000',
  },
  guanzhu:{
    position:'absolute',
    bottom:20,
    right:15,
    borderRadius:3,
    borderWidth:1,
    borderColor:'#fff',
    paddingTop:3,
    paddingBottom:3,
    paddingLeft:6,
    paddingRight:6,
  },
  guanzhutext:{
    color:'#fff',
    fontSize:12,
  },
});

module.exports = Left;
