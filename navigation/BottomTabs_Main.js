import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Drawer_Sobre from "../navigation/Drawer_Sobre";

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs_Main() {
  return (
    <Tab.Navigator  initialRouteName='Cardapio'
    screenOptions={
      ({ route }) => ({
        tabBarLabelStyle: {
          color: 'black'
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Welcome') {
            if(focused){
              iconName = 'home';
            }else{
              iconName = 'home-outline';
            }
          } else if (route.name === 'About') {
            if(focused){
              iconName = 'information-circle';
            }else{
              iconName = 'information-circle-outline';
            }
          }
          return <Ionicons name={iconName} size={size}/>;
        },
    })}
    >
      <Tab.Screen name="Cardapio" component={BottomTabs_Main} />
      <Tab.Screen name="Sobre" component={Drawer_Sobre} />
    </Tab.Navigator>
  );
}
