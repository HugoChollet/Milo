import styled from '@emotion/native';
import { Theme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { TooltipProps } from './Tooltip.component';
import { InfoIcon } from '../../icons/Info.icon';
import { SuccessIcon } from '../../icons/Success.icon';
import { WarningIcon } from '../../icons/Warning.icon';
import { ErrorIcon } from '../../icons/Error.icon';

type ContainerProps = {
  color: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Container = ({ color, children, style }: ContainerProps) => {
  return (
    <TooltipBox color={color} style={style}>
      <ContentContainer>{children}</ContentContainer>
    </TooltipBox>
  );
};

export const TooltipBox = styled.View<{
  color: string;
}>(({ color, theme }) => ({
  flex: 1,
  padding: theme.spaces.m,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: color,
}));

export const ContentContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
}));

export const BodyContainer = styled.View(({ theme }) => ({
  paddingLeft: theme.spaces.s,
  flex: 1,
  flexDirection: 'column',
}));

export const TooltipIcon = ({
  type,
  size,
  color,
}: {
  type: TooltipProps['type'];
  size: number;
  color: string;
}) => {
  switch (type) {
    case 'warning':
      return <WarningIcon size={size} color={color} />;
    case 'success':
      return <SuccessIcon size={size} color={color} />;
    case 'error':
      return <ErrorIcon size={size} color={color} />;
    case 'info':
      return <InfoIcon size={size} color={color} />;
    default:
      return <InfoIcon size={size} color={color} />;
  }
};

export const getColor = (type: TooltipProps['type'], theme: Theme) => {
  switch (type) {
    case 'warning':
      return theme.colors.status.warningLight;
    case 'success':
      return theme.colors.status.successLight;
    case 'error':
      return theme.colors.status.errorLight;
    case 'info':
      return theme.colors.grey[50];
    default:
      return theme.colors.grey[50];
  }
};
