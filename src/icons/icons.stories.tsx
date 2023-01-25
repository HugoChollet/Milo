import styled from '@emotion/native';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { theme } from '@boson/theme/theme';
import { LeftArrowIcon } from './LeftArrow.icon';
import { EyeIcon } from './Eye.icon';
import { CheckedBoxIcon } from './CheckedBox.icon';
import { CheckedRadioButtonIcon } from './CheckedRadioButton.icon';
import { CrossIcon } from './Cross.icon';
import { DisabledRadioButtonIcon } from './DisabledRadioButton.icon';
import { IconType } from './Icon.types';
import { ErrorIcon } from './Error.icon';
import { InfoIcon } from './Info.icon';
import { SuccessIcon } from './Success.icon';
import { UncheckedBoxIcon } from './UnCheckedBox.icon';
import { UncheckedRadioButtonIcon } from './UncheckedRadioButton.icon';
import { WarningIcon } from './Warning.icon';
import { EyeClosedIcon } from './EyeClosed.icon';

import { Typography } from '../components/Typography/Typography.component';
import { Spacer } from '../components/Spacer/Spacer.component';
import { StorySection } from '../storybook/StorySection/StorySection.component';
import { StoryPage } from '../storybook/StoryPage/StoryPage.component';

const icons: IconType[] = [
  CheckedBoxIcon,
  CheckedRadioButtonIcon,
  CrossIcon,
  DisabledRadioButtonIcon,
  ErrorIcon,
  EyeIcon,
  EyeClosedIcon,
  InfoIcon,
  SuccessIcon,
  UncheckedBoxIcon,
  UncheckedRadioButtonIcon,
  WarningIcon,
  LeftArrowIcon,
];

const SingleIconContainer = styled.View({
  width: '25%',
  marginBottom: 25,
  alignItems: 'center',
});

const IconsContainer = styled.View({
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const createIcon = (icon: IconType, index: number) =>
  React.createElement(icon, {
    key: index,
    size: 30,
    color: theme.colors.black,
  });

storiesOf('Icons', module).add('All icons', () => (
  <StoryPage>
    <StorySection title="All icons" />
    <IconsContainer>
      {icons.map((icon, index) => {
        return (
          <SingleIconContainer key={icon.displayName}>
            {createIcon(icon, index)}
            <Spacer.Vertical size={5} />
            <View>
              <Typography.P3>{icon.displayName || ''}</Typography.P3>
            </View>
          </SingleIconContainer>
        );
      })}
    </IconsContainer>
  </StoryPage>
));
