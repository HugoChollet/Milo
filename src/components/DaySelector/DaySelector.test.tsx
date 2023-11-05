import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { wrapAndRender } from '../../shared/jest/render';

import { DaySelector } from '../DaySelector/DaySelector.component';

const DAYS_MOCKED = [false, false, false, false, false, false, false];

describe('DaySelector', () => {
  it('should render all seven days', () => {
    wrapAndRender(<DaySelector value={DAYS_MOCKED} setValue={jest.fn()} />);
    expect(screen.queryAllByText('M').length).toEqual(1);
    expect(screen.queryAllByText('T').length).toEqual(2);
    expect(screen.queryAllByText('W').length).toEqual(1);
    expect(screen.queryAllByText('F').length).toEqual(1);
    expect(screen.queryAllByText('S').length).toEqual(2);
  });

  it('should call setValue function', () => {
    const mockedSetValue = jest.fn();
    wrapAndRender(
      <DaySelector value={DAYS_MOCKED} setValue={mockedSetValue} />,
    );

    fireEvent.press(screen.getByText('M'));
    expect(mockedSetValue).toHaveBeenCalledTimes(1);
  });
});
