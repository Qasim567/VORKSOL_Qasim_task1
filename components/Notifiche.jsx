import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Notifiche = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require('../assets/vector.png')}
          style={styles.notificationIcon}
        />
        <Text style={styles.notificationText}>Notifiche attive</Text>
      </View>

      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <Image
          source={require('../assets/vans.png')}
          style={styles.overlayImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#33009A', '#7F56FF', '#FF4782']}
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0.25}}>
            <Text style={styles.buttonText}>Gioca ora</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#301934',
  },
  topBar: {
    flexDirection: 'row',
    backgroundColor: '#B94FC6',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  notificationText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  overlayImage: {
    width: '100%',
    height: 70,
    marginBottom: 110,
    marginTop: 5,
  },
  button: {
    paddingHorizontal: 40,
    marginBottom: 30,
    borderRadius: 10,
    width: '70%',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Notifiche;
