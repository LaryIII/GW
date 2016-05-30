'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  Image,
  NavigatorIOS,
  AsyncStorage,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

var SimpleApp = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a simple application.</Text>
      </View>
    )
  }
})

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
