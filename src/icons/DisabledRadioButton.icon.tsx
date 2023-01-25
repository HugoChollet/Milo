import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from './Icon.constants';

import { IconType } from './Icon.types';

const DisabledRadioButtonIconSvg: IconType = ({
  size = DEFAULT_ICON_SIZE_PX,
}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      testID="DisabledRadioButton-icon">
      <Path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="#F2F2F2"
        stroke="#F2F2F2"
        stroke-width="2"
      />
    </Svg>
  );
};

export const DisabledRadioButtonIcon = memo(DisabledRadioButtonIconSvg);

DisabledRadioButtonIcon.displayName = 'DisabledRadioButton';
