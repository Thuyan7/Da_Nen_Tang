import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestionCard({ questionText, progressText }) {
  return (
    <View style={styles.card}>
      <Text style={styles.progress}>{progressText}</Text>
      <Text style={styles.questionText}>{questionText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2b2b45',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    minHeight: 160,
    justifyContent: 'center',
  },
  progress: {
    color: '#8888aa',
    fontSize: 13,
    marginBottom: 12,
  },
  questionText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
  },
});
