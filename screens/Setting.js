import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Setting</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 2 },
});
