import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GP = () => {
  return (
    <LinearGradient
      colors={['#301934', '#121212']}
      locations={[0.062, 0.8248]} 
      style={styles.gradientBackground}
    >
      <View style={styles.rowcontainer}>
        <Image style={styles.lines} source={require('../assets/lines1.png')} />
        <Image style={styles.img} source={require('../assets/box1.png')} />
        <Image style={styles.lines} source={require('../assets/lines2.png')} />
        <View>
          <Image source={require('../assets/box2.png')} />
          <View style={styles.innerrowcontainer}>
            <Image source={require('../assets/GP.png')} />
            <Text style={styles.txt}>1650/2000</Text>
          </View>
        </View>
        <Image style={styles.lines} source={require('../assets/lines3.png')} />
        <View>
          <Image source={require('../assets/box3.png')} />
          <View style={styles.innerrowcontainer}>
            <Image source={require('../assets/GP.png')} />
            <Text style={styles.txt1}>3000</Text>
          </View>
        </View>
        <Image style={styles.lines} source={require('../assets/lines4.png')} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  img: {
    marginTop: 10,
  },
  lines: {
    marginTop: 37,
  },
  innerrowcontainer: {
    flexDirection: 'row',
  },
  txt: {
    fontSize: 13,
    color: '#C9CAC4',
    fontWeight: 'bold',
  },
  txt1: {
    fontSize: 13,
    color: '#C9CAC4',
    fontWeight: 'bold',
  },
});

export default GP;
