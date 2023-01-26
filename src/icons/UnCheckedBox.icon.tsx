import React, { memo } from 'react';
import { Svg, Path } from 'react-native-svg';

import { DEFAULT_ICON_SIZE_PX } from './Icon.constants';

import { IconType } from './Icon.types';

const UncheckedBoxIconSvg: IconType = ({ size = DEFAULT_ICON_SIZE_PX }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      testID="UnCheckBox-icon">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.22222 2H19.7778C21 2 22 3 22 4.22222V19.7778C22 21 21 22 19.7778 22H4.22222C3 22 2 21 2 19.7778V4.22222C2 3 3 2 4.22222 2ZM5.14286 20H18.8571C19.4857 20 20 19.4857 20 18.8571V5.14286C20 4.51429 19.4857 4 18.8571 4H5.14286C4.51429 4 4 4.51429 4 5.14286V18.8571C4 19.4857 4.51429 20 5.14286 20Z"
        fill="#CCCCCC"
      />
    </Svg>
  );
};

export const UncheckedBoxIcon = memo(UncheckedBoxIconSvg);

UncheckedBoxIcon.displayName = 'UncheckedBox';
