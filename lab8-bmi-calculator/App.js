import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import GenderCard from './components/GenderCard';
import CounterField from './components/CounterField';
import { calculateBMI, getBMICategory } from './utils/bmiCalculator';


export default function App() {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(170); // cm
  const [weight, setWeight] = useState(60); // kg
  const [age, setAge] = useState(20);
  const [showResult, setShowResult] = useState(false);

  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);

  const handleCalculate = () => setShowResult(true);
  const handleRecalculate = () => setShowResult(false);

  if (showResult) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>KẾT QUẢ BMI</Text>

        <View style={styles.resultCard}>
          <Text style={[styles.categoryLabel, { color: category.color }]}>
            {category.label}
          </Text>
          <Text style={styles.bmiValue}>{bmi}</Text>
          <Text style={styles.advice}>{category.advice}</Text>
        </View>

        <TouchableOpacity style={styles.recalcButton} onPress={handleRecalculate}>
          <Text style={styles.recalcText}>TÍNH LẠI</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>BMI CALCULATOR</Text>

      {/* Hàng chọn giới tính - 2 GenderCard đặt cạnh nhau */}
      <View style={styles.row}>
        <GenderCard
          icon="♂️"
          label="NAM"
          isSelected={gender === 'male'}
          onPress={() => setGender('male')}
        />
        <GenderCard
          icon="♀️"
          label="NỮ"
          isSelected={gender === 'female'}
          onPress={() => setGender('female')}
        />
      </View>

      {/* Card chiều cao - dùng chung component CounterField, bước nhảy 1cm */}
      <CounterField
        label="CHIỀU CAO"
        value={height}
        unit="cm"
        onIncrease={() => setHeight((h) => h + 1)}
        onDecrease={() => setHeight((h) => Math.max(50, h - 1))}
      />

      {/* Hàng cân nặng + tuổi đặt cạnh nhau, dùng chung component CounterField */}
      <View style={styles.row}>
        <CounterField
          label="CÂN NẶNG"
          value={weight}
          unit="kg"
          onIncrease={() => setWeight((w) => w + 1)}
          onDecrease={() => setWeight((w) => Math.max(20, w - 1))}
        />
        <CounterField
          label="TUỔI"
          value={age}
          unit=""
          onIncrease={() => setAge((a) => a + 1)}
          onDecrease={() => setAge((a) => Math.max(1, a - 1))}
        />
      </View>

      <TouchableOpacity style={styles.calcButton} onPress={handleCalculate}>
        <Text style={styles.calcText}>TÍNH BMI</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3ddc84',
    letterSpacing: 2,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 12,
  },
  calcButton: {
    backgroundColor: '#3ddc84',
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  calcText: {
    color: '#0a0e27',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  resultCard: {
    backgroundColor: '#1d1f33',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    marginBottom: 24,
  },
  categoryLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bmiValue: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  advice: {
    fontSize: 14,
    color: '#8888aa',
    textAlign: 'center',
  },
  recalcButton: {
    backgroundColor: '#2c2f4a',
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  recalcText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
