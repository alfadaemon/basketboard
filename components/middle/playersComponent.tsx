import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import { PlayerComponent, PlayerType } from './playerComponent';

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerPlayerInfo}>
        <Text style={styles.headerNumber}>No.</Text>
        <Text style={styles.headerText}>Name</Text>
      </View>
      <View style={styles.headerPlayerData}>
        <Text style={styles.headerDataNumber}>P</Text>
        <Text style={styles.headerDataNumber}>F</Text>
        <Text style={styles.headerDataNumber}>T</Text>
      </View>
    </View>
  );
};

export interface PlayersComponentProp {
  players: PlayerType[];
}

export const PlayersComponent = (props: PlayersComponentProp): JSX.Element => {
  const { players } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={({ item }) => <PlayerComponent player={item} />}
        keyExtractor={(item: { id: string }) => item.id}
        ListHeaderComponent={() => <HeaderComponent />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  headerNumber: {
    color: '#0F0',
    fontFamily: 'Score Board',
    fontSize: 25,
    textAlign: 'center',
  },
  headerDataNumber: {
    color: '#0F0',
    fontFamily: 'Score Board',
    fontSize: 25,
    textAlign: 'center',
    width: 30,
  },
  headerText: {
    color: '#0F0',
    fontFamily: 'Score Board',
    fontSize: 25,
  },
  headerPlayerInfo: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  headerPlayerData: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
  },
});
