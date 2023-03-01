import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from './src/theme/theme';
import { HomeScreen } from './src/Home/HomeScreen';
import { LoginScreen } from './src/Login/LoginScreen';

import { RootStackParamList } from './src/types/RootStack';
import { ProgramScreen } from './src/Program/ProgramScreen';
import { CreateProgramScreen } from './src/Program/CreateProgramScreen';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Stack.Navigator initialRouteName="Program">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={LoginScreen} />
            <Stack.Screen name="Program" component={ProgramScreen} />
            <Stack.Screen
              name="CreateProgramScreen"
              component={CreateProgramScreen}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
