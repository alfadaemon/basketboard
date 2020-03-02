import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScoreComponent } from './scoreComponent';

export interface HeaderComponentProps {
  totalVisit: number;
  totalLocal: number;
}

export const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {
  const { totalVisit, totalLocal } = props;
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.teams}>Visita</Text>
        <ScoreComponent score={totalVisit} />
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.teams}>Local</Text>
        <ScoreComponent score={totalLocal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  teams: {
    color: '#FFF',
    fontFamily: 'Score Board',
    fontSize: 30,
  },
});
