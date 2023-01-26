import React from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { View } from 'react-native';

import { InputContainer } from './common.style';
import { Spacer } from '../Spacer/Spacer.component';
import { Typography } from '../Typography/Typography.component';

export const TextAreaContainer = styled(InputContainer)(({ theme }) => ({
  height: theme.spaces.xxl * 3,
}));

export const TextAreaBox = styled.TextInput({
  flex: 1,
  textAlignVertical: 'top',
});

export const HeaderContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const LabelsRow = ({
  leftLabel,
  rightLabel,
  isDisabled,
  isError,
}: {
  leftLabel?: string;
  rightLabel?: string;
  isDisabled: boolean;
  isError?: boolean;
}) => {
  const theme = useTheme();
  const leftLabelColor = isError
    ? theme.colors.status.error
    : isDisabled
    ? theme.colors.typography.placeholder
    : theme.colors.typography.text;

  if (!leftLabel && !rightLabel) return null;
  return (
    <View>
      <Spacer.Vertical size={theme.spaces.xs} />
      <HeaderContainer>
        <Typography.P1 type="regular" color={leftLabelColor}>
          {leftLabel}
        </Typography.P1>
        <Typography.P1
          type="regular"
          color={theme.colors.typography.placeholder}
        >
          {rightLabel}
        </Typography.P1>
      </HeaderContainer>
      <Spacer.Vertical size={theme.spaces.xs} />
    </View>
  );
};
