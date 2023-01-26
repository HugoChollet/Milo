import React, { ReactNode } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Typography } from '../Typography/Typography.component';

export const Container = styled.View({
  flexDirection: 'row',
  alignSelf: 'flex-start',
});

type LabelProps = { isDisabled: boolean; children: ReactNode };

export const Label = ({ isDisabled, children }: LabelProps) => {
  const theme = useTheme();

  return (
    <Typography.P1
      color={
        isDisabled ? theme.colors.grey[300] : theme.colors.typography.text
      }>
      {children}
    </Typography.P1>
  );
};
