import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Container as IconContainer } from '../IconButton/IconButton.styles';
import { PlayIcon } from '../../icons/Play.icon';
import { StopIcon } from '../../icons/Stop.icon';
import { View } from 'react-native';

type PlayButtonProps = {
  onPress: (isPlaying: boolean) => void;
  size?: number;
  color?: string;
  testID?: string;
};

export const PlayButton = ({
  onPress,
  size = 128,
  color,
  testID,
}: PlayButtonProps) => {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    if (isPlaying) {
      onPress(isPlaying);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={{ padding: 48, justifyContent: 'flex-end' }}>
      <IconContainer
        onPress={handlePress}
        color={theme.colors.primary[100]}
        testID={testID}
        border={true}>
        {isPlaying ? (
          <StopIcon size={size} color={color || theme.colors.primary[400]} />
        ) : (
          <PlayIcon size={size} color={color || theme.colors.primary[400]} />
        )}
      </IconContainer>
    </View>
  );
};
