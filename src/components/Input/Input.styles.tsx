import React from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { View } from 'react-native';

import { Spacer } from '../Spacer/Spacer.component';
import { Typography } from '../Typography/Typography.component';

export const Container = styled.View({
  width: '100%',
});

export const InputBox = styled.TextInput({ flex: 1 });

type LabelProps = { label?: string; labelColor: string };

export const Label = ({ label, labelColor }: LabelProps) => {
  const theme = useTheme();

  if (!label) return null;
  return (
    <View>
      <Spacer.Vertical size={theme.spaces.s} />
      <Typography.P1 color={labelColor}>{label}</Typography.P1>
      <Spacer.Vertical size={theme.spaces.s} />
    </View>
  );
};
