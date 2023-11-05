import React from 'react';

import { screen } from '@testing-library/react-native';
import { wrapAndRender } from '../../shared/jest/render';
import { ProgramCardList } from './ProgramCardList.component';

const mockedProgram = [
  {
    name: 'name',
    unit: 'unit',
    onPlay: jest.fn(),
    onView: jest.fn(),
    onEdit: jest.fn(),
    onDelete: jest.fn(),
    completion: {
      currentStep: 0,
      totalStep: 0,
      performances: [10],
      finalGoal: 100,
      nextGoal: 0,
    },
  },
];

describe('Program List', () => {
  test('should render name and objective on one card', () => {
    wrapAndRender(<ProgramCardList data={mockedProgram} />);

    expect(screen.getByText('name')).toBeTruthy();
    expect(screen.getByText('10 unit on 100 unit')).toBeTruthy();
  });
});
