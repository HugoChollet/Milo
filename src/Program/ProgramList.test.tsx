import React from 'react';

import { screen } from '@testing-library/react-native';
import { wrapAndRender } from '../shared/jest/render';
import { ProgramList } from './ProgramList';

const mockedProgram = [
  {
    name: 'name',
    objective: 'goal',
  },
  {
    name: 'test',
    objective: 'click',
  },
];

describe('Program List', () => {
  test('should data on one card', () => {
    wrapAndRender(<ProgramList data={mockedProgram} />);

    expect(screen.getByText('name')).toBeTruthy();
  });
});
