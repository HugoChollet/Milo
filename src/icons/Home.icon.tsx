import { useTheme } from '@emotion/react';
import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from './Icon.constants';

import { IconType } from './Icon.types';

const HomeIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"
        fill={color || theme.colors.grey[50]}
      />
    </Svg>
  );
};

export const HomeIcon = memo(HomeIconSvg);

HomeIcon.displayName = 'Home';
