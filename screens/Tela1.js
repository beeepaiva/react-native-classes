import { View, Text, StyleSheet, Switch, Image, useColorScheme, useWindowDimensions, Button } from 'react-native';
import react, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

import {styles} from '../components/styles';

export default function Tela1({navigation}) {

  return (
    <View style={styles.container}>
      <View style={{flex: 0.8, backgroundColor: '#fff', fontSize: 23, justifyContent:'center', alignItems:'center'}}>
      <Image
      source={{uri:'https://img.freepik.com/vetores-gratis/pizza-slice-felted-floating-cartoon-vector-icon-ilustracao-icon-objeto-alimentar-vector-plano-isolado_138676-10422.jpg?t=st=1745277964~exp=1745281564~hmac=ad5e2e81bbd73ac4a0264352c87c93dec704bff2d251f87b673189f6f5b94747&w=826'}}
      style={{height: 100, width: 100, resizeMode:'contain', margin: 5}}
    />
      <Text style={{fontSize: 20, marginBottom: 30, marginTop: 30}}>Seja bem vindo(a) a pizzaria do BCC!</Text>
      <Button title="Entrar" onPress={() => navigation.replace('Nav-Tela2')} />
    </View>
    </View>
  );
}

