'use strict'

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
import Recommend from './recommend';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

var Liangge = React.createClass({
  getInitialState: function(){
    var items = [];
    return {
      items: items,
    };
  },
  _recommend:function(){
    this.props.navigator.push({
      title: '想向我们推荐什么歌~',
      component: Recommend,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  render() {
    return (
      <View style={styles.bigcontainer}>
        <ScrollView style={styles.container}>
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
        </ScrollView>
        <TouchableOpacity onPress={this._recommend} style={styles.btn}>
          <View style={styles.btnview}>
            <Text style={styles.btntext}>我要推荐歌</Text>
          </View>
        </TouchableOpacity>
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
  },
  btn:{
    position:'absolute',
    bottom:100,
    left:0,
    height:40,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  btnview:{
    backgroundColor:'#33335a',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    width:Dimensions.get('window').width,
  },
  btntext:{
    color:'#fff',
    fontSize:15,
  }
});


module.exports = Liangge;
