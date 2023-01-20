import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react-native';

import { paragraphFontTypes, titleFontSizes } from '@boson/theme/fonts';
import { StoryPage } from '@boson/storybook/StoryPage/StoryPage.component';
import { StorySection } from '@boson/storybook/StorySection/StorySection.component';

import { Typography } from './Typography.component';

storiesOf('Typography', module)
  .add('Title', () => (
    <StoryPage>
      <StorySection title="Title" />
      {titleFontSizes.map((size) => {
        return (
          <Typography.Title size={size} key={size}>
            Title {size} : The future is in our hands to shape.
          </Typography.Title>
        );
      })}
    </StoryPage>
  ))
  .add('Paragraph', () => (
    <StoryPage>
      {paragraphFontTypes.map((type) => {
        return (
          <Fragment key={type}>
            <StorySection title={`Paragraph ${type}`} />
            <Typography.P1 type={type}>
              P1 {type} : The future is in our hands to shape.
            </Typography.P1>
            <Typography.P2 type={type}>
              P2 {type} : The future is in our hands to shape.
            </Typography.P2>
            <Typography.P3 type={type}>
              P3 {type} : The future is in our hands to shape.
            </Typography.P3>
          </Fragment>
        );
      })}
    </StoryPage>
  ));
