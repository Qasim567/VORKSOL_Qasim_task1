import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Topappbar from './components/Topappbar';
import Notifiche from './components/Notifiche';
import GP from './components/GP';
import Middle from './components/Middle';
import Card from './components/Card';
import Creator from './components/Creator';
import Footer from './components/Footer';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content"/>
      <ScrollView>
        <Topappbar/>
        <Notifiche/>
        <GP/>
        <Middle/>
        <Card/>
        <Creator/>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
