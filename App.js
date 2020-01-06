import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    top: 16,
    fontFamily: 'Roboto',
  },
  main: {
    backgroundColor: '#ECEDED',
    flex: 1,
  },
  appTitle: {
    color: '#3788C7',
    fontSize: 25,
    fontFamily: 'STKaiti',
  },
  appInput: {
    color: '#3788C7',
    fontSize: 14,
    width: "70%",
    fontFamily: 'Segoe UI',
    borderBottomWidth: 1,
    marginTop: 5,
    borderBottomColor: '#707070'
  },
});

export default class BlinkApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  /* render() {
    return (
      <View style={styles.main}>
        <StatusBar barStyle="dark-content" backgroundColor="#3788C7" />
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#3788C7'}}>
          <View style={{position: 'absolute', top: 0, left: 10}}>
          <Text style={styles.title}>123--</Text>
          </View>
          <Text style={styles.title}>考勤 - 打卡</Text>
        </View>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={styles.appTitle}>技术学校APP</Text>
        </View>
        <View style={{flex: 6}}>
        </View>
      </View>
    );
  } */
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white',}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center',}}>
          <Text style={styles.appTitle}>技术学校APP</Text>
        </View>
        <View style={{flex: 6, alignItems: 'center',}}>
          <TextInput
            style={styles.appInput}
            placeholder="请输入用户名"
            placeholderTextColor = "#3788C7"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <TextInput
            style={styles.appInput}
            placeholder="密码"
            placeholderTextColor = "#3788C7"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        </View>
      </View>
    );
  }
}