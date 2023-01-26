import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HomeScreen } from './src/Home/HomeScreen';
import { theme } from './src/theme/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
