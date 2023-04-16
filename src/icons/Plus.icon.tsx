import { useTheme } from '@emotion/react';
import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from './Icon.constants';

import { IconType } from './Icon.types';

const PlusIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
        fill={color || theme.colors.grey[50]}
      />
    </Svg>
  );
};

export const PlusIcon = memo(PlusIconSvg);

PlusIcon.displayName = 'Plus';
