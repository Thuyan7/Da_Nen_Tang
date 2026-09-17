import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';


export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.diamond}>💎</Text>

      <Text style={styles.title}>I Am Rich</Text>
      <Text style={styles.price}>$ 999.99</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.buttonText}>Chạm để cảm nhận sự giàu có</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalDiamond}>💎</Text>
            <Text style={styles.modalTitle}>Chúc mừng!</Text>
            <Text style={styles.modalText}>
              Bạn chính thức là người dùng "giàu có" nhất hôm nay.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c2b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  diamond: {
    fontSize: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f5d76e',
    marginBottom: 4,
  },
  price: {
    fontSize: 22,
    color: '#ffffff',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#b8b8c8',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#f5d76e',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },
  buttonText: {
    color: '#1c1c2b',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    width: '80%',
  },
  modalDiamond: {
    fontSize: 50,
    marginBottom: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1c1c2b',
  },
  modalText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#1c1c2b',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#f5d76e',
    fontWeight: 'bold',
  },
});
