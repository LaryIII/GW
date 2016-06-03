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
  SegmentedControlIOS,
} from 'react-native';

var Place = React.createClass({
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
          <View style={styles.item}>
            <View style={styles.left}>
              <Image resizeMode={'contain'} style={styles.itemimg} source={require('./../../res/common/ktv.jpg')}>
              </Image>
            </View>
            <View style={styles.right}>
              <View style={styles.line}><Text style={[styles.whitetext,{fontSize:15,marginTop:6,}]}>餐饮 - 御品周庄</Text></View>
              <View style={styles.line}><Text style={styles.whitetext}>电话:<Text>025-88886666</Text></Text></View>
              <View style={styles.line}><Text style={[styles.whitetext,{marginTop:-10,}]}>地址:<Text>秦淮区苜蓿园后标营88号</Text></Text></View>
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
  segment:{
    marginTop:5,
    marginLeft:10,
    marginBottom:10,
    marginRight:10,
  },
  container:{

  },
  item:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#fff',
    marginBottom:5,
  },
  left:{
    width:Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/2*200/375,
    alignItems:'center',
  },
  itemimg:{
    width:Dimensions.get('window').width/2,
    height:Dimensions.get('window').width/2*200/375,
    backgroundColor:'#eee',
  },
  right:{
    width:Dimensions.get('window').width/2,
    paddingLeft:10,
    flex:1,
    height:Dimensions.get('window').width/2*200/375,
  },
  line:{
    flex:1,
    flexDirection:'row',
  },
  icon:{
    width:18,
    height:18,
    marginRight:10,
  },
  whitetext:{
    color:'#333',
    fontSize:13,
    width:Dimensions.get('window').width/2-20,
  }

});

module.exports = Place;
