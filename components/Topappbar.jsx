import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Topappbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.txt}>FIFA22 / PS4</Text>
        <Image
          style={{marginLeft: 7}}
          source={require('../assets/graphics.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8,
  },
  innercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#181A1F',
    marginTop: 10,
    padding: 7,
    marginHorizontal: 100,
    borderRadius: 10,
  },
  txt: {
    color: '#9A96A2',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Topappbar;
