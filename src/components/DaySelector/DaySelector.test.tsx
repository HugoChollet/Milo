import React from 'react';
import { screen } from '@testing-library/react-native';
import { wrapAndRender } from '../../shared/jest/render';

import { DaySelector } from '../DaySelector/DaySelector.component';

describe('DaySelector', () => {
  it('should render all seven days', () => {
    wrapAndRender(<DaySelector />);
    expect(screen.queryAllByText('M').length).toEqual(1);
    expect(screen.queryAllByText('T').length).toEqual(2);
    expect(screen.queryAllByText('W').length).toEqual(1);
    expect(screen.queryAllByText('F').length).toEqual(1);
    expect(screen.queryAllByText('S').length).toEqual(2);
  });
});
