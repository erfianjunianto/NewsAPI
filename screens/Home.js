import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function Home({navigation}) {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL ='https://newsdata.io/api/1/latest?apikey=pub_8c6c1e2581be4af485dbb862435f1420&q=education&country=id&language=id';

  // Fetch API ketika halaman pertama kali dibuka
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results || []); // simpan hasil API
      })
      .catch((error) => {
        console.log('Error fetching API: ', error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Mengambil data...</Text>
      </View>
    );
  }

  const goToDetail = (item) => {
    setSelectedTitle(item.title);
    navigation.navigate('Detail', { item });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Berita Pendidikan (ID)</Text>

      <View style={styles.cardContainer}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => goToDetail(item)}
            activeOpacity={0.8}
          >
            <Image
              source={{
                uri: item.image_url
                  ? item.image_url
                  : 'https://via.placeholder.com/400x250?text=No+Image'
              }}
              style={styles.image}
            />

            <Text style={styles.title}>
              {item.title ? item.title.substring(0, 60) + '...' : 'Tanpa Judul'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 15
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    padding: 10,
    textAlign: 'center',
    fontWeight: '500'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});
