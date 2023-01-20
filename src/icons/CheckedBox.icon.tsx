import React, { memo } from 'react';
import { useTheme } from '@emotion/react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from '@boson/icons/Icon.constants';

import { IconType } from './Icon.types';

const CheckedBoxIconSvg: IconType = ({
  size = DEFAULT_ICON_SIZE_PX,
  color,
}) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" testID="CheckBox-icon">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2Z"
        fill={color || theme.colors.black}
      />
      <Path
        d="M10.7105 16.29C10.3205 16.68 9.69045 16.68 9.30045 16.29L5.71045 12.7C5.5232 12.5132 5.41797 12.2595 5.41797 11.995C5.41797 11.7305 5.5232 11.4768 5.71045 11.29C6.10045 10.9 6.73045 10.9 7.12045 11.29L10.0005 14.17L16.8805 7.29C17.2705 6.9 17.9005 6.9 18.2905 7.29C18.6805 7.68 18.6805 8.31 18.2905 8.7L10.7105 16.29Z"
        fill="white"
      />
    </Svg>
  );
};

export const CheckedBoxIcon = memo(CheckedBoxIconSvg);

CheckedBoxIcon.displayName = 'CheckedBox';
