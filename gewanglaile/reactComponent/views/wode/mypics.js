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

var MyPics = React.createClass({
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
          </View>
         <Image resizeMode={'contain'} style={styles.itemimg} source={require('./../../res/common/ktv.jpg')}></Image>
         <Image resizeMode={'contain'} style={styles.itemimg} source={require('./../../res/common/ktv.jpg')}></Image>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'rgba(0,0,0,0)',
    paddingTop:10,
    paddingLeft:15,
    paddingRight:15,
  },
  add:{
    width:(Dimensions.get('window').width-30-10)/3,
    height:85,
    borderWidth:1,
    borderColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  addimg:{
    width:25,
    height:25,
  },
  itemimg:{
    width:(Dimensions.get('window').width-30-10)/3,
    height:85,
    borderWidth:1,
    borderColor:'#fff',
  }
});


module.exports = MyPics;
