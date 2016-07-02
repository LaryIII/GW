'use strict'

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  TouchableHighlight,
} from 'react-native';

var StarVIP = React.createClass({
  getInitialState: function(){
    var items = [];
    return {
      items: items,
    };
  },
  render() {
    return (
      <View style={styles.bigcontainer}>
         <View style={styles.item}>
            <Image style={styles.icon} resizeMode={'contain'} source={require('image!circle_avatar')}></Image>
            <Text style={styles.songdesc}>一二三四五六七</Text>
            <Text style={styles.time}>2016/03/16</Text>
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
  item:{
    height:44,
    borderBottomWidth:1,
    borderBottomColor:'#666698',
    paddingLeft:25,
    paddingRight:15,
    flexDirection:'row',
    alignItems:'center',
  },
  icon:{
    width:32,
    height:32,
    borderRadius:16,
    marginRight:30,
  },
  songdesc:{
    color:'#fff',
    fontSize:15,
  },
  time:{
    position:'absolute',
    top:13,
    right:30,
    color:'#fff',
    fontSize:15,
  }
});


module.exports = StarVIP;
