import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function GenderCard({ icon, label, isSelected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#1d1f33',
    borderRadius: 16,
    paddingVertical: 30,
    alignItems: 'center',
    marginHorizontal: 6,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: '#3ddc84',
    backgroundColor: '#22273f',
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  label: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
