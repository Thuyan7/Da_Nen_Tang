import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';


const DICE_FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

function rollOneDie() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function App() {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);

  const handleRoll = () => {
    setDie1(rollOneDie());
    setDie2(rollOneDie());
  };

  const total = die1 + die2;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>DICEE</Text>

      <View style={styles.diceRow}>
        <View style={styles.diceBox}>
          <Text style={styles.diceFace}>{DICE_FACES[die1 - 1]}</Text>
        </View>
        <View style={styles.diceBox}>
          <Text style={styles.diceFace}>{DICE_FACES[die2 - 1]}</Text>
        </View>
      </View>

      <Text style={styles.total}>Tổng: {total}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRoll} activeOpacity={0.8}>
        <Text style={styles.buttonText}>🎲 Roll</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#f9c22e',
    letterSpacing: 4,
    marginBottom: 40,
  },
  diceRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  diceBox: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  diceFace: {
    fontSize: 70,
    color: '#1b262c',
  },
  total: {
    fontSize: 18,
    color: '#bbe1fa',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f9c22e',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1b262c',
  },
});
