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

var AllSong = React.createClass({
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
            <Text style={styles.order}>20</Text>
            <Text style={styles.songname}>月亮代表我的心</Text>
            <Text style={styles.songdesc}>一二三四五六七</Text>
            <Image style={styles.play} resizeMode={'contain'} source={require('image!stop')}></Image>
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
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
    alignItems:'center',
  },
  order:{
    color:'#fff',
    fontSize:15,
    marginRight:12,
  },
  songname:{
    color:'#008cf2',
    fontSize:15,
  },
  songdesc:{
    position:'absolute',
    top:13,
    right:15+25,
    color:'#008cf2',
    fontSize:15,
  },
  play:{
    position:'absolute',
    top:13,
    right:15,
    width:15,
    height:16
  }
});


module.exports = AllSong;
