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
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { BoardScreen } from './components/board/boardScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
      />
      <BoardScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
