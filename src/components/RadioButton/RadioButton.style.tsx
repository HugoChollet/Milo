import React, { ReactNode } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Typography } from '../Typography/Typography.component';
import { CheckedRadioButtonIcon } from '../../icons/CheckedRadioButton.icon';
import { UncheckedRadioButtonIcon } from '../../icons/UncheckedRadioButton.icon';
import { DisabledRadioButtonIcon } from '../../icons/DisabledRadioButton.icon';

export const Container = styled.View({
  flexDirection: 'row',
  alignSelf: 'flex-start',
});

type LabelProps = { isDisabled: boolean; children: ReactNode };

export const Label = ({ isDisabled, children }: LabelProps) => {
  const theme = useTheme();

  return (
    <Typography.P1
      color={isDisabled ? theme.colors.grey[300] : theme.colors.typography.text}
    >
      {children}
    </Typography.P1>
  );
};

type RadioButtonIconProps = { isDisabled: boolean; isChecked: boolean };

export const RadioButtonIcon = ({
  isDisabled,
  isChecked,
}: RadioButtonIconProps) => {
  const theme = useTheme();

  if (isDisabled) {
    return <DisabledRadioButtonIcon />;
  }

  return isChecked ? (
    <CheckedRadioButtonIcon color={theme.colors.typography.text} />
  ) : (
    <UncheckedRadioButtonIcon />
  );
};
