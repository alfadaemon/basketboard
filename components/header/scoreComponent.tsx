import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface ScoreComponentProps {
  score: number;
}

export const ScoreComponent = (props: ScoreComponentProps): JSX.Element => {
  const { score } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  score: {
    color: '#F00',
    fontFamily: 'Score Board',
    fontSize: 170,
  },
});
