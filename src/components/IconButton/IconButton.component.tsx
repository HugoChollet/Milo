import React from 'react';
import { useTheme } from '@emotion/react';

import { IconType } from '../../icons/Icon.types';

import { Container } from './IconButton.styles';

type IconButtonProps = {
  Icon: IconType;
  isDisabled?: boolean;
  onPress: () => void;
  size?: number;
  color?: string;
  border?: boolean;
  testID?: string;
};

export const IconButton = ({
  Icon,
  isDisabled,
  onPress,
  size,
  color = 'black',
  border,
  testID,
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <Container
      onPress={onPress}
      disabled={isDisabled}
      color={isDisabled ? theme.colors.grey[200] : color}
      border={border}
      testID={testID}>
      <Icon color={isDisabled ? theme.colors.grey[200] : color} size={size} />
    </Container>
  );
};
