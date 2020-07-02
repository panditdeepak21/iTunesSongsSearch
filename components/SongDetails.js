import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import Header from './Header';
import React from 'react';

const deviceWidth = Dimensions.get('window').width;

const SongDetails = props => {
  const {itemObj} = props;
  console.log('itemObj ', itemObj);
  return (
    <View style={styles.container}>
      <Header
        ShowBackBtn={true}
        backPress={props.backPress}
        title={itemObj.trackName}
      />
      <View style={[styles.listItem, styles.Shaddoeffect]}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: itemObj.artworkUrl100,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>
          {'Track Name: '} {itemObj.trackName}
        </Text>
        <Text style={styles.textArtist}>
          {'Artist Name: '} {itemObj.artistName}
        </Text>
        <Text style={styles.textCollection}>
          {'Collection Name: '} {itemObj.collectionName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 7,
    margin: 8,
    backgroundColor: '#fff',
    width: deviceWidth - 16,
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: 20},
  textArtist: {fontSize: 17},
  Collection: {fontSize: 14},
});

export default SongDetails;
