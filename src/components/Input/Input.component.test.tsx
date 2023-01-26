import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';
import '@testing-library/jest-native/extend-expect';

import { Input } from './Input.component';

describe('Input Component', () => {
  it('should render the label and placeholder', () => {
    wrapAndRender(<Input label="mock label" placeholder="mock placeholder" />);

    expect(screen.getByText('mock label')).toBeTruthy();
    expect(screen.getByPlaceholderText('mock placeholder')).toBeTruthy();
  });

  it(`should not render the error label and error icon
    when isError is false`, () => {
    wrapAndRender(
      <Input
        label="mock label"
        placeholder="mock placeholder"
        errorLabel="mock error label"
        isError={false}
      />,
    );

    expect(screen.queryByText('mock error label')).toBeFalsy();
    expect(screen.queryByTestId('error-icon')).toBeFalsy();
  });

  it(`should render the error label and error Icon
    when isError is true`, () => {
    wrapAndRender(
      <Input
        label="mock label"
        placeholder="mock placeholder"
        errorLabel="mock error label"
        isError={true}
      />,
    );

    expect(screen.getByText('mock error label')).toBeTruthy();
    expect(screen.getByTestId('error-icon')).toBeTruthy();
  });

  it(`should call onChangeText 
    when text is typed in input`, () => {
    const mockOnChange = jest.fn();

    wrapAndRender(
      <Input
        label="mock label"
        placeholder="mock placeholder"
        onChangeText={mockOnChange}
      />,
    );

    fireEvent.changeText(screen.getByPlaceholderText('mock placeholder'), 'ab');

    expect(mockOnChange).toHaveBeenCalledWith('ab');
  });

  it(`should be disabled when isDisabled is true`, () => {
    wrapAndRender(
      <Input
        label="mock label"
        placeholder="mock placeholder"
        isDisabled={true}
      />,
    );

    expect(screen.getByPlaceholderText('mock placeholder')).toBeDisabled();
  });
});
