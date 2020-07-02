import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

import Header from './Header';
import ListItem from './ListItem';
import SongDetails from './SongDetails';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SongsListObj: [],
      isRequestInProcess: false,
      itemObj: {},
      isFetching: false,
    };
  }

  componentDidMount() {
    this.getSongList();
  }

  getSongList() {
    this.setState({
      SongsListObj: [],
      isRequestInProcess: true,
      showSongDetailScreen: false,
    });
    return fetch('https://itunes.apple.com/search?term=Michael+jackson')
      .then(response => response.json())
      .then(json => {
        return this.setState({
          SongsListObj: json.results,
          isRequestInProcess: false,
          isFetching: false,
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          SongsListObj: [],
          isRequestInProcess: false,
          isFetching: false,
        });
      });
  }
  onRefresh() {
    this.setState({isFetching: true}, () => {
      this.getSongList();
    });
  }
  GotoSongDetails = item => {
    this.setState({
      showSongDetailScreen: true,
      itemObj: item,
    });
  };

  backPress = () => {
    this.setState({
      showSongDetailScreen: false,
    });
  };

  render() {
    const {
      SongsListObj,
      isRequestInProcess,
      showSongDetailScreen,
      itemObj,
      isFetching,
    } = this.state;
    if (showSongDetailScreen) {
      return <SongDetails backPress={this.backPress} itemObj={itemObj} />;
    }
    return (
      <View style={styles.container}>
        <Header title="Michael Jackson Songs" />
        {isRequestInProcess ? (
          <View style={styles.requestInProcess}>
            <ActivityIndicator size="large" color="#2BAF00" />
          </View>
        ) : (
          <FlatList
            keyExtractor={item => item.trackId}
            data={SongsListObj}
            onRefresh={() => this.onRefresh()}
            refreshing={isFetching}
            renderItem={itemData => (
              <ListItem
                OnPressItem={this.GotoSongDetails}
                item={itemData.item}
              />
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  requestInProcess: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
