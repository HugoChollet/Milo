import React from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '@emotion/react';

import { CheckedBoxIcon } from '../../icons/CheckedBox.icon';
import { UncheckedBoxIcon } from '../../icons/UnCheckedBox.icon';
import { Container, Label } from './CheckBox.style';
import { Spacer } from '../Spacer/Spacer.component';

type CheckBoxProps = {
  isChecked: boolean;
  onPress: () => void;
  isDisabled?: boolean;
  label: string | React.ReactNode;
  accessibilityLabel?: string;
};

export const CheckBox = ({
  label,
  accessibilityLabel,
  isChecked,
  onPress,
  isDisabled = false,
}: CheckBoxProps) => {
  const theme = useTheme();
  const defaultAccessibilityLabel =
    typeof label === 'string' ? label : undefined;

  return (
    <Container>
      <Pressable
        disabled={isDisabled}
        onPress={onPress}
        accessibilityState={{ checked: isChecked }}
        accessibilityRole="checkbox"
        accessibilityLabel={accessibilityLabel ?? defaultAccessibilityLabel}
      >
        {isChecked ? (
          <CheckedBoxIcon
            color={
              isDisabled ? theme.colors.grey[200] : theme.colors.typography.text
            }
          />
        ) : (
          <UncheckedBoxIcon />
        )}
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
