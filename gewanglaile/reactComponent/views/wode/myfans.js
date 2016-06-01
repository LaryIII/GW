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

var MyFans = React.createClass({
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
          <View style={styles.left}>
            <Image resizeMode={'contain'} style={styles.itemimg} source={require('image!circle_avatar')}></Image>
          </View>
          <View style={styles.right}>
            <Text style={styles.title}>陶歌神</Text>
            <Text style={styles.desc}>一个有情怀的男子</Text>
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
    padding:6,
    height:65,
    marginBottom:5,
    flexDirection:'row',
  },
  left:{
    width:50,
    height:50,
  },
  itemimg:{
    width:50,
    height:50,
    borderRadius:25,
  },
  right:{
    width:Dimensions.get('window').width-42-50-6,
    marginLeft:6,
  },
  title:{
    fontSize:16,
    color:'#fff946',
    marginTop:5,
  },
  desc:{
    marginTop:5,
    fontSize:13,
    color:'#fff',
  }

});


module.exports = MyFans;
