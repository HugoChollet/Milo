import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Container } from '../IconButton/IconButton.styles';
import { PlayIcon } from '../../icons/Play.icon';
import { StopIcon } from '../../icons/Stop.icon';

type PlayButtonProps = {
  onPress: () => void;
  size?: number;
  color?: string;
  testID?: string;
};

export const PlayButton = ({
  onPress,
  size = 128,
  color = 'black',
  testID,
}: PlayButtonProps) => {
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    setIsPlaying(!isPlaying);
    onPress();
  };

  return (
    <Container
      onPress={handlePress}
      color={theme.colors.primary[100]}
      testID={testID}>
      {isPlaying ? (
        <PlayIcon size={size} color={color} />
      ) : (
        <StopIcon size={size} color={color} />
      )}
    </Container>
  );
};
