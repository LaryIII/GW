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

var SchoolCourse = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  componentDidMount: function() {

  },
  render: function(){
    return (
      <View style={styles.bigcontainer}>
        <View style={styles.courses}>
          <View style={styles.course}>
            <Image resizeMode={'cover'} style={styles.courseimg} source={require('./../../res/common/ktv.jpg')}>
              <View style={styles.coursebg}>
                <Text style={styles.coursetext}>2016年暑假班</Text>
                <Text style={styles.coursetextem}>第一期</Text>
                <Text style={styles.coursetext}>7月上旬开班8课时</Text>
                <Text style={styles.coursetext}>0基础，每期完成一首</Text>
              </View>
            </Image>
          </View>
          <View style={styles.course}>
            <Image resizeMode={'cover'} style={styles.courseimg} source={require('./../../res/common/ktv.jpg')}>
              <View style={styles.coursebg}>
                <Text style={styles.coursetext}>2016年暑假班</Text>
                <Text style={styles.coursetextem}>第一期</Text>
                <Text style={styles.coursetext}>7月上旬开班8课时</Text>
                <Text style={styles.coursetext}>0基础，每期完成一首</Text>
              </View>
            </Image>
          </View>
          <View style={styles.course}>
            <Image resizeMode={'cover'} style={styles.courseimg} source={require('./../../res/common/ktv.jpg')}>
              <View style={styles.coursebg}>
                <Text style={styles.coursetext}>2016年暑假班</Text>
                <Text style={styles.coursetextem}>第一期</Text>
                <Text style={styles.coursetext}>7月上旬开班8课时</Text>
                <Text style={styles.coursetext}>0基础，每期完成一首</Text>
              </View>
            </Image>
          </View>
        </View>
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
  courses:{
    flex:1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  course:{
    width:(Dimensions.get('window').width-20*3)/2,
    height:90,
    marginLeft:20,
    marginTop:10,
  },
  courseimg:{
    width:(Dimensions.get('window').width-20*3)/2,
    height:90,
    borderRadius:4,
  },
  coursebg:{
    width:(Dimensions.get('window').width-20*3)/2,
    height:90,
    borderRadius:4,
    backgroundColor:'rgba(255,255,255,0.5)',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
  },
  coursetext:{
    fontSize:12,
    color:'#1e1e1e',
  },
  coursetextem:{
    fontSize:12,
    color:'#ea1717',
  }

});

module.exports = SchoolCourse;
