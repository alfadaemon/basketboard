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
    id: '42434242423',
    name: 'BJ Armstrong',
    number: 10,
    points: 0,
    fouls: 0,
  },
  {
    id: '12424342423',
    name: 'L. Longley',
    number: 13,
    points: 0,
    fouls: 0,
  },
  {
    id: '41234242423',
    name: 'R. Harper',
    number: 9,
    points: 0,
    fouls: 0,
  },
  {
    id: '12434242423',
    name: 'S. Kerr',
    number: 25,
    points: 0,
    fouls: 0,
  },
  {
    id: '134242423',
    name: 'T. Kukoc',
    number: 7,
    points: 0,
    fouls: 0,
  },
  {
    id: '0412312423',
    name: 'B. Wennington',
    number: 34,
    points: 0,
    fouls: 0,
  },
  {
    id: '4243242423',
    name: 'W. Perdue',
    number: 32,
    points: 0,
    fouls: 0,
  },
];

const MockedVisitPlayers: PlayerType[] = [
  {
    id: '2242424242',
    name: 'M. Van Exel',
    number: 23,
    points: 0,
    fouls: 0,
  },
  {
    id: '4242424243',
    name: 'C. Drexel',
    number: 25,
    points: 0,
    fouls: 0,
  },
  {
    id: '42424243',
    name: 'T. Porter',
    number: 13,
    points: 0,
    fouls: 0,
  },
];

export const BoardScreen = (): JSX.Element => {
  const [totalVisit, setTotalVisit] = useState(0);
  const [totalLocal, setTotalLocal] = useState(0);

  const increaseVisitScore = (amount: number) => {
    setTotalVisit(totalVisit + amount);
  };

  const increaseLocalScore = (amount: number) => {
    setTotalLocal(totalLocal + amount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} >
        <HeaderComponent totalLocal={totalLocal} totalVisit={totalVisit} />
      </View>
      <View style={styles.playersContainer}>
        <PlayersComponent
          players={MockedVisitPlayers}
          increaseScore={increaseVisitScore}
        />
        <PlayersComponent
          players={MockedLocalPlayers.sort((b, a) => a.points - b.points)}
          increaseScore={increaseLocalScore}
        />
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
  headerContainer: {
    flexDirection: 'row',
    height: '30%',
  },
  playersContainer: {
    flexDirection: 'row',
    height: '70%',
  },
});
