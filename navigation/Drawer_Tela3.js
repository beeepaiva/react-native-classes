import React from 'react';
import {Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tela3 from '../screens/Tela3';


export default function Drawer_Tela3({ navigation }) {
    
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator        
    initialRouteName='Tela3'
    >
      <Drawer.Screen
        name="Tela3"
        component={Tela3}
      />
     
    </Drawer.Navigator>
  );
}