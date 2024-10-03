import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Middle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <LinearGradient
          colors={[
            'rgba(80, 65, 122, 0)',
            'rgba(84, 58, 120, 0.199995)', 
            'rgba(214, 16, 170, 0.9)', 
          ]}
          locations={[0, 0.587, 1]}
          style={styles.gradientBackground}
        >
          <Image
            source={require('../assets/question_mark.png')} 
            style={styles.image}
          />
        </LinearGradient>
        <Text style={styles.text}>LOCKED</Text>
      </View>

      <View style={styles.item}>
        <LinearGradient
          colors={[
            'rgba(80, 65, 122, 0)', 
            'rgba(84, 58, 120, 0.199995)',
            'rgba(214, 182, 16, 0.9)', 
          ]}
          locations={[0, 0.587, 1]}
          style={styles.gradientBackground}
        >
          <View style={styles.goldPointsContainer}>
            <Image
              source={require('../assets/golden_points.png')} 
              style={{height: 100, width: 100}}
            />
            <Image
              source={require('../assets/plus_30.png')} 
              style={styles.plus30Image}
            />
          </View>
        </LinearGradient>
        <Text style={styles.text}>GOLDEN {'\n'} POINTS</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  item: {
    alignItems: 'center',
  },
  gradientBackground: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 100,
    },
  plus30Image: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 50,
    height: 30,
  },
  text: {
    marginTop: 10,
    color: '#CDBEFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  goldPointsContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Middle;
