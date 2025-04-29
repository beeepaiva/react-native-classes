import { View, Text, StyleSheet, Switch, Image, useColorScheme, useWindowDimensions, Button } from 'react-native';
import react, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

import Header from '../components/Header'
import Footer from '../components/Footer'
import {styles} from '../components/styles';
import Welcome from '../navigation/Welcome_BottomTabs';

export default function Login({navigation}) {

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={{flex: 0.8, backgroundColor: '#fff'}}>
    
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => navigation.replace('Welcome')} />
    </View>
          <Footer/>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

