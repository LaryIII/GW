/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './utils';
import Service from './service';
import TinggeDetail from './tingge/tinggedetail';
import More from './tingge/more';
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

var Tingge = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  _gotomore:function(){
    this.props.navigator.push({
      title: '更多',
      component: More,
      navigationBarHidden:false,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  _gotodetail:function(){
    this.props.navigator.push({
      title: '',
      component: TinggeDetail,
      navigationBarHidden:true,
      // backButtonTitle: "返回",
      // backButtonIcon: require('image!back'),
      leftButtonTitle: "返回",
      leftButtonIcon:require('image!back'),
      onLeftButtonPress: ()=>this.props.navigator.pop(),
    });
  },
  render: function(){
    return (
      <View style={styles.bigcontainer}>
        <View style={styles.header}>
          <View style={styles.leftview}>
            <TouchableOpacity onPress={this._gotoPublish}>
              <View style={styles.leftbtn}>
                <Image style={styles.down} resizeMode={'contain'} source={require('image!xiala2')}></Image>
                <Text style={styles.lefttext}>南京</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.centerview}>
            <Text style={styles.centertext}>听歌</Text>
          </View>
        </View>
        <View style={styles.segment}>
          <SegmentedControlIOS style={styles.sex} values={['男声', '女声']} />
          <SegmentedControlIOS style={styles.map} values={['南京', '马鞍山', '附近']} />
        </View>
        <View style={styles.segment}>
          <SegmentedControlIOS momentary={true} style={styles.category} values={['心榜', '星榜', '悦榜', '酷榜', '更多']} onValueChange={(index)=>{
            console.log(index);
            if(index=="更多"){
              this._gotomore();
            }
          }} />
        </View>
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={this._gotodetail}>
            <View style={styles.item}>
               <Text style={styles.order}>20</Text>
               <Text style={styles.songname}>月亮代表我的心</Text>
               <Text style={styles.songdesc}>一二三四五六七</Text>
               <Image style={styles.play} resizeMode={'contain'} source={require('image!stop')}></Image>
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
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:64,
    backgroundColor:'#000036',
  },
  leftview:{
    position:'absolute',
    top:30,
    left:12,
  },
  leftbtn:{
    flexDirection:'row',
  },
  lefttext:{
    color:'#fff',
    fontSize:14,
  },
  centerview:{
    position:'absolute',
    top:30,
    left:(Dimensions.get('window').width-17*2)/2,
  },
  centertext:{
    fontSize:15,
    color:'#fff',
  },
  container:{

  },
  item:{
    height:44,
    borderBottomWidth:1,
    borderBottomColor:'#666698',
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
    alignItems:'center',
  },
  order:{
    color:'#fff',
    fontSize:15,
    marginRight:12,
  },
  songname:{
    color:'#008cf2',
    fontSize:15,
  },
  songdesc:{
    position:'absolute',
    top:13,
    right:15+25,
    color:'#008cf2',
    fontSize:15,
  },
  play:{
    position:'absolute',
    top:13,
    right:15,
    width:15,
    height:16
  },
  down:{
    color:'#fff',
    width:14,
    height:8,
    marginRight:3,
    marginTop:3,
  },
  segment:{
    marginTop:5,
    marginLeft:10,
    marginBottom:10,
    marginRight:10,
    flexDirection:'row',
  },
  sex:{
    flex:2,
  },
  map:{
    flex:3,
  },
  category:{
    flex:1,
  }

});

module.exports = Tingge;
