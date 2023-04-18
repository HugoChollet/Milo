import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../Settings/SettingScreen';
import { StackNavigationProgram } from '../Program/StackNavigationProgram';
import { HomeIcon } from '../icons/Home.icon';
import { SettingIcon } from '../icons/Setting.icon';
import { useTheme } from '@emotion/react';

const Tab = createBottomTabNavigator();

export const NavBar = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === 'Program') {
            return <HomeIcon color={color} />;
          } else if (route.name === 'Settings') {
            return <SettingIcon color={color} />;
          }
        },
        tabBarActiveTintColor: theme.colors.primary[500],
        tabBarInactiveTintColor: theme.colors.grey[300],
      })}>
      <Tab.Screen name="Program" component={StackNavigationProgram} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
