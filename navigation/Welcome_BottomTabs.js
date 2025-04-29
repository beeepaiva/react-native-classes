import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from "../screens/Welcome";
import About_Drawer from "../navigation/About_Drawer";

const Tab = createBottomTabNavigator();

export default function WelcomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="About" component={About_Drawer} />
    </Tab.Navigator>
  );
}
