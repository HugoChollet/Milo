import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from './src/theme/theme';
import { HomeScreen } from './src/Home/HomeScreen';
import { LoginScreen } from './src/Login/LoginScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
