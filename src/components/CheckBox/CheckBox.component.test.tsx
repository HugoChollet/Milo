import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { CheckBox } from './CheckBox.component';

describe('CheckBox Component', () => {
  it('should render the label', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <CheckBox
        label={'test'}
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('test')).toBeTruthy();
  });

  it(`should render the Checked icon when isChecked is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <CheckBox
        label={'test'}
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('CheckBox-icon')).toBeTruthy();
  });

  it(`should render the Unchecked icon when isChecked is false`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <CheckBox
        label={'test'}
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('UnCheckBox-icon')).toBeTruthy();
  });

  it('should call of onPress', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <CheckBox
        label={'test'}
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(screen.getByTestId('CheckBox-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should not call onPress when isDisabled is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <CheckBox
        label={'test'}
        isChecked={true}
        isDisabled={true}
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(screen.getByTestId('CheckBox-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
