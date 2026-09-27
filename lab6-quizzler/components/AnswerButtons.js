import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function AnswerButtons({ onAnswer }) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.button, styles.trueButton]}
        onPress={() => onAnswer(true)}
      >
        <Text style={styles.buttonText}>ĐÚNG</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.falseButton]}
        onPress={() => onAnswer(false)}
      >
        <Text style={styles.buttonText}>SAI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 24,
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 6,
  },
  trueButton: {
    backgroundColor: '#2e7d32',
  },
  falseButton: {
    backgroundColor: '#c62828',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
