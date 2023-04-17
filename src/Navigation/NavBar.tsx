import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../Settings/SettingScreen';
import { StackNavigationProgram } from '../Program/StackNavigationProgram';

const Tab = createBottomTabNavigator();

export const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Program" component={StackNavigationProgram} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
