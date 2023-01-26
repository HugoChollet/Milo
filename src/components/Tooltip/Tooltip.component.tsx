import React from 'react';
import { useTheme } from '@emotion/react';
import { StyleProp, ViewStyle } from 'react-native';

import { Typography } from '../Typography/Typography.component';
import {
  BodyContainer,
  Container,
  getColor,
  TooltipIcon,
} from './Tooltip.styles';

const TOOLTIP_ICON_SIZE_PX = 24;

export type TooltipProps = {
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  body: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Tooltip = ({
  type,
  title,
  body,
  containerStyle,
}: TooltipProps) => {
  const theme = useTheme();
  const color = getColor(type, theme);

  return (
    <Container color={color} style={containerStyle}>
      <TooltipIcon
        type={type}
        size={TOOLTIP_ICON_SIZE_PX}
        color={theme.colors.black}
      />
      <BodyContainer>
        <Typography.P1 type={'bold'} color={theme.colors.black}>
          {title}
        </Typography.P1>
        <Typography.P2 type={'regular'}>{body}</Typography.P2>
      </BodyContainer>
    </Container>
  );
};
