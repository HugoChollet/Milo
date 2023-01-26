import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@emotion/react';

import {
  Container,
  getPrimaryStyle,
  getSecondaryStyle,
  getTertiaryStyle,
  ButtonStyle,
} from './Button.styles';
import { IconType } from '../../icons/Icon.types';
import { Typography } from '../Typography/Typography.component';
import { Spacer } from '../Spacer/Spacer.component';

const BUTTON_ICON_SIZE_PX = 24;

type ButtonProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
  label: string;
  StartIcon?: IconType;
  EndIcon?: IconType;
  style: ButtonStyle;
};

export const BaseButton = ({
  isDisabled,
  isLoading,
  onPress,
  label,
  StartIcon,
  EndIcon,
  style,
}: ButtonProps) => {
  const theme = useTheme();

  if (isLoading) {
    return (
      <Container onPress={onPress} disabled={true} style={style}>
        <ActivityIndicator color={style.textColor} />
      </Container>
    );
  }

  return (
    <Container
      onPress={onPress}
      disabled={isDisabled}
      style={style}
      accessibilityLabel={label}>
      {StartIcon ? (
        <>
          <StartIcon color={style.textColor} size={BUTTON_ICON_SIZE_PX} />
          <Spacer.Horizontal size={theme.spaces.s} />
        </>
      ) : null}
      <Typography.P1
        color={style.textColor}
        type={'bold'}
        underlined={style.underline}>
        {label}
      </Typography.P1>
      {EndIcon ? (
        <>
          <Spacer.Horizontal size={theme.spaces.s} />
          <EndIcon color={style.textColor} size={BUTTON_ICON_SIZE_PX} />
        </>
      ) : null}
    </Container>
  );
};

export const Button = {
  Primary: (props: Omit<ButtonProps, 'style'>) => {
    const theme = useTheme();
    return (
      <BaseButton style={getPrimaryStyle(theme, props.isDisabled)} {...props} />
    );
  },
  Secondary: (props: Omit<ButtonProps, 'style'>) => {
    const theme = useTheme();
    return (
      <BaseButton
        style={getSecondaryStyle(theme, props.isDisabled)}
        {...props}
      />
    );
  },
  Tertiary: (props: Omit<ButtonProps, 'style'>) => {
    const theme = useTheme();
    return (
      <BaseButton
        style={getTertiaryStyle(theme, props.isDisabled)}
        {...props}
      />
    );
  },
};
