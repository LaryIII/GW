/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './utils';
import Service from './service';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import MyZuopin from './wode/myzuopin';
import MyHuodong from './wode/myhuodong';
import MyFans from './wode/myfans';
import MyFocus from './wode/myfocus';
import MyPics from './wode/mypics';
import JRWTabBar from './common/jrwtabbar';
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

var Wode = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },

  render: function(){

    return (
      <View style={styles.bigcontainer}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Image style={styles.icon} resizeMode={'contain'} source={require('image!circle_avatar')}></Image>
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>陈蕊 ♀ (881823)</Text>
            <Text style={styles.locate}>南京 双鱼座</Text>
            <Text style={styles.desc}>生如夏花之绚烂，死如秋叶之静美</Text>
          </View>
          <View style={styles.guanzhu}>
            <Text style={styles.guanzhutext}>已关注</Text>
          </View>
        </View>
        <ScrollableTabView style={styles.scroll} renderTabBar={() =><JRWTabBar />}>
          <MyZuopin tabLabel="作品" />
          <MyHuodong tabLabel="活动" />
          <MyFans tabLabel="粉丝" />
          <MyFocus tabLabel="关注" />
          <MyPics tabLabel="相册" />
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
  scroll:{
    marginTop:5,
    backgroundColor:'rgba(0,0,0,0)',
  },
  header:{
    flexDirection:'row',
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
  },
  avatar:{
    marginRight:10,
  },
  icon:{
    width:75,
    height:75,
    borderRadius:37.5,
  },
  info:{
    marginTop:5,
    width:Dimensions.get('window').width-30-60,
    height:75,
  },
  name:{
    flex:1,
    fontSize:15,
    color:'#fff',
  },
  locate:{
    flex:1,
    fontSize:13,
    color:'#fff',
  },
  desc:{
    flex:1,
    fontSize:13,
    color:'#fff'
  },
  guanzhu:{
    position:'absolute',
    top:20,
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
  }
});

module.exports = Wode;
