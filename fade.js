/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';

export default class FadeDemo extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            viewOpacityAnim: new Animated.Value(0)
        }
    }

    componentDidMount()
    {
        Animated.timing(this.state.viewOpacityAnim, {
            toValue: 1,
            duration: 2000
        }).start();
    }

    render() {
        return (
        <View style={styles.container}>
            <Animated.View style={{width: 100, height: 100, backgroundColor: 'cyan', opacity: this.state.viewOpacityAnim}}>

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
