import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { wrapAndRender } from '../../shared/jest/render';

import { TextArea } from './TextArea.component';

describe('Testing TextArea Component', () => {
  it('should render the label and placeholder', () => {
    wrapAndRender(
      <TextArea label="mock label" placeholder="mock placeholder" />,
    );

    expect(screen.getByText('mock label')).toBeTruthy();
    expect(screen.getByPlaceholderText('mock placeholder')).toBeTruthy();
  });

  it('should not render the error label and error icon', () => {
    wrapAndRender(
      <TextArea
        label="mock label"
        placeholder="mock placeholder"
        errorLabel="mock error label"
        isError={false}
      />,
    );

    expect(screen.queryByText('mock error label')).toBeFalsy();
    expect(screen.queryByTestId('error-icon')).toBeFalsy();
  });

  it('should render the error label and error icon', () => {
    wrapAndRender(
      <TextArea
        label="mock label"
        placeholder="mock placeholder"
        errorLabel="mock error label"
        isError
      />,
    );

    expect(screen.getByText('mock error label')).toBeTruthy();
    expect(screen.getByTestId('error-icon')).toBeTruthy();
  });

  it('should call onChangeText when text is typed in TextArea', () => {
    const mockOnChange = jest.fn();

    wrapAndRender(
      <TextArea
        label="mock label"
        placeholder="mock placeholder"
        onChangeText={mockOnChange}
      />,
    );

    fireEvent.changeText(screen.getByPlaceholderText('mock placeholder'), 'ab');

    expect(mockOnChange).toHaveBeenCalledWith('ab');
  });

  it('should be disabled when isDisabled is true', () => {
    wrapAndRender(
      <TextArea label="mock label" placeholder="mock placeholder" isDisabled />,
    );

    expect(screen.getByPlaceholderText('mock placeholder')).toBeDisabled();
  });
});
