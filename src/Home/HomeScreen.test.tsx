import React from 'react';

import { screen } from '@testing-library/react-native';
import { HomeScreen } from './HomeScreen';
import { wrapAndRender } from '../shared/jest/render';

describe('Home Screen', () => {
  test('should verify welcoming title', () => {
    wrapAndRender(<HomeScreen />);

    expect(screen.getByText('Welcome')).toBeTruthy();
  });

  test('should verify two buttons', () => {
    wrapAndRender(<HomeScreen />);

    expect(screen.getByText('Login')).toBeTruthy();
    expect(screen.getByText('Register')).toBeTruthy();
  });
});
