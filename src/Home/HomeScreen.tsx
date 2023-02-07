import React from 'react';
import { Text, View } from 'react-native';
import styled from '@emotion/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button } from '../components/Button/Button.component';
import { Spacer } from '../components/Spacer/Spacer.component';

import { RootStackParamList } from '../types/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <Container>
      <Text>Welcome</Text>
      <View>
        <Button.Primary
          label={'Login'}
          onPress={() => navigation.navigate('Login')}
        />
        <Spacer.Vertical size={16} />
        <Button.Primary
          label={'Register'}
          onPress={() => navigation.navigate('Register')}
        />
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
