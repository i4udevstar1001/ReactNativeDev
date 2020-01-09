import React, { Component } from 'react';
import { View, StyleSheet, Modal, Text, StatusBar } from 'react-native';
import { Input, Button, Icon, Avatar } from 'react-native-elements';
import { SliderBox } from 'react-native-image-slider-box';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
      ]
    }
  }

  static navigationOptions = {
      title: '学校信息',
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#3788C7" />
        <SliderBox images={this.state.images} />
        <Avatar
          rounded
          size="large"
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        
        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => alert('hello')} />
        <Input
          label='Owner'
          placeholder="Github's owner"
          errorMessage='Enter A Valid Error Here'
        />
        <Input
          label='Repo'
          placeholder="Github's repository name"
        />
        <Button
          title='SUBMIT'
          icon={{
            color: 'white',
            name: 'paper-plane',
            size: 15,
            type: 'font-awesome'
          }}
          onPress={() => this.props.navigation.navigate('我的')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
