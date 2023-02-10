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
      <ImageContainer
        source={require('../../assets/AiGenerated/samuelatruelle_cute_bull_welcoming_you_thick_drawing.png')}
      />
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

const ImageContainer = styled.Image(() => ({
  flex: 1,
}));
