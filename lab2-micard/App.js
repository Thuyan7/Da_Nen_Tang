import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  StatusBar,
  SafeAreaView,
} from 'react-native';


const PROFILE = {
  name: 'Đặng Ngọc Thúy An',
  title: 'Sinh viên ngành Công nghệ thông tin',
  initials: 'TA',
  phone: '0896463176',
  email: 'andnt.23it@vku.udn.vn',
  twitter: '@thuyan',
};

export default function App() {
  const callPhone = () => Linking.openURL(`tel:${PROFILE.phone}`);
  const sendEmail = () => Linking.openURL(`mailto:${PROFILE.email}`);
  const openTwitter = () =>
    Linking.openURL(`https://twitter.com/${PROFILE.twitter.replace('@', '')}`);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{PROFILE.initials}</Text>
        </View>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>{PROFILE.title}</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.row} onPress={callPhone}>
          <Text style={styles.icon}>📞</Text>
          <Text style={styles.rowText}>{PROFILE.phone}</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row} onPress={sendEmail}>
          <Text style={styles.icon}>✉️</Text>
          <Text style={styles.rowText}>{PROFILE.email}</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row} onPress={openTwitter}>
          <Text style={styles.icon}>🐦</Text>
          <Text style={styles.rowText}>{PROFILE.twitter}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39424e',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4db6ac',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#ffffff33',
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  title: {
    fontSize: 14,
    color: '#b0bec5',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 24,
    width: '85%',
    paddingVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 22,
    marginRight: 16,
    width: 28,
    textAlign: 'center',
  },
  rowText: {
    fontSize: 15,
    color: '#37474f',
  },
  divider: {
    height: 1,
    backgroundColor: '#eceff1',
    marginHorizontal: 20,
  },
});
