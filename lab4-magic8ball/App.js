import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';


const ANSWERS = [
  'Chắc chắn rồi!',
  'Không nên đâu.',
  'Có vẻ khả quan đấy.',
  'Hỏi lại sau nhé.',
  'Câu trả lời là KHÔNG.',
  'Rất có thể!',
  'Tương lai chưa rõ ràng.',
  'Đừng trông cậy vào điều đó.',
  'Chắc chắn là CÓ.',
  'Nguồn tin nói KHÔNG.',
];

export default function App() {
  const [answer, setAnswer] = useState('Chạm vào quả cầu để hỏi...');

  const askQuestion = () => {
    const randomIndex = Math.floor(Math.random() * ANSWERS.length);
    setAnswer(ANSWERS[randomIndex]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>MAGIC 8 BALL 🔮</Text>

      <TouchableOpacity style={styles.ball} onPress={askQuestion} activeOpacity={0.85}>
        <View style={styles.innerCircle}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.hint}>Chạm vào quả cầu để nhận câu trả lời</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 2,
    marginBottom: 40,
  },
  ball: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#333',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  innerCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#2255ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  answerText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  hint: {
    marginTop: 30,
    color: '#888',
    fontSize: 13,
  },
});
