import styled from '@emotion/native';
import { Theme } from '@emotion/react';

import { TagProps } from './Tag.component';
import { PressableWithFeedback } from '../PressableWithFeedback/PressableWithFeedback';

export const Container = styled(PressableWithFeedback)<{
  color: string;
  backgroundColor: string;
}>(({ color, theme, backgroundColor }) => ({
  borderWidth: theme.spaces.halfXxs,
  borderRadius: theme.spaces.xxl,
  padding: theme.spaces.s,
  borderColor: color,
  backgroundColor: backgroundColor,
  alignItems: 'center',
  flexDirection: 'row',
  alignSelf: 'flex-start',
}));

export const getVariantColor = (variant: TagProps['variant'], theme: Theme) => {
  switch (variant) {
    case 'default':
      return theme.colors.primary[500];
    case 'valid':
      return theme.colors.status.success;
    case 'error':
      return theme.colors.status.error;
    case 'disabled':
      return theme.colors.grey[200];
    default:
      return theme.colors.primary[500];
  }
};
