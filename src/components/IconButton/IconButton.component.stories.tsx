import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Alert } from 'react-native';
import styled from '@emotion/native';

import { StoryPage } from '@boson/storybook/StoryPage/StoryPage.component';
import { StorySection } from '@boson/storybook/StorySection/StorySection.component';
import { CrossIcon } from '@boson/icons/Cross.icon';
import { Spacer } from '@boson/components/Spacer/Spacer.component';
import { IconButton } from '@boson/components/IconButton/IconButton.component';

const SPACE_BETWEEN_BUTTONS = 10;

const pressToPrint = () => {
  Alert.alert('Button pressed');
};

storiesOf('IconButton', module).add('IconButton', () => (
  <StoryPage>
    <StorySection title="IconButton" />
    <IconButton onPress={pressToPrint} Icon={CrossIcon} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton onPress={pressToPrint} Icon={CrossIcon} color={'orange'} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton onPress={pressToPrint} Icon={CrossIcon} size={10} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />

    <IconButton onPress={pressToPrint} Icon={CrossIcon} isDisabled />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton
      onPress={pressToPrint}
      Icon={CrossIcon}
      isDisabled
      color={'orange'}
    />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton onPress={pressToPrint} Icon={CrossIcon} isDisabled size={48} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton onPress={pressToPrint} Icon={CrossIcon} border />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton
      onPress={pressToPrint}
      Icon={CrossIcon}
      color={'orange'}
      border
    />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <IconButton onPress={pressToPrint} Icon={CrossIcon} size={10} border />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <Container>
      <IconButton onPress={pressToPrint} Icon={CrossIcon} border />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
      <IconButton onPress={pressToPrint} Icon={CrossIcon} border isDisabled />
    </Container>
  </StoryPage>
));

const Container = styled.View({ width: 40 });
