import { useTheme } from '@emotion/react';
import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from './Icon.constants';

import { IconType } from './Icon.types';

const PlayIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M 1.5 0 L 1.5 24 L 22.5 12 Z M 1.5 0"
        fill={color || theme.colors.grey[50]}
      />
    </Svg>
  );
};

export const PlayIcon = memo(PlayIconSvg);

PlayIcon.displayName = 'Play';
