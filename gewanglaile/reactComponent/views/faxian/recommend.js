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
  TextInput,
} from 'react-native';

var Recommend = React.createClass({
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
          <View style={styles.row}>
            <Text style={styles.rowlabel}>歌名</Text>
            <TextInput placeholder='有什么好歌向我们推荐吧~' placeholderTextColor='#cdcdcd' style={styles.textinput} />
          </View>
          <View style={styles.row}>
            <Text style={styles.rowlabel}>歌手</Text>
            <TextInput placeholder='记得输入歌手名哦~' placeholderTextColor='#cdcdcd' style={styles.textinput} />
          </View>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btntext}>向我们推荐吧~</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
    backgroundColor:'#fff',
  },
  container:{
    flex:1,
    marginTop:3,
  },
  row:{
    borderBottomWidth:0.5,
    borderBottomColor:'#333',
    paddingLeft:30,
    paddingRight:30,
    height:40,
    flexDirection:'row',
    alignItems:'center',
  },
  rowlabel:{
    fontSize:14,
    color:'#191919',
    marginRight:20,
  },
  textinput:{
    height:40,
    color:'#191919',
    width:Dimensions.get('window').width-60-14*2-20,
    fontSize:14,
  },
  btn:{
    marginLeft:60,
    marginRight:60,
    borderColor:'#333',
    borderWidth:0.5,
    borderRadius:4,
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
  },
  btntext:{
    color:'#191919',
    fontSize:15,
  }
});

module.exports = Recommend;
