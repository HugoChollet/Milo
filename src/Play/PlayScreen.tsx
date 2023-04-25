import React, { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { Button } from '../components/Button/Button.component';
import { ProgramData } from '../Program/ProgramDataType';
import { View, Text } from 'react-native';

type PlayScreenProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Play'>;
  route: {
    params: {
      program: ProgramData;
    };
  };
};

export const PlayScreen = ({ route, navigation }: PlayScreenProps) => {
  const [program, setProgram] = useState<ProgramData>(route.params.program);
  return (
    <View>
      <Text>Objective for today : {program.objective}</Text>
      <Button.Primary label="PLAY" onPress={() => console.log('play')} />
    </View>
  );
};
