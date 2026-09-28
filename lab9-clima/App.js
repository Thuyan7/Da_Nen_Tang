import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Location from 'expo-location';

import { OPENWEATHER_API_KEY } from './config';
import { getWeatherByCoords, getWeatherByCity } from './services/weatherService';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cityInput, setCityInput] = useState('');

  const isKeyMissing = OPENWEATHER_API_KEY === 'YOUR_OPENWEATHERMAP_API_KEY_HERE';

  const loadWeatherByLocation = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Bạn chưa cấp quyền vị trí. Hãy thử tìm theo tên thành phố bên dưới.');
        setLoading(false);
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const data = await getWeatherByCoords(
        location.coords.latitude,
        location.coords.longitude
      );
      setWeather(data);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchCity = async () => {
    if (!cityInput.trim()) return;
    setLoading(true);
    setErrorMsg(null);
    try {
      const data = await getWeatherByCity(cityInput.trim());
      setWeather(data);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isKeyMissing) {
      loadWeatherByLocation();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>CLIMA 🌍</Text>

        {isKeyMissing && (
          <Text style={styles.warning}>
            ⚠️ Chưa có API key. Mở file config.js, thay OPENWEATHER_API_KEY bằng key thật
            (đăng ký miễn phí tại openweathermap.org) rồi chạy lại app.
          </Text>
        )}

        {loading && <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 30 }} />}

        {!loading && errorMsg && <Text style={styles.error}>{errorMsg}</Text>}

        {!loading && weather && (
          <View style={styles.weatherBox}>
            <Text style={styles.emoji}>{weather.emoji}</Text>
            <Text style={styles.temperature}>{weather.temperatureC}°C</Text>
            <Text style={styles.description}>{weather.description}</Text>
            <Text style={styles.city}>{weather.cityName}</Text>
          </View>
        )}

        <View style={styles.searchRow}>
          <TextInput
            style={styles.input}
            placeholder="Nhập tên thành phố..."
            placeholderTextColor="#8899bb"
            value={cityInput}
            onChangeText={setCityInput}
            onSubmitEditing={handleSearchCity}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearchCity}>
            <Text style={styles.searchButtonText}>Tìm</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.locationButton} onPress={loadWeatherByLocation}>
          <Text style={styles.locationButtonText}>📍 Dùng vị trí hiện tại</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3c72',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 3,
    marginBottom: 20,
  },
  warning: {
    color: '#ffd166',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  error: {
    color: '#ff6b6b',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
  },
  weatherBox: {
    alignItems: 'center',
    marginBottom: 30,
  },
  emoji: {
    fontSize: 70,
  },
  temperature: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  description: {
    fontSize: 16,
    color: '#dbe4ff',
    textTransform: 'capitalize',
    marginTop: 4,
  },
  city: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
    marginTop: 8,
  },
  searchRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff22',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#ffffff',
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: '#ffd166',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  searchButtonText: {
    fontWeight: 'bold',
    color: '#1e3c72',
  },
  locationButton: {
    marginTop: 16,
  },
  locationButtonText: {
    color: '#dbe4ff',
    fontSize: 14,
  },
});
