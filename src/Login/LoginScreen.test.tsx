import React from 'react';

import { screen } from '@testing-library/react-native';
import { LoginScreen } from './LoginScreen';
import { wrapAndRender } from '../shared/jest/render';

describe('Login Screen', () => {
  test('should verify label of input', () => {
    wrapAndRender(<LoginScreen />);

    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByText('Password')).toBeTruthy();
  });

  test('should verify placeholder of input', () => {
    wrapAndRender(<LoginScreen />);

    expect(screen.getByPlaceholderText('name.surname@mail.com')).toBeTruthy();
    expect(screen.getByPlaceholderText('******')).toBeTruthy();
  });
});
