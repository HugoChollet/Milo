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

  const updatePerformance = () => {
    setProgram({
      ...program,
      completion: {
        ...program.completion,
        performances: [...program.completion.performances, 10],
      },
    });
  };

  try {
    const remainingSteps = getRemainingDays(program.endDate, program.days);
    return (
      <View>
        <Text>
          You have {remainingSteps} sessions to achieve your goal of{' '}
          {program.completion.finalGoal} {program.unit}
        </Text>
        <Text>
          You are currently able to do{' '}
          {program.completion.performances.slice(-1)} {program.unit} will you be
          able do to better this time ?
        </Text>
        <Text>
          Objective for today : {program.completion.nextGoal} {program.unit}
        </Text>
        <PlayButton
          onPress={() => updatePerformance()}
          size={theme.spaces.doubleXl * 2}
        />
      </View>
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
