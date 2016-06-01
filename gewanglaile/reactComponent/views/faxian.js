/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './utils';
import Service from './service';
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

var Faxian = React.createClass({
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
          <View style={styles.line}>
            <View style={styles.td1}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!birthday')}></Image>
              <Text style={styles.text}>生日</Text>
            </View>
            <View style={styles.td2}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!place')}></Image>
              <Text style={styles.text}>场所</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.td1}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!luyinpeng')}></Image>
              <Text style={styles.text}>录音棚</Text>
            </View>
            <View style={styles.td2}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!techtie')}></Image>
              <Text style={styles.text}>技术贴</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.td1}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!liangge')}></Image>
              <Text style={styles.text}>靓歌</Text>
            </View>
            <View style={styles.td2}>
              <Image style={styles.icon} resizeMode={'contain'} source={require('image!school')}></Image>
              <Text style={styles.text}>学校</Text>
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
  line:{
    flex:1,
    flexDirection:'row',
  },
  td1:{
    width:120,
    height:120,
    borderWidth:0.5,
    borderColor:'#fff',
    alignItems:'center',
    marginLeft:(Dimensions.get('window').width-240)/3,
    marginBottom:30,
  },
  td2:{
    width:120,
    height:120,
    borderWidth:0.5,
    borderColor:'#fff',
    alignItems:'center',
    marginLeft:(Dimensions.get('window').width-240)/3,
    marginBottom:30,
  },
  icon:{
    marginTop:20,
    marginBottom:20,
  },
  text:{
    fontSize:18,
    color:'#fff',
  }
});

module.exports = Faxian;
