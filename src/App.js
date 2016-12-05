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
  Image,
  ScrollView,
  PanResponder,
  Animated,
  TouchableWithoutFeedback 
} from 'react-native';

import data from './data';

const LONG_PRESS_MIN_DURATION = 2000;

export default class App extends Component {

  constructor(props) {

    // let dataObject = data.map((src, index)=>{
    //   return { [index]:[src] };
    // });

    let dataObject = data.reduce(function(result, item) {
      result[item] = item; //a, b, c
      return result;
    }, {});
    alert(dataObject);

    

    let staticStyles = data.map((src, index)=>{
      return  {style: styles.itemStye, index:index } 
    });


    super(props);
    let i = 0;
    this.state = {
      allItems: dataObject,
      styles:[],
      selectedItems:{},
      pan: new Animated.ValueXY()
    };
  }

  

  componentWillMount() {
    
  }

    
  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Yo
        </Text>
        <ScrollView
          scrollEnabled={this.state.scroll}        
          style={styles.svStyle}
          horizontal={true}
          contentContainerStyle={styles.content}
          showsHorizontalScrollIndicator={false}
        >
        {Object.keys(this.state.allItems).forEach(function (key) {
          <TouchableWithoutFeedback
            onPress={()=>alert('pressed ' + key)}
            key={key}
          >
            <Animated.Image
              source={this.state.allItems[key]} style={styles.itemStye} 
            />
          </TouchableWithoutFeedback>
          })
        }
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:20
    
  },
  svStyle: {
    flex:1,
    height: 50
  },
  content: {
    width: 60 * data.length,
  },
  itemStye:{
    height:50,
    width:50,
    marginRight:5,
    marginLeft: 5
  }
});

