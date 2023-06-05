import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { ProgramData } from '../Program/ProgramDataType';
import { View, Text } from 'react-native';
import { useTheme } from '@emotion/react';
import { PlayButton } from '../components/PlayButton/PlayButton.component';
import { getRemainingDays } from '../Program/getRemainingSteps';

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

  try {
    const remainingSteps = getRemainingDays(program.endDate, program.days);
    return (
      <View>
        <Text>
          You have {remainingSteps} sessions to achieve your goal of{' '}
          {program.completion.perfGoal} {program.unit}
        </Text>
        <Text>
          You are currently able to do {program.completion.currentPerf}{' '}
          {program.unit} will you be able do to better this time ?
        </Text>
        <Text>
          Objective for today : {program.completion.currentStep} {program.unit}
        </Text>
        <PlayButton
          onPress={() => {
            setProgram({
              ...program,
              completion: {
                ...program.completion,
                currentPerf: program.completion.currentPerf + 1,
              },
            });
          }}
          size={theme.spaces.doubleXl * 2}
        />
      </View>
    );
  } catch {
    return (
      <View>
        <Text>
          You have no remaining time to achieve your goal of{' '}
          {program.completion.perfGoal} {program.unit}
        </Text>
        {program.completion.perfGoal > program.completion.currentPerf ? (
          <Text>
            But hey ! You got close by achieving{' '}
            {program.completion.currentPerf} {program.unit}
          </Text>
        ) : (
          <Text>
            You over-acheive your goal with
            {program.completion.currentPerf} {program.unit}
          </Text>
        )}
      </View>
    );
  }
};
