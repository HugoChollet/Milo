import React from 'react';

import { screen } from '@testing-library/react-native';
import { wrapAndRender } from '../shared/jest/render';
import { ProgramsList } from './ProgramsList';

const mockedPrograms = [
  {
    name: 'name',
    objective: 'goal',
  },
  {
    name: 'test',
    objective: 'click',
  },
];

describe('Programs List', () => {
  test('should data on one card', () => {
    wrapAndRender(<ProgramsList data={mockedPrograms} />);

    expect(screen.getByText('name')).toBeTruthy();
  });
});
