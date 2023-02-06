import React from 'react';
import { Text, View } from 'react-native';
import styled from '@emotion/native';

import { Button } from '../components/Button/Button.component';
import { Spacer } from '../components/Spacer/Spacer.component';

const test = () => {
  console.log('ok');
};

export const HomeScreen = () => {
  return (
    <Container>
      <Text>Welcome</Text>
      <View>
        <Button.Primary label={'Login'} onPress={test} />
        <Spacer.Vertical size={16} />
        <Button.Primary label={'Register'} onPress={test} />
      </View>
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
}));
