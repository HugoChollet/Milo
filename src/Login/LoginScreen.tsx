import React from 'react';
import { Text, View } from 'react-native';
import styled from '@emotion/native';

import { Spacer } from '../components/Spacer/Spacer.component';
import { Input } from '../components/Input/Input.component';

export const LoginScreen = () => {
  return (
    <Container>
      <Text>Login</Text>
      <View>
        <Input label="Email" placeholder="name.surname@mail.com" />
        <Spacer.Vertical size={16} />
        <Input label="Password" placeholder="******" />
      </View>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
  padding: theme.spaces.m,
}));
