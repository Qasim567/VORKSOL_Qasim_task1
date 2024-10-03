import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    image: require('../assets/IMAGE1.png'),
    title: 'Coscu',
    status: 'Live',
  },
  {
    id: '2',
    image: require('../assets/IMAGE2.png'),
    title: 'Rubius',
    status: 'Live',
  },
  {
    id: '3',
    image: require('../assets/IMAGE3.png'),
    title: 'SLAKUN10',
    status: 'Live',
  },
  {
    id: '4',
    image: require('../assets/IMAGE3.png'),
    title: 'SLAKUN10',
    status: 'Offline',
  },
  {
    id: '5',
    image: require('../assets/IMAGE1.png'),
    title: 'Coscu',
    status: 'Offline',
  },
  {
    id: '6',
    image: require('../assets/IMAGE2.png'),
    title: 'Rubius',
    status: 'Live',
  },
];

const Creator = () => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={item.status === 'Live' ? styles.liveTag : styles.offlineTag}>
        <Image
          source={require('../assets/ellipse.png')} // Red dot for Live or change image for Offline if needed
          style={styles.dot}
        />
        <Text style={styles.liveText}>{item.status}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.mainconatiner}>
      <Text style={styles.header}>Creators</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.container}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Discover more &gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainconatiner: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    padding: 7,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
  },
  card: {
    margin: 10,
    alignItems: 'center',
    position: 'relative',
    width: '28%',
  },
  liveTag: {
    position: 'absolute',
    top: 6,
    left: 5,
    backgroundColor: 'red',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    zIndex: 1,
  },
  offlineTag: {
    position: 'absolute',
    top: 6,
    left: 5,
    backgroundColor: '#605D66',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    zIndex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  liveText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    backgroundColor: '#121212',
    paddingVertical: 12,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#B29DFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Creator;
