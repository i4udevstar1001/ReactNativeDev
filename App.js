import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  title: {
    color: 'white',
    fontSize: 18,
    top: 12,
  },
  main: {
    backgroundColor: '#ECEDED',
    flex: 1,
  },
});

class Blink extends Component {
  componentDidMount() {
    setInterval(() => (
      this.setState(previousState =>(
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text style={styles.bigBlue}>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.main}>
        <StatusBar barStyle="dark-content" backgroundColor="#3788C7" />
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#3788C7'}}>
          <Text style={styles.title}>考勤 - 打卡</Text>
        </View>
        <View style={{flex: 4}}>
          <Blink text='I love to 23' />
        </View>
        <View style={{flex: 10}}>
          <Blink text='I love to 23' />
        </View>
      </View>
    );
  }
}