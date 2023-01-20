import React, { memo } from 'react';
import { Svg, Circle } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from '@boson/icons/Icon.constants';

import { IconType } from './Icon.types';

const CheckedRadioButtonIconSvg: IconType = ({
  size = DEFAULT_ICON_SIZE_PX,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      testID="CheckedRadioButton-icon"
    >
      <Circle cx="12" cy="12" r="8" stroke="#000" strokeWidth="8" />
    </Svg>
  );
};

export const CheckedRadioButtonIcon = memo(CheckedRadioButtonIconSvg);

CheckedRadioButtonIcon.displayName = 'CheckedRadioButton';
