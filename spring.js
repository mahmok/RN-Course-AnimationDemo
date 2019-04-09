/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';

export default class SpringDemo extends React.Component {

    constructor(props)
    {
        super(props);
        this.moveAnimation = new Animated.ValueXY({ x: 10, y: 450 })
    }

    componentDidMount()
    {
        Animated.spring(this.moveAnimation, {
            toValue: {x: 250, y: 10},
            bounciness: 10,
            speed: 1,
          }).start()
    }

    render() {
        return (
        <View style={styles.container}>
            <Animated.View style={[{width: 100, height:  100, backgroundColor: 'cyan'}, this.moveAnimation.getLayout()]}>

            </Animated.View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
