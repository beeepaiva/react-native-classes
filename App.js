import { Text, StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

import Login from "./screens/Login";
import TelaInicial from "./screens/TelaInicial";

// Navegações
import WelcomeTabs from "./navigation/Welcome_BottomTabs";
import About_Drawer from "./navigation/About_Drawer";

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
        name='Welcome' 
        component={WelcomeTabs} 
        />
        <Stack.Screen 
        name='About' 
        component={About_Drawer} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );

}
