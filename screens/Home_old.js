import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Button } from '@react-navigation/elements';

export default function Home({ navigation }) {
  const [selectedTitle, setSelectedTitle] = useState('');

  const data = [
    {
      id: 1,
      title: 'Gunung Bromo',
      image: 'https://picsum.photos/id/1018/400/250',
      description: 'Gunung Bromo terkenal dengan matahari terbitnya yang indah karena pemandangan dramatisnya dengan gradasi warna langit yang menakjubkan, kabut di lautan pasir, dan siluet pegunungan di sekitarnya. Fenomena ini dapat dinikmati dari berbagai spot seperti Penanjakan 1, yang merupakan salah satu spot paling populer dan ramai, atau spot lain yang lebih tenang seperti Penanjakan 2 atau Tosari.'
    },
    {
      id: 2,
      title: 'Pantai Kuta',
      image: 'https://picsum.photos/id/1015/400/250',
      description: 'Pantai Kuta adalah ikon pariwisata Bali.'
    },
    {
      id: 3,
      title: 'Danau Toba',
      image: 'https://picsum.photos/id/1016/400/250',
      description: 'Danau Toba adalah danau vulkanik terbesar di dunia.'
    },
  ];

  const goToDetail = (item) => {
    setSelectedTitle(item.title);
    navigation.navigate('Detail', { item });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Daftar Wisata Indonesia</Text>

      <Button onPress={() => navigation.navigate('Profile')}>
        Buka Profil
      </Button>

      {selectedTitle ? (
        <Text style={styles.selected}>Dipilih: {selectedTitle}</Text>
      ) : (
        <Text style={styles.selected}>Belum ada pilihan</Text>
      )}

      <View style={styles.cardContainer}>
        {data.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => goToDetail(item)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginVertical: 10 },
  selected: { textAlign: 'center', color: '#555', marginBottom: 12 },
  cardContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 15,
  },
  image: { width: '100%', height: 120 },
  title: { textAlign: 'center', padding: 8, fontWeight: '500' },
});
