import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import HomeScreen from './components/HomeScreen';
import SplashScreen from './components/SplashScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeScreen: false,
    };
  }

  componentDidMount() {
    var that = this;
    setTimeout(function() {
      that.setState({
        homeScreen: true,
      });
    }, 3000);
  }

  render() {
    const {homeScreen} = this.state;
    let screen = <HomeScreen />;
    //let screen = <SplashScreen />;
    if (homeScreen) {
      screen = <HomeScreen />;
    }
    return <View style={styles.container}>{screen}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
