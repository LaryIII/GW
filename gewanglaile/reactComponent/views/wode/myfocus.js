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

var MyFocus = React.createClass({
  getInitialState: function(){
    var items = [];
    return {
      items: items,
    };
  },
  render() {
    return (
      <View style={styles.bigcontainer}>
         <Image resizeMode={'contain'} style={styles.itemimg} source={require('./../../res/common/ktv.jpg')}></Image>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0)',
  },
  itemimg:{
    width:(Dimensions.get('window').width-30)/2,
    height:(Dimensions.get('window').width-30)/2,
    marginLeft:10,
  }
});


module.exports = MyFocus;
