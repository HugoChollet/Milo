import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '@emotion/react';

import { Spacer } from '../Spacer/Spacer.component';
import { Container, Label, RadioButtonIcon } from './RadioButton.style';

type RadioButtonProps = {
  isChecked: boolean;
  onPress: () => void;
  isDisabled?: boolean;
  label: string | React.ReactNode;
  accessibilityLabel?: string;
};

export const RadioButton = ({
  label,
  accessibilityLabel,
  isChecked,
  onPress,
  isDisabled = false,
}: RadioButtonProps) => {
  const theme = useTheme();
  const defaultAccessibilityLabel =
    typeof label === 'string' ? label : undefined;

  return (
    <Container>
      <Pressable
        disabled={isDisabled}
        onPress={onPress}
        accessibilityState={{ checked: isChecked }}
        accessibilityRole="radio"
        accessibilityLabel={accessibilityLabel ?? defaultAccessibilityLabel}
      >
        <RadioButtonIcon isDisabled={isDisabled} isChecked={isChecked} />
      </Pressable>
      <Spacer.Horizontal size={theme.spaces.s} />
      <View
        // Deactivate accessibility as it is redundant with Pressable accessibilityLabel
        accessibilityElementsHidden // iOS-supported
        importantForAccessibility={'no-hide-descendants'} // Android-supported
      >
        {typeof label === 'string' ? (
          <Label isDisabled={isDisabled}>{label}</Label>
        ) : (
          label
        )}
      </View>
    </Container>
  );
};
