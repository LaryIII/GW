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

var Liangge = React.createClass({
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
          <View style={styles.line}>
            <Text style={styles.geming}><Text style={styles.yellow}>1.  </Text>The day you went away..</Text>
          </View>
          <View style={styles.line}>
              <Text style={styles.name}>李健</Text>
              <Text style={styles.desc}>陶歌神 推荐</Text>
              <Image resizeMode={'contain'} style={styles.icon} source={require('image!fyi')}></Image>
          </View>
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
  yellow:{
    color:'#fffe42',
  },
  item:{
    width:Dimensions.get('window').width,
    borderBottomWidth:1,
    borderBottomColor:'#fff',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:15,
    paddingRight:15,
    height:65,
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
  name:{
    fontSize:15,
    color:'#fff',
    marginLeft:5,
    marginTop:2,
    marginRight:10,
  },
  desc:{
    fontSize:14,
    color:'#fff',
    position:'absolute',
    bottom:10,
    right:22+10,
  },
  icon:{
    position:'absolute',
    bottom:10,
    right:0,
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


module.exports = Liangge;
