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

var Jishutie = React.createClass({
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
              <View style={styles.line}><Text style={[styles.whitetext,{fontSize:15,}]}>KTV与录音棚的区别</Text></View>
              <View style={styles.line}><Text style={[styles.whitetext,{marginTop:-10,}]}>进录音棚录音与在KTV唱歌是不同的，与在舞台现场演出也是不同的。在KTV演唱时</Text></View>
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
    padding:5,
    borderWidth:0.5,
    borderColor:'#999',

  },
  left:{
    width:110,
    height:70,
    alignItems:'center',
  },
  itemimg:{
    width:110,
    height:70,
    backgroundColor:'#eee',
  },
  right:{
    width:Dimensions.get('window').width-110-10,
    paddingLeft:10,
    flex:1,
    height:70,
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
    width:Dimensions.get('window').width-110-20,
  }

});

module.exports = Jishutie;
