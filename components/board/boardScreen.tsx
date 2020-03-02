import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderComponent } from '../header/headerComponent';
import { PlayersComponent } from '../middle/playersComponent';
import { PlayerType } from '../middle/playerComponent';

const MockedLocalPlayers: PlayerType[] = [
  {
    id: '4242424242',
    name: 'M. Jordan',
    number: 23,
    points: 0,
    fouls: 0,
  },
  {
    id: '4243424242',
    name: 'S. Pipen',
    number: 33,
    points: 0,
    fouls: 0,
  },
  {
    id: '42432124242',
    name: 'H. Grant',
    number: 32,
    points: 0,
    fouls: 0,
  },
  {
    id: '45124242',
    name: 'B. Carlright',
    number: 2,
    points: 0,
    fouls: 0,
  },
];

const MockedVisitPlayers: PlayerType[] = [
  {
    id: '2242424242',
    name: 'M. Van Exel',
    number: 23,
    points: 60,
    fouls: 2,
  },
  {
    id: '4242424243',
    name: 'C. Drexel',
    number: 25,
    points: 30,
    fouls: 2,
  },
  {
    id: '42424243',
    name: 'T. Porter',
    number: 13,
    points: 30,
    fouls: 2,
    tecnical: 1,
  },
];

export const BoardScreen = (): JSX.Element => {
  const [totalVisit, setTotalVisit] = useState(0);
  const [totalLocal, setTotalLocal] = useState(0);

  return (
    <View style={styles.container}>
      <HeaderComponent totalLocal={totalLocal} totalVisit={totalVisit} />
      <View style={styles.playersContainer}>
        <PlayersComponent players={MockedLocalPlayers} />
        <PlayersComponent players={MockedVisitPlayers} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  score: {
    color: '#FFF',
  },
  playersContainer: {
    flexDirection: 'row',
  },
});
