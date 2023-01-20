import { useTheme } from '@emotion/react';
import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from '@boson/icons/Icon.constants';

import { IconType } from './Icon.types';

const LeftArrowIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX, color }) => {
  const theme = useTheme();
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      testID="left-arrow-icon"
    >
      <Path
        d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.22-1.095L9.41 13H17a1 1 0 0 0 0-2Z"
        fill={color || theme.colors.grey[50]}
      />
    </Svg>
  );
};

export const LeftArrowIcon = memo(LeftArrowIconSvg);
LeftArrowIcon.displayName = 'LeftArrow';
