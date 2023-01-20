import React from 'react';
import { Alert, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import styled from '@emotion/native';

import { CheckBox } from './CheckBox.component';
import { StoryPage } from '../../storybook/StoryPage/StoryPage.component';
import { StorySection } from '../../storybook/StorySection/StorySection.component';

const onPress = () => {
  Alert.alert('You checked the checkbox');
  return;
};

const Container = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

const LabelComponent = () => (
  <Container>
    <Text>{'With a label'}</Text>
    <Text>{'that is a ReactNode'}</Text>
  </Container>
);

storiesOf('CheckBox', module).add('CheckBox', () => (
  <StoryPage>
    <StorySection title="CheckBox" />
    <CheckBox
      isChecked={true}
      label={'Checked by default'}
      isDisabled={false}
      onPress={onPress}
    />
    <CheckBox
      isChecked={false}
      label={'Unchecked by default'}
      isDisabled={false}
      onPress={onPress}
    />
    <CheckBox
      isChecked={true}
      label={'Checked and disabled'}
      isDisabled={true}
      onPress={onPress}
    />
    <CheckBox
      isChecked={false}
      label={'Unchecked and disabled'}
      accessibilityLabel={'Unchecked and disabled checkbox'}
      isDisabled={true}
      onPress={onPress}
    />
    <CheckBox
      isChecked={false}
      label={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
      }
      isDisabled={true}
      onPress={onPress}
    />
    <CheckBox
      isChecked={false}
      label={<LabelComponent />}
      // accessibilityLabel won't be inferred automatically since label is not a string
      accessibilityLabel={'With a label that is a ReactNode'}
      onPress={onPress}
    />
  </StoryPage>
));
