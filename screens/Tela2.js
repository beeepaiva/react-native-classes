import { View, Text, Button, StyleSheet, Switch, Image, useColorScheme, useWindowDimensions } from 'react-native';
import react, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

import {styles} from '../components/styles';

export default function Tela2({navigation}) {

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={{flex: 0.8, backgroundColor: '#fff'}}>
    
      <Text style={{fontSize: 24, color: 'black', alignContent:'center'}} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elit ultrices ligula semper vehicula nec convallis est. Morbi eros neque, consequat eget vehicula sed, sodales et erat. Nunc nec mattis velit. Mauris eget ex erat. Nunc ornare mauris in mattis semper. Morbi porttitor velit sed nunc euismod finibus. In sollicitudin dictum diam, vitae pulvinar quam molestie sit amet. Morbi dictum est nec dictum tristique. Cras iaculis vehicula lacus et sagittis. Nulla rhoncus felis vitae turpis mollis, vel venenatis metus mattis. Duis vitae nulla finibus, imperdiet nulla eget, porta augue. Fusce in mi dolor. Pellentesque et nisi risus.
      </Text>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
