import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen } from './src/Home/HomeScreen';
import { theme } from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
