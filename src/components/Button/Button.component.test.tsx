import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { Button } from './Button.component';
import { CrossIcon } from '../../icons/Cross.icon';

describe('Button Component', () => {
  it('should render the label', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Button.Primary label="Button primary" onPress={mockOnPress} />,
    );

    expect(screen.getByText('Button primary')).toBeTruthy();
  });

  it('should render the icon', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Button.Primary
        label="Button primary"
        onPress={mockOnPress}
        StartIcon={CrossIcon}
      />,
    );

    expect(screen.getByTestId('cross-icon')).toBeTruthy();
  });

  it('should call the onPress', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(<Button.Primary label="test" onPress={mockOnPress} />);

    fireEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should not call onPress when button is pressed and disabled is true`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <Button.Primary label="test" onPress={mockOnPress} isDisabled={true} />,
    );

    fireEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
