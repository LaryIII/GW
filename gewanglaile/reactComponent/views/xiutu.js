/**
 * Created by vczero on 15/7/12.
 */

import React, { Component } from 'react';
import Util from './utils';
import Service from './service';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SingerImgs from './xiutu/singerimgs';
import KingImgs from './xiutu/kingimgs';
import JRWTabBar from './common/jrwtabbar';
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
  _gotoImgDetail:function(id,type){

  },

  render: function(){

    return (
      <View style={styles.bigcontainer}>
        <ScrollableTabView style={styles.container} renderTabBar={() =><JRWTabBar />}>
          <SingerImgs tabLabel="歌手原创" onRowPress={(id)=>{
            this._gotoImgDetail(id,'all');
          }} />
          <KingImgs ref="receive" tabLabel="歌王出品" onRowPress={(id)=>{
            this._gotoImgDetail(id,'receive');
          }} />
        </ScrollableTabView>
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
    backgroundColor:'#fff',
  },
});


module.exports = Xiutu;
