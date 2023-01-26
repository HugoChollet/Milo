import * as React from 'react';
import { screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { Tooltip } from './Tooltip.component';

describe('Tooltip Component', () => {
  it('should render the title and body', () => {
    wrapAndRender(<Tooltip type="info" title="titre" body="Corps de text" />);

    expect(screen.getByText('titre')).toBeTruthy();
    expect(screen.getByText('Corps de text')).toBeTruthy();
  });
});
