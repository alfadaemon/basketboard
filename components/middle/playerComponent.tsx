import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export interface PlayerType {
  id: string;
  name: string;
  number: number;
  points: number;
  fouls: number;
  tecnical?: number;
}

export interface PlayerProps {
  player: PlayerType;
  onAffectBoard: (points: number) => {};
  onIncreasePoints?: (points: number) => {};
}

export const PlayerComponent = (props: PlayerProps) => {
  const { number, name, points, fouls, tecnical } = props.player;
  const [playerPoints, setPlayerPoints] = useState(points);

  return (
    <View style={styles.item}>
      <View style={styles.playerInfo}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.player} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <View style={styles.playerData}>
        <Button
          onPress={() => {
            setPlayerPoints(playerPoints + 3);
            props.onAffectBoard(3);
          }}
          title="+3"
        />
        <Button
          onPress={() => {
            setPlayerPoints(playerPoints + 2);
            props.onAffectBoard(2);
          }}
          title="+2"
        />
        <Button
          onPress={() => {
            setPlayerPoints(playerPoints + 1);
            props.onAffectBoard(1);
          }}
          title="+1"
        />
        <Text style={styles.number}>{playerPoints}</Text>
        <Text style={styles.fouls}>{fouls}</Text>
        <Text style={styles.fouls}>{tecnical}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    minHeight: 45,
    borderColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  fouls: {
    color: '#F00',
    fontFamily: 'scoreboard',
    fontSize: 40,
    textAlign: 'right',
    width: 28,
  },
  number: {
    color: '#FF0',
    fontFamily: 'scoreboard',
    fontSize: 40,
    paddingRight: 5,
    justifyContent: 'center',
    textAlign: 'right',
    width: 50,
  },
  player: {
    color: '#0F0',
    fontFamily: 'scoreboard',
    fontSize: 30,
    paddingRight: 10,
  },
  playerInfo: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  playerData: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '50%',
  },
});
