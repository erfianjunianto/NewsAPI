import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Detail({ route, navigation }) {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Detail ' + item.title,
    });
  }, [navigation, item.title]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 250, borderRadius: 12, marginBottom: 15 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 10 },
  desc: { fontSize: 16, lineHeight: 22, color: '#555' },
});
