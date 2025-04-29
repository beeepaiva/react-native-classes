import { Text, StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

// Import das telas
import TelaInicial from "./screens/TelaInicial";

// Import das Navegações
import BottomTabs_Main from "./navigation/BottomTabs_Main";
import Drawer_Sobre from "./navigation/Drawer_Sobre";

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {Ionicons} from '@expo/vector-icons';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='TelaInicial'
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen 
        name='TelaInicial' 
        component={TelaInicial} 
        />
        <Stack.Screen 
        name='Cardapio' 
        component={BottomTabs_Main} 
        />
        <Stack.Screen 
        name='Sobre' 
        component={Drawer_Sobre} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );

}
