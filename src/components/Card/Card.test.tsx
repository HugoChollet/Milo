import * as React from 'react';
import { screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { Card } from './Card';

const mockOnPress = jest.fn();

describe('Card Component', () => {
  it('should render the title', () => {
    wrapAndRender(<Card title="mockNameBeer" onPress={mockOnPress} />);

    expect(screen.getByText('mockNameBeer')).toBeTruthy();
  });

  it('should render the subtitle', () => {
    wrapAndRender(
      <Card
        title="mockNameBeer"
        subtitle="mockSloganBeer"
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('mockSloganBeer')).toBeTruthy();
  });
});
