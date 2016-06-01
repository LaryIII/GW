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

var Xiutu = React.createClass({
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

        </ScrollView>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  bigcontainer:{
    flex:1,
  },
  container:{
    flex:1,
    marginTop:-5,
  },
  navigatorx:{
    backgroundColor:'#f3ea85',
    height:64,
    paddingTop:20,
  },
  city:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
  },
  citytext:{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    marginRight:6,
  },
  down:{
    width:4,
    height:5,
  },
  itemRow:{
    flexDirection:'row',
    marginBottom:20,
  },
  banner:{
    flex:1,
    borderRadius:4,
    width:Dimensions.get('window').width-30,
    height:180,
  },
  wrapper: {
    height:180,
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    borderRadius:4,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
    height:180,
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    borderRadius:4,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
    height:180,
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
    borderRadius:4,
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
    height:180,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tasklist:{
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:60,
  },
  tasktitlebox:{
    flex:1,
  },
  titleline:{
    flex:1,
    color:'#c0c0c0',
    textAlign:'center',
    fontSize:12
  },
  item:{
    flex:1,
    height:180,
    marginTop:15,
    alignItems:'center',
    backgroundColor:'#eee',
    borderRadius:4,
  },
  itemtext:{
    position:'absolute',
    top:0,
    left:0,
    backgroundColor:'rgba(0,0,0,0)',
    width:Dimensions.get('window').width-30,
    height:180,
    alignItems:'center',
  },
  itemimg:{
    flex:1,
    borderRadius:4,
    width:Dimensions.get('window').width - 30,
    height:180,
  },
  itemtitle:{
    fontSize:15,
    color:'#fff',
    textAlign:'center',
    marginTop:70,
  },
  itemprice:{
    fontSize:12,
    color:'#fff',
    textAlign:'center',
    marginTop:10,
  },
  itemnum:{
    fontSize:12,
    color:'#fff',
    textAlign:'center',
    marginTop:45,
  },
  em:{
    color:'#f0e983',
  }
});

module.exports = Xiutu;
