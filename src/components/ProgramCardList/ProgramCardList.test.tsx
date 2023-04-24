import React from 'react';

import { screen } from '@testing-library/react-native';
import { wrapAndRender } from '../../shared/jest/render';
import { ProgramCardList } from './ProgramCardList.component';

const mockedProgram = [
  {
    name: 'name',
    objective: 'goal',
    onPlay: jest.fn(),
    onView: jest.fn(),
    onEdit: jest.fn(),
    onDelete: jest.fn(),
  },
];

describe('Program List', () => {
  test('should render name and objective on one card', () => {
    wrapAndRender(<ProgramCardList data={mockedProgram} />);

    expect(screen.getByText('name')).toBeTruthy();
    expect(screen.getByText('goal')).toBeTruthy();
  });
});
