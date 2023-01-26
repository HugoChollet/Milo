import React from 'react';

import {render, screen} from '@testing-library/react-native';
import {HomeScreen} from './HomeScreen';

test('should verify two questions', () => {
  render(<HomeScreen />);

  expect(screen.getByText('Welcome')).toBeTruthy();
});
