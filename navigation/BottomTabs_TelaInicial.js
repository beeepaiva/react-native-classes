import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicial from '../screens/TelaInicial';
import Drawer_Sobre from './Drawer_Sobre';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={TelaInicial} />
      <Tab.Screen name="Sobre" component={Drawer_Sobre} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
