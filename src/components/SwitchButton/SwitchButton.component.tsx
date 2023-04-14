import React from 'react';
import { View } from 'react-native';
import { Button } from '../Button/Button.component';

type SwitchButtonProps = {
  label: string;
  defaultValue: boolean;
  onPress: () => void;
};

export const SwitchButton = ({
  label,
  defaultValue,
  onPress,
}: SwitchButtonProps) => {
  return (
    <View>
      {defaultValue ? (
        <Button.Primary label={label} onPress={onPress} testId={'primary'} />
      ) : (
        <Button.Tertiary
          label={label}
          onPress={onPress}
          style={{ underline: false, borderColor: 'transparent' }}
          testId={'tertiary'}
        />
      )}
    </View>
  );
};
