import * as React from 'react';
import { screen, fireEvent } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { CrossIcon } from '../../icons/Cross.icon';
import { IconButton } from './IconButton.component';

describe('Icon Button Component', () => {
  it('should render the icon', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(<IconButton onPress={mockOnPress} Icon={CrossIcon} />);

    expect(screen.getByTestId('cross-icon')).toBeTruthy();
  });

  it('should call the onPress', () => {
    const mockOnPress = jest.fn();

    wrapAndRender(<IconButton onPress={mockOnPress} Icon={CrossIcon} />);

    fireEvent.press(screen.getByTestId('cross-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`should have disable the call of the onPress 
  when both props onPress and variant disabled are sent`, () => {
    const mockOnPress = jest.fn();

    wrapAndRender(
      <IconButton onPress={mockOnPress} Icon={CrossIcon} isDisabled />,
    );

    fireEvent.press(screen.getByTestId('cross-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});
