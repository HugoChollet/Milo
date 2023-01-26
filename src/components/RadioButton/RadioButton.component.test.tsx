import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { RadioButton } from './RadioButton.component';

describe('RadioButton Component', () => {
  it(`should render the label
    when label is sent`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <RadioButton
        label="test"
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('test')).toBeTruthy();
  });

  it(`should render of the Checked icon when isChecked is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <RadioButton
        label="test"
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('CheckedRadioButton-icon')).toBeTruthy();
  });

  it(`should render the Unchecked icon when isChecked is false`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <RadioButton
        label="test"
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('UnCheckedRadioButton-icon')).toBeTruthy();
  });

  it(`should render the Disabled icon when isDisabled is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <RadioButton
        label="test"
        isChecked={false}
        isDisabled={true}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('DisabledRadioButton-icon')).toBeTruthy();
  });

  it(`should call onPress when radio button is pressed`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <RadioButton
        label="test"
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(screen.getByTestId('CheckedRadioButton-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should not call onPress when radio button is pressed and isDisabled is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <RadioButton
        label="test"
        isChecked={true}
        isDisabled={true}
        onPress={mockOnPress}
      />,
    );

    fireEvent.press(screen.getByTestId('DisabledRadioButton-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
