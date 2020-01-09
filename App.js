import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './src/pages/Home'
import AuthScreen from './src/pages/Auth'
import { StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  学校信息: {screen: Home},
  我的: {screen: AuthScreen},
}, {
  initialRouteName: '学校信息',
  defaultNavigationOptions: {
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#3788C7',
    },
    headerTitleAlign: 'center',
    headerTintColor: 'white',
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
