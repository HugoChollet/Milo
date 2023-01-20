import styled from '@emotion/native';

import { PressableWithFeedback } from '../PressableWithFeedback/PressableWithFeedback';

export const Container = styled(PressableWithFeedback)<{
  color: string;
  border?: boolean;
}>(({ color, border, theme }) => ({
  paddingVertical: theme.spaces.s,
  paddingHorizontal: theme.spaces.m,
  backgroundColor: theme.colors.white,
  flexDirection: 'row',
  justifyContent: 'center',
  borderWidth: border ? theme.spaces.halfXxs : 0,
  borderRadius: border ? theme.spaces.xxl : 0,
  borderColor: color,
}));
