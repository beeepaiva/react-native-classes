import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sobre from '../screens/Sobre';
import Dicas from '../screens/Dicas';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Dicas" component={Dicas} />
    </Drawer.Navigator>
  );
}
