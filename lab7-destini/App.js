import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';

import { STORY, START_NODE_ID } from './data/story';
import StoryScreen from './components/StoryScreen';


export default function App() {
  const [currentNodeId, setCurrentNodeId] = useState(START_NODE_ID);

  const currentNode = STORY[currentNodeId];

  const handleChoose = (nextId) => {
    setCurrentNodeId(nextId);
  };

  const handleRestart = () => {
    setCurrentNodeId(START_NODE_ID);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>DESTINI</Text>
        <StoryScreen node={currentNode} onChoose={handleChoose} onRestart={handleRestart} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12111a',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f2b134',
    letterSpacing: 4,
    marginBottom: 24,
  },
});
