import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Header = props => {
  return (
    <View style={styles.header}>
      {props.ShowBackBtn ? (
        <TouchableOpacity onPress={() => props.backPress()}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      ) : null}

      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backText: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#fff',
    flex: 1,
  },
});

export default Header;
