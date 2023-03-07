import React from 'react';

import { screen } from '@testing-library/react-native';
import { wrapAndRender } from '../../shared/jest/render';
import { CardList } from './CardList';

const mockedProgram = [
  {
    title: 'name',
    subtitle: 'goal',
  },
  {
    title: 'test',
    subtitle: 'click',
  },
];

describe('Program List', () => {
  test('should data on one card', () => {
    wrapAndRender(<CardList data={mockedProgram} />);

    expect(screen.getByText('name')).toBeTruthy();
  });
});
