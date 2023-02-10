import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from './src/theme/theme';
import { HomeScreen } from './src/Home/HomeScreen';

import { RootStackParamList } from './src/types/RootStack';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
