import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import BottomTabs_TelaInicial from './navigation/BottomTabs_TelaInicial';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTabs" component={BottomTabs_TelaInicial} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
