import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function getEndingTextStyle(isGood) {
  return { color: isGood ? '#7ee787' : '#ff7b72', fontWeight: 'bold' };
}

export default function StoryScreen({ node, onChoose, onRestart }) {
  return (
    <View style={styles.card}>
      <Text style={[styles.storyText, node.isEnding && getEndingTextStyle(node.isGood)]}>
        {node.text}
      </Text>

      {!node.isEnding ? (
        node.choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={styles.choiceButton}
            onPress={() => onChoose(choice.nextId)}
          >
            <Text style={styles.choiceText}>{choice.label}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
          <Text style={styles.restartText}>Chơi lại từ đầu</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#211f2e',
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  storyText: {
    color: '#ffffff',
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 24,
  },
  choiceButton: {
    backgroundColor: '#4d3dff',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  choiceText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 15,
  },
  restartButton: {
    backgroundColor: '#f2b134',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  restartText: {
    color: '#211f2e',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
