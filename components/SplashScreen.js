import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to iTunes songs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 18},
});

export default SplashScreen;
