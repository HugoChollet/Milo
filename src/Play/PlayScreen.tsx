import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { ProgramData } from '../Program/ProgramDataType';
import { View, Text } from 'react-native';
import { ReadyToPlay } from './ReadyToPlay';

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

  const updatePerformance = () => {
    setProgram({
      ...program,
      lastPractice: new Date(),
      completion: {
        ...program.completion,
        performances: [...program.completion.performances, 10],
      },
    });
  };

  const isTodayExercisePossible = () => {
    return (
      !program.lastPractice ||
      program.lastPractice.getDate() !== new Date().getDate()
    );
  };

  console.log(program);

  try {
    return isTodayExercisePossible() ? (
      <ReadyToPlay program={program} updatePerformance={updatePerformance} />
    ) : (
      <Text>You already did your exercise today</Text>
    );
  } catch {
    return (
      <View>
        <Text>
          You have no remaining time to achieve your goal of{' '}
          {program.completion.finalGoal} {program.unit}
        </Text>
        {program.completion.finalGoal >
        program.completion.performances[
          program.completion.performances.length - 1
        ] ? (
          <Text>
            But hey ! You got close by achieving{' '}
            {program.completion.performances.slice(-1)} {program.unit}
          </Text>
        ) : (
          <Text>
            You over-acheive your goal with
            {program.completion.performances.slice(-1)} {program.unit}
          </Text>
        )}
      </View>
    );
  }
};
