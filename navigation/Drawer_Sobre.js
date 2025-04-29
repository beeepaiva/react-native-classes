import React from 'react';
import {Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sobre from '../screens/Sobre';
import TelaInicial from '../screens/TelaInicial';

const Drawer = createDrawerNavigator();

export default function Drawer_Sobre({ navigation }) {
  return (
    <Drawer.Navigator        
    initialRouteName='Sobre'
    >
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
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
