import styled from '@emotion/native';
import { Theme } from '@emotion/react';

import { PressableWithFeedback } from '../PressableWithFeedback/PressableWithFeedback';

export type ButtonStyle = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  underline: boolean;
};

export const Container = styled(PressableWithFeedback)<{
  style: ButtonStyle;
}>(({ style, theme }) => ({
  borderWidth: theme.spaces.halfXxs,
  borderRadius: theme.spaces.xxl,
  paddingVertical: theme.spaces.s,
  paddingHorizontal: theme.spaces.m,
  borderColor: style.borderColor,
  backgroundColor: style.backgroundColor,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
}));

export const getPrimaryStyle = (
  theme: Theme,
  isDisabled?: boolean,
): ButtonStyle => {
  return {
    backgroundColor: isDisabled
      ? theme.colors.grey[50]
      : theme.colors.primary[500],
    borderColor: 'transparent',
    textColor: isDisabled ? theme.colors.grey[300] : theme.colors.white,
    underline: false,
  };
};

export const getSecondaryStyle = (
  theme: Theme,
  isDisabled?: boolean,
): ButtonStyle => {
  return {
    backgroundColor: isDisabled ? theme.colors.grey[50] : 'transparent',
    borderColor: isDisabled
      ? theme.colors.grey[300]
      : theme.colors.primary[500],
    textColor: isDisabled ? theme.colors.grey[300] : theme.colors.primary[500],
    underline: false,
  };
};

export const getTertiaryStyle = (
  theme: Theme,
  isDisabled?: boolean,
): ButtonStyle => {
  return {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    textColor: isDisabled ? theme.colors.grey[300] : theme.colors.primary[500],
    underline: true,
  };
};
