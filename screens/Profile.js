import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>
      <Text style={styles.text}>Nama: Erfian Junianto</Text>
      <Text style={styles.text}>Profesi: Dosen</Text>
      <Text style={styles.text}>Keahlian: Praktisi IT dan Digital Marketing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 2 },
});
