/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let data = [];
for(let i = 0; i < 25; i++){
    let a = require('../res/png/' + i + '.png');
    data.push(a);
}

export default class App extends Component {

    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Yo
        </Text>
        <Image source={data[0]} style={{width:50, height:50}}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

