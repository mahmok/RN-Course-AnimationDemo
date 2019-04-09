/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';

export default class ScaleDemo extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            scaleWidth: new Animated.Value(1),
            scaleHeight: new Animated.Value(1)
        }
    }

    componentDidMount()
    {
        Animated.parallel([
            Animated.timing(this.state.scaleHeight, {toValue: 200, duration: 500}),
            Animated.timing(this.state.scaleWidth, {toValue: 200, duration: 500})
        ]).start();
    }

    render() {
        return (
        <View style={styles.container}>
            <Animated.View style={{width: this.state.scaleWidth, height:  this.state.scaleWidth, backgroundColor: 'cyan'}}>

            </Animated.View>
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
