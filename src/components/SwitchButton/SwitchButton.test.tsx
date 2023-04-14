import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { SwitchButton } from './SwitchButton.component';
import { wrapAndRender } from '../../shared/jest/render';

describe('SwitchButton', () => {
  it('renders a Primary Button when defaultValue is true', () => {
    const onPressMock = jest.fn();
    const { getByTestId, queryByTestId } = wrapAndRender(
      <SwitchButton
        label="Test Button"
        defaultValue={true}
        onPress={onPressMock}
      />,
    );
    expect(getByTestId('primary')).toBeTruthy();
    expect(queryByTestId('tertiary')).toBeFalsy();
  });

  it('renders a Tertiary Button when defaultValue is false', () => {
    const onPressMock = jest.fn();
    const { getByTestId, queryByTestId } = wrapAndRender(
      <SwitchButton
        label="Test Button"
        defaultValue={false}
        onPress={onPressMock}
      />,
    );
    expect(getByTestId('tertiary')).toBeTruthy();
    expect(queryByTestId('primary')).toBeFalsy();
  });

  it('calls the onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = wrapAndRender(
      <SwitchButton
        label="Test Button"
        defaultValue={false}
        onPress={onPressMock}
      />,
    );
    const tertiaryButton = getByTestId('tertiary');
    fireEvent.press(tertiaryButton);
    expect(onPressMock).toHaveBeenCalled();
  });
});
