import { View, Text, StyleSheet, Switch, Image, Button, useColorScheme, useWindowDimensions } from 'react-native';
import react, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

import Header from '../components/Header'
import Footer from '../components/Footer'
import {styles} from '../components/styles';

import {NavigationContainer, useNavigation} from '@react-navigation/native'

export default function AboutScreen(){

const navigation = useNavigation();
  return(
    
    <View style={styles.container}>
      <Header/>
      <View style={{flex: 0.8, backgroundColor: '#fff', justifyContent: 'center'}}>
      <Text style={{margin: 5}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elit ultrices ligula semper vehicula nec convallis est. Morbi eros neque, consequat eget vehicula sed, sodales et erat. Nunc nec mattis velit. Mauris eget ex erat. Nunc ornare mauris in mattis semper. Morbi porttitor velit sed nunc euismod finibus. In sollicitudin dictum diam, vitae pulvinar quam molestie sit amet. Morbi dictum est nec dictum tristique. Cras iaculis vehicula lacus et sagittis. Nulla rhoncus felis vitae turpis mollis, vel venenatis metus mattis. Duis vitae nulla finibus, imperdiet nulla eget, porta augue. Fusce in mi dolor. Pellentesque et nisi risus.
      </Text>
            <Button onPress={()=>{navigation.goBack()}} title='Voltar'/>
            
    </View>
    </View>
  )
}

