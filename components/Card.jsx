import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = () => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#612DB8', '#EC1BE3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.1 }} 
        style={styles.card}
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>EXCLUSIVE DROPS</Text>
          </View>
          <Text style={styles.title}>Vans season</Text>
          <Text style={styles.description}>Lorem ipsum dolor sit amet</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Vai allo shop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/skateboard.png')}
            style={styles.skateboard}
          />
          <Image source={require('../assets/cap.png')} style={styles.cap} />
          <Image source={require('../assets/bag.png')} style={styles.bag} />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 15,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    backgroundColor: '#111111',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    color: '#ffffff',
    fontSize: 14,
    marginVertical: 10,
  },
  imageContainer: {
    position: 'relative',
    height: 150,
    marginBottom: 20,
  },
  skateboard: {
    position: 'absolute',
    top: 0,
    width: 110,
    height: 160,
    resizeMode: 'contain',
  },
  cap: {
    position: 'absolute',
    left: 40,
    top: 0,
    width: 60,
    height: 50,
    resizeMode: 'contain',
  },
  bag: {
    position: 'absolute',
    top: 10,
    left: 50,
    width: 80,
    height: 150,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#B94FC6',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
