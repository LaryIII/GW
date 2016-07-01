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

var PublishActivity = React.createClass({
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
          <View style={styles.binputbox}>
            <Image resizeMode={'contain'} style={styles.photo} source={require('./../../res/huodong/takephoto.png')}></Image>
            <Text style={styles.phototext}>点击上传活动封面</Text>
          </View>
          <View style={styles.ninputbox}>
            <TextInput style={styles.textinput} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="请输入组织者" />
          </View>
          <View style={styles.ninputbox}>
            <TextInput style={styles.textinput} placeholder="请输入活动名称" placeholderTextColor="rgba(255,255,255,0.5)" />
          </View>
          <View style={styles.ninputbox}>
            <TextInput style={styles.textinput} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="请输入活动地点" />
          </View>
          <View style={[styles.ninputbox,{flexDirection:'row'}]}>
            <TextInput style={styles.textinput1} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="请输入活动人数" />
            <TextInput style={styles.textinput2} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="活动费用(元/人)" />
            <View style={styles.centerborder}></View>
          </View>
          <View style={styles.ninputbox}>
            <TextInput style={styles.textinput} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="请输入手机号" />
          </View>
          <View style={styles.ninputbox}>
            <TextInput style={styles.textinput} placeholderTextColor="rgba(255,255,255,0.5)" placeholder="请输入活动介绍" />
          </View>
          <View style={styles.datebox}>
            <Text style={styles.datelabel}>活动日期</Text>
            <TouchableOpacity>
              <View style={styles.dateview}>
                <Text style={styles.datetext}>2016-06-30</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.timebox}>
            <Text style={styles.timelabel}>活动时间</Text>
            <TouchableOpacity>
              <View style={styles.timeview1}>
                <Text style={styles.timetext}>14:00</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.timelabel2}>——</Text>
            <TouchableOpacity>
              <View style={styles.timeview2}>
                <Text style={styles.timetext}>16:00</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btntext}>发布</Text>
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
    backgroundColor:'#000154',
  },
  container:{
    flex:1,
    marginTop:3,
  },
  binputbox:{
    borderWidth:1,
    borderRadius:4,
    borderColor:'#fff',
    marginTop:2,
    marginLeft:30,
    marginRight:30,
    marginBottom:3,
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  ninputbox:{
    borderWidth:1,
    borderRadius:4,
    borderColor:'#fff',
    marginTop:2,
    marginLeft:30,
    marginRight:30,
    marginBottom:3,
    padding:10,
  },
  photo:{
    width:100,
    height:66,
    opacity:0.5,
  },
  phototext:{
    color:'rgba(255,255,255,0.5)',
    fontSize:14,
    marginLeft:20,
  },
  textinput:{
    fontSize:14,
    color:'rgba(255,255,255,0.5)',
    height:16,
  },
  textinput1:{
    fontSize:14,
    color:'rgba(255,255,255,0.5)',
    height:16,
    width:(Dimensions.get('window').width-60-20-1)/2,
  },
  textinput2:{
    fontSize:14,
    color:'rgba(255,255,255,0.5)',
    height:16,
    width:(Dimensions.get('window').width-60-20-1)/2,
  },
  centerborder:{
    width:1,
    backgroundColor:'#fff',
    height:36,
    position:'absolute',
    top:0,
    left:(Dimensions.get('window').width-60-20-1)/2,
  },
  datebox:{
    marginTop:2,
    marginLeft:30,
    marginRight:30,
    marginBottom:3,
    height:36,
    flexDirection:'row',
    alignItems:'center',
  },
  timebox:{
    marginTop:2,
    marginLeft:30,
    marginRight:30,
    marginBottom:3,
    height:36,
    flexDirection:'row',
    alignItems:'center',
  },
  dateview:{
    borderWidth:1,
    borderColor:'#fff',
    padding:5,
    width:Dimensions.get('window').width-30*2-14*4-10,
    marginLeft:10,
  },
  datelabel:{
    color:'rgba(255,255,255,0.6)',
    fontSize:14,
  },
  datetext:{
    color:'rgba(255,255,255,0.5)',
    fontSize:14,
  },
  timelabel:{
    color:'rgba(255,255,255,0.6)',
    fontSize:14,
  },
  timelabel2:{
    color:'rgba(255,255,255,0.6)',
    fontSize:14,
  },
  timeview1:{
    marginLeft:10,
    marginRight:5,
    borderWidth:1,
    borderColor:'#fff',
    padding:5,
  },
  timeview2:{
    marginLeft:5,
    borderWidth:1,
    borderColor:'#fff',
    padding:5,
  },
  timetext:{
    color:'rgba(255,255,255,0.5)',
    fontSize:14,
  },
  btn:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    borderRadius:4,
    backgroundColor:'#4d4d6f',
    alignItems:'center',
    justifyContent:'center',
    height:40,
  },
  btntext:{
    color:'#fff',
    fontSize:15,
  }
});

module.exports = PublishActivity;
