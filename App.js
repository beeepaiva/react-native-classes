// Importação de componentes
import { Text, StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

// Import das telas
import Tela1 from "./screens/Tela1";
import Tela2 from "./screens/Tela2";
import Tela3 from "./screens/Tela3";

// Import das Navegações
import {NavigationContainer} from '@react-navigation/native'

import BottomTabs_Tela2 from "./navigation/BottomTabs_Tela2";
import Drawer_Tela3 from "./navigation/Drawer_Tela3";

// Import das libs de navegação - Stack
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Import lib de icons
import {Ionicons} from '@expo/vector-icons';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Tela1'
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen 
        name='Tela1' 
        component={Tela1} 
        />
        <Stack.Screen 
        name='Nav-Tela2' 
        component={BottomTabs_Tela2} 
        />
        <Stack.Screen 
        name='Nav-Tela3' 
        component={Drawer_Tela3} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );

}
