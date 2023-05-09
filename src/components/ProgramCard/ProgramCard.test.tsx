import * as React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { wrapAndRender } from '../../shared/jest/render';

import { ProgramCard } from './ProgramCard.component';

const mockOnPlay = jest.fn();
const mockOnView = jest.fn();
const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();
const mockedCompleton = {
  currentStep: 0,
  totalStep: 0,
  currentPerf: 10,
  perfGoal: 100,
};

describe('ProgramCard Component', () => {
  it('should render the name', () => {
    wrapAndRender(
      <ProgramCard
        name="mockName"
        unit="unit"
        onPlay={mockOnPlay}
        onView={mockOnView}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        completion={mockedCompleton}
      />,
    );

    expect(screen.queryByText('mockName')).toBeTruthy();
  });

  it('should render the subtitle like (currentPerf unit on perfGoal unit)', async () => {
    wrapAndRender(
      <ProgramCard
        name="mockProgram"
        unit="unit"
        onPlay={mockOnPlay}
        onView={mockOnView}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        completion={mockedCompleton}
      />,
    );

    expect(
      screen.queryAllByText(
        mockedCompleton.currentPerf.toString() +
          ' unit on ' +
          mockedCompleton.perfGoal.toString() +
          ' unit',
      ).length,
    ).toEqual(1);
  });

  it('should call the corresponding function', () => {
    wrapAndRender(
      <ProgramCard
        name="mockProgram"
        unit="unit"
        onPlay={mockOnPlay}
        onView={mockOnView}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
        completion={mockedCompleton}
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
