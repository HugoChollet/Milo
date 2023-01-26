import React from 'react';
import { PressableProps, Pressable, ViewProps } from 'react-native';

type PressableWithFeedbackProps = Omit<PressableProps, 'style'> &
  Pick<ViewProps, 'style'>;

export const PressableWithFeedback = ({
  children,
  style,
  disabled,
  ...props
}: PressableWithFeedbackProps) => (
  <Pressable
    style={({ pressed }) => [
      { opacity: pressed && !disabled ? 0.5 : 1 },
      style,
    ]}
    disabled={disabled}
    accessibilityRole="button"
    {...props}
  >
    {children}
  </Pressable>
);
