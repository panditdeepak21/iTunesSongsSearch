import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const deviceWidth = Dimensions.get('window').width;

const ListItem = props => {
  const {item} = props;

  return (
    <TouchableOpacity
      style={[styles.listItem, styles.Shaddoeffect]}
      onPress={() => props.OnPressItem(item)}>
      <View style={styles.listItemView}>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: item.artworkUrl30,
            }}
            style={{
              height: deviceWidth / 5.5,
              width: deviceWidth / 5.5,
              borderRadius: deviceWidth / 5.5,
            }}
          />
        </View>
        <View style={styles.borderLine} />
        <View style={styles.trackNameView}>
          <Text style={styles.trackName}>{item.trackName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 7,
    margin: 8,
    backgroundColor: '#fff',
    width: deviceWidth - 16,
    flex: 1,
  },
  Shaddoeffect: {
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  listItemView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  imageView: {
    alignItems: 'center',
    width: '25%',
    justifyContent: 'center',
  },
  borderLine: {width: '1%', height: '100%', backgroundColor: '#eae9e8'},
  trackNameView: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    width: '74%',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 10,
    paddingEnd: 10,
  },
  trackName: {
    color: '#212123',
    fontWeight: 'bold',
  },
});

export default ListItem;
