import React, { useEffect, useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { ProgramData } from '../Program/ProgramDataType';
import { View, Text } from 'react-native';
import { useTheme } from '@emotion/react';
import { PlayButton } from '../components/PlayButton/PlayButton.component';

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
  const theme = useTheme();
  return (
    <View>
      <Text>Objective for today : {program.completion.currentStep}</Text>
      <PlayButton
        onPress={() => console.log(program.completion)}
        size={theme.spaces.doubleXl * 2}
      />
    </View>
  );
};
