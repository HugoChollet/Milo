import { useTheme } from '@emotion/react';
import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from './Icon.constants';

import { IconType } from './Icon.types';

const GraphIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M 4.801 2.201 L 6.002 3.402 2.914 6.588 L -0.174 9.775 0.994 10.497 L 2.163 11.218 5 8.500 L 7.837 5.782 8.919 6.450 L 10 7.118 10 4.059 L 10 1 6.800 1 L 3.600 1 4.801 2.201 M 17 14 L 17 24 20.500 24 L 24 24 24 14 L 24 4 20.500 4 L 17 4 17 14 M 9 17 L 9 24 12.500 24 L 16 24 16 17 L 16 10 12.500 10 L 9 10 9 17 M 1 20 L 1 24 4.500 24 L 8 24 8 20 L 8 16 4.500 16 L 1 16 1 20"
        fill={color || theme.colors.grey[50]}
      />
    </Svg>
  );
};

export const GraphIcon = memo(GraphIconSvg);

GraphIcon.displayName = 'Graph';
