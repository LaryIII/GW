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
  SegmentedControlIOS,
} from 'react-native';

var Huodong = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },

  render: function(){

    return (
      <View style={styles.bigcontainer}>
        <View style={styles.segment}>
          <SegmentedControlIOS values={['全国', '南京','马鞍山']} />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.item}>
            <View style={styles.left}>
              <Image resizeMode={'contain'} style={styles.itemimg} source={require('./../res/common/ktv.jpg')}>
                <View style={styles.label}>
                  <Text style={styles.labeltext}>已发布</Text>
                </View>
              </Image>
              <Text style={styles.num}>30人已报名</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.line}><Text style={[styles.whitetext,{fontSize:15,}]}>南京好声音晋级赛第一场</Text></View>
              <View style={styles.line}><Image style={styles.icon} resizeMode={'contain'} source={require('image!locate_normal')}></Image><Text style={styles.whitetext}>集合:<Text>孵鹰大厦楼下</Text></Text></View>
              <View style={styles.line}><Image style={styles.icon} resizeMode={'contain'} source={require('image!time')}></Image><Text style={styles.whitetext}>时间:<Text>2016年1月1日</Text></Text></View>
              <View style={styles.line}><Image style={styles.icon} resizeMode={'contain'} source={require('image!zuzhizhe')}></Image><Text style={styles.whitetext}>组织者:<Text>刘宝仲</Text></Text></View>
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
    borderBottomWidth:0.5,
    borderBottomColor:'#999',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:5,
  },
  left:{
    width:105,
    height:80,
    borderWidth:0.5,
    borderColor:'#fff',
    alignItems:'center',
  },
  label:{
    backgroundColor:'#eb1618',
    width:60,
    padding:4,
    alignItems:'center',
  },
  itemimg:{
    width:105,
    height:80,
    backgroundColor:'#eee',
  },
  labeltext:{
    color:'#fff',
    fontSize:14,
  },
  num:{
    color:'#fff',
    fontSize:12,
  },
  right:{
    width:Dimensions.get('window').width-30-105-20,
    marginLeft:20,
    flex:1,
    height:100,
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
    color:'#fff',
    fontSize:13,
  }

});

module.exports = Huodong;
