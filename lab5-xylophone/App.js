import React from 'react';
import { StyleSheet, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';

const KEYS = [
  { color: '#e53935', sound: require('./assets/sounds/note1.wav') },
  { color: '#fb8c00', sound: require('./assets/sounds/note2.wav') },
  { color: '#fdd835', sound: require('./assets/sounds/note3.wav') },
  { color: '#43a047', sound: require('./assets/sounds/note4.wav') },
  { color: '#1e88e5', sound: require('./assets/sounds/note5.wav') },
  { color: '#3949ab', sound: require('./assets/sounds/note6.wav') },
  { color: '#8e24aa', sound: require('./assets/sounds/note7.wav') },
  { color: '#00897b', sound: require('./assets/sounds/note8.wav') },
];

export default function App() {
  const playSound = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.keysContainer}>
        {KEYS.map((key, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.key, { backgroundColor: key.color }]}
            activeOpacity={0.6}
            onPress={() => playSound(key.sound)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  keysContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  key: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff33',
  },
});
