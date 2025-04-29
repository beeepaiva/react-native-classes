import React from 'react';
import {Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import TelaInicial from '../screens/TelaInicial';

const Drawer = createDrawerNavigator();

export default function About_Drawer({ navigation }) {
  return (
    <Drawer.Navigator        
    initialRouteName='About'
    >
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          headerRight: () => (
            <Button
              title="Logout"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'TelaInicial' }],
                })
              }
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Sair (Logout)"
        component={TelaInicial}
        listeners={({ navigation }) => ({
          focus: () => {
            // Limpa histórico ao acessar o TelaInicial
            navigation.reset({
              index: 0,
              routes: [{ name: 'TelaInicial' }],
            });
          },
        })}
        options={{
          headerShown: false,
        }}
      />
     
    </Drawer.Navigator>
  );
}
