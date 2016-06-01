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

var MyZuopin = React.createClass({
  getInitialState: function(){
    var items = [];
    return {
      items: items,
    };
  },
  render() {
    return (
      <View style={styles.bigcontainer}>
        <View style={styles.add}>
          <Image resizeMode={'contain'} style={styles.addimg} source={require('image!mine_plus')}></Image>
          <Text style={styles.addtext}>我要上传新歌</Text>
        </View>
        <View style={styles.item}>
          <View style={styles.line}>
            <Text style={styles.geming}>如果这就是爱情</Text>
            <Text style={styles.time}>23小时前</Text>
          </View>
          <View style={styles.line}>
            <Image resizeMode={'contain'} style={styles.itemimg} source={require('image!tingge')}></Image>
            <Text style={styles.num}>204</Text>
            <Image resizeMode={'contain'} style={styles.itemimg} source={require('image!shoucang')}></Image>
            <Text style={styles.num}>120</Text>
            <Image resizeMode={'contain'} style={styles.itemimg} source={require('image!fyi')}></Image>
            <Text style={styles.num}>92</Text>
          </View>
        </View>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  bigcontainer:{
    backgroundColor:'rgba(0,0,0,0)',
    marginLeft:15,
    marginRight:15,
    marginTop:5,
  },
  add:{
    borderRadius:4,
    borderWidth:1,
    borderColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    height:65,
    marginBottom:5,
    alignItems:'center',
    justifyContent:'center',
  },
  addimg:{
    width:25,
    height:25,
    marginRight:10,
  },
  addtext:{
    fontSize:15,
    color:'#fff',
  },
  item:{
    borderRadius:4,
    borderWidth:1,
    borderColor:'#fff',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    height:65,
    marginBottom:5,
  },
  line:{
    flex:1,
    flexDirection:'row',
  },
  geming:{
    fontSize:14,
    color:'#fff',
  },
  time:{
    position:'absolute',
    top:0,
    right:0,
    fontSize:14,
    color:'#fff',
  },
  itemimg:{
    width:22,
    height:22,
  },
  num:{
    fontSize:14,
    color:'#fff',
    marginLeft:5,
    marginTop:2,
    marginRight:10,
  }
});


module.exports = MyZuopin;
