import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

import { questions, QuizBrain } from './data/quizBrain';
import QuestionCard from './components/QuestionCard';
import AnswerButtons from './components/AnswerButtons';



export default function App() {
  const quizBrainRef = useRef(new QuizBrain(questions));
  const brain = quizBrainRef.current;

  const [tick, setTick] = useState(0);

  const finished = brain.isFinished();

  const currentQuestion = !finished ? brain.getCurrentQuestion() : null;
  const questionText = currentQuestion?.text ?? 'Đang tải câu hỏi...';
  const progressText = brain.getProgressText();
  const scoreText = brain.getScoreText();

  const handleAnswer = (userAnswer) => {
    if (brain.isFinished()) return;
    brain.checkAnswer(userAnswer);
    brain.nextQuestion();
    setTick((t) => t + 1); 
  };

  const handleRestart = () => {
    quizBrainRef.current = new QuizBrain(questions);
    setTick((t) => t + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>QUIZZLER</Text>

      {!finished ? (
        <>
          <QuestionCard questionText={questionText} progressText={progressText} />
          <AnswerButtons onAnswer={handleAnswer} />
        </>
      ) : (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Hoàn thành!</Text>
          <Text style={styles.resultScore}>{scoreText}</Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
            <Text style={styles.restartText}>Làm lại</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.scoreFooter}>{!finished ? scoreText : ''}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b2f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f2b134',
    letterSpacing: 3,
    marginBottom: 30,
  },
  scoreFooter: {
    marginTop: 24,
    color: '#8888aa',
    fontSize: 14,
  },
  resultBox: {
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  resultScore: {
    fontSize: 18,
    color: '#f2b134',
    marginBottom: 24,
  },
  restartButton: {
    backgroundColor: '#f2b134',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
  },
  restartText: {
    fontWeight: 'bold',
    color: '#1b1b2f',
    fontSize: 16,
  },
});
