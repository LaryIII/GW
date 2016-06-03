/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './../utils';
import Service from './../service';
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

var Births = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },

  render: function(){

    return (
      <View style={styles.bigcontainer}>
        <ScrollView style={styles.container}>
          <View style={styles.banner}>
            <Image style={styles.bannerimg} resizeMode={'contain'} source={require('image!birthday_flower')}></Image>
          </View>
          <View style={styles.list}>
            <View style={[styles.td,{borderRightWidth:0.5,borderRightColor:'#fff',}]}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!circle_avatar')}></Image>
              <View style={styles.texts}>
                <Text style={styles.name}>陵蕊 ♀</Text>
                <Text style={styles.desc}>今天生日</Text>
              </View>
            </View>
            <View style={styles.td}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!circle_avatar')}></Image>
              <View style={styles.texts}>
                <Text style={styles.name}>陵蕊 ♀</Text>
                <Text style={styles.desc}>今天生日</Text>
              </View>
            </View>
            <View style={[styles.td,{borderRightWidth:0.5,borderRightColor:'#fff',}]}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!circle_avatar')}></Image>
              <View style={styles.texts}>
                <Text style={styles.name}>陵蕊 ♀</Text>
                <Text style={styles.desc}>今天生日</Text>
              </View>
            </View>
            <View style={styles.td}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!circle_avatar')}></Image>
              <View style={styles.texts}>
                <Text style={styles.name}>陵蕊 ♀</Text>
                <Text style={styles.desc}>今天生日</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
    marginTop:20,
  },
  banner:{
    paddingLeft:20,
    paddingRight:20,
  },
  bannerimg:{
    width:Dimensions.get('window').width-40,
    height:(Dimensions.get('window').width-40)*265/596,
  },
  list:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap: 'wrap',
    width:Dimensions.get('window').width,
    borderBottomWidth:0.5,
    borderBottomColor:'#fff',
  },
  td:{
    width:Dimensions.get('window').width/2,
    height:68,
    borderTopWidth:0.5,
    borderTopColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'space-between',
    justifyContent:'center',
  },
  icon:{
    width:40,
    height:40,
    borderRadius:20,
    marginRight:15,
  },
  texts:{

  },
  name:{
    fontSize:14,
    color:'#fff',
  },
  desc:{
    fontSize:14,
    color:'#fff',
  }
});

module.exports = Births;
