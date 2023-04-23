import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { ProgramCard } from './ProgramCard.component';

const mockOnPlay = jest.fn();
const mockOnView = jest.fn();
const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

describe('ProgramCard Component', () => {
  it('should render the name', () => {
    wrapAndRender(
      <ProgramCard
        name="mockNameBeer"
        onPlay={mockOnPlay}
        onView={mockOnView}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />,
    );

    expect(screen.getByText('mockNameBeer')).toBeTruthy();
  });

  it('should render the objective', () => {
    wrapAndRender(
      <ProgramCard
        name="mockProgram"
        objective="mockObjective"
        onPlay={mockOnPlay}
        onView={mockOnView}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />,
    );

    expect(screen.getByText('mockObjective')).toBeTruthy();
  });

  it('should call the corresponding function', () => {
    wrapAndRender(
      <ProgramCard
        name="mockProgram"
        objective="mockObjective"
        onPlay={mockOnPlay}
        onView={mockOnView}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />,
    );

    fireEvent(screen.getByTestId('Play'), 'click');
    expect(mockOnPlay).toBeCalledTimes(1);
    fireEvent(screen.getByTestId('View'), 'click');
    expect(mockOnView).toBeCalledTimes(1);
    fireEvent(screen.getByTestId('Edit'), 'click');
    expect(mockOnEdit).toBeCalledTimes(1);
    fireEvent(screen.getByTestId('Delete'), 'click');
    expect(mockOnDelete).toBeCalledTimes(1);
  });
});
