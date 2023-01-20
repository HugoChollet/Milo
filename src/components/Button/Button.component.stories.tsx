import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Alert } from 'react-native';
import styled from '@emotion/native';

import { StoryPage } from '@boson/storybook/StoryPage/StoryPage.component';
import { StorySection } from '@boson/storybook/StorySection/StorySection.component';
import { CrossIcon } from '@boson/icons/Cross.icon';

import { Button } from './Button.component';
import { Spacer } from '../Spacer/Spacer.component';

const SPACE_BETWEEN_BUTTONS = 10;

const pressToPrint = () => {
  Alert.alert('Button pressed');
};

storiesOf('Button', module).add('Button', () => (
  <StoryPage>
    <StorySection title="Button" />
    <Button.Primary label="Button primary" onPress={pressToPrint} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <Button.Secondary label="Button secondary" onPress={pressToPrint} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <Button.Tertiary label="Button tertiary" onPress={pressToPrint} />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />

    <Button.Primary
      label="Button disabled primary"
      onPress={pressToPrint}
      isDisabled
    />
    <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
    <Container>
      <Button.Secondary
        label="Button disabled secondary"
        onPress={pressToPrint}
        isDisabled
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
      <Button.Tertiary
        label="Button disabled tertiary"
        onPress={pressToPrint}
        isDisabled
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />

      <Button.Primary
        onPress={pressToPrint}
        label="Button icon Primary"
        StartIcon={CrossIcon}
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
      <Button.Secondary
        onPress={pressToPrint}
        label="Button icon Secondary"
        StartIcon={CrossIcon}
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
      <Button.Tertiary
        onPress={pressToPrint}
        label="Button icon Tertiary"
        EndIcon={CrossIcon}
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />

      <Button.Primary
        label="Button loading"
        onPress={pressToPrint}
        isLoading={true}
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
      <Button.Secondary
        onPress={pressToPrint}
        label="Button Loading Tertiary"
        isLoading={true}
      />
      <Spacer.Vertical size={SPACE_BETWEEN_BUTTONS} />
      <Button.Tertiary
        onPress={pressToPrint}
        label="Button Loading Tertiary"
        isLoading={true}
      />
    </Container>
  </StoryPage>
));

const Container = styled.View({ padding: 50 });
