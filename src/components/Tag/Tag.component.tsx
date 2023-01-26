import React from 'react';
import { useTheme } from '@emotion/react';

import { IconType } from '../../icons/Icon.types';

import { Container, getVariantColor } from './Tag.styles';
import { Typography } from '../Typography/Typography.component';

type TagVariant = 'default' | 'valid' | 'error' | 'disabled';
const ICON_SIZE_PX = 24;

export type TagProps = {
  label?: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
  onPress?: () => void;
  variant: TagVariant;
};

export const Tag = ({
  label = '',
  StartIcon,
  EndIcon,
  onPress,
  variant,
}: TagProps) => {
  const theme = useTheme();
  const color = getVariantColor(variant, theme);

  return (
    <Container
      onPress={onPress}
      disabled={!onPress || variant === 'disabled'}
      color={color}
      backgroundColor={
        variant === 'disabled' ? theme.colors.grey[50] : theme.colors.white
      }>
      {StartIcon ? <StartIcon color={color} size={ICON_SIZE_PX} /> : null}
      <Typography.P3 color={color} type={'bold'}>
        {label}
      </Typography.P3>
      {EndIcon ? <EndIcon color={color} size={ICON_SIZE_PX} /> : null}
    </Container>
  );
};
