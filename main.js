import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import { Header } from './src/components/common';
import { LibraryList } from './src/components';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header title="Tech Stack" />
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
