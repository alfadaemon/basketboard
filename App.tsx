/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { BoardScreen } from './components/board/boardScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
      />
      <BoardScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
