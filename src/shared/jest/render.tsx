import React from 'react';
import {
  render,
  RenderOptions,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '../../theme/theme';

export const wrapAndRender = (
  component: React.ReactElement,
  options?: RenderOptions,
) => {
  const frame = { x: 0, y: 0, width: 0, height: 0 };
  const insets = { top: 0, left: 0, right: 0, bottom: 0 };

  return render(component, {
    wrapper: ({ children }) => (
      <SafeAreaProvider
        initialMetrics={{
          frame,
          insets,
        }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SafeAreaProvider>
    ),
    ...options,
  });
};

export const waitForLoaders = () => {
  return waitFor(() => {
    const loader = screen.queryByTestId('activity-indicator');
    if (loader) throw new Error('Loader still visible');
  });
};
