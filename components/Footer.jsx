import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Footer = () => {
  return (
    <LinearGradient
    colors={['#121212', '#301934']}
    locations={[0.2, 0.5248]} 
    style={styles.gradientBackground}
  >
    <View style={styles.conatiner}>
      <View style={styles.innercontainer}>
        <View style={styles.rowconatiner1}>
              <Image style={styles.image} source={require('../assets/reader.png')}/>
              <Text style={styles.txt}>Consulta {'\n'} regolamento</Text>
        </View>
        <View style={styles.rowconatiner2}>
              <Text style={styles.txt}>Disattiva {'\n'} notifiche</Text>
              <Image style={styles.image} source={require('../assets/vector.png')}/>
        </View>
      </View>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        // backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        paddingBottom: 35
    },
    innercontainer: {
        flexDirection: 'row',
    },
    rowconatiner1: {
        flexDirection: 'row',
        marginHorizontal: 7,
        backgroundColor: '#6A3AC7',
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 10
    },
    rowconatiner2: {
        flexDirection: 'row',
        marginHorizontal: 7,
        backgroundColor: '#B94FC6',
        paddingHorizontal: 25,
        paddingVertical: 7,
        borderRadius: 10
    },
    image: {
        width: 25,
        height: 27,
        marginTop: 10
    },
    txt: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Footer