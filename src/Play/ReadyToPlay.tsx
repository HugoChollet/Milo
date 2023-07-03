import { useTheme } from '@emotion/react';
import React from 'react';
import { View, Text } from 'react-native';

import { PlayButton } from '../components/PlayButton/PlayButton.component';
import { getRemainingDays } from '../Program/getRemainingSteps';
import { ProgramData } from '../Program/ProgramDataType';

type ReadyToPlayProps = {
  program: ProgramData;
  nextAction: (isPlaying: boolean) => void;
};

export const ReadyToPlay = ({ program, nextAction }: ReadyToPlayProps) => {
  const remainingSteps = getRemainingDays(program.endDate, program.days);
  const theme = useTheme();

  return (
    <View>
      <Text>
        You have {remainingSteps} sessions to achieve your goal of{' '}
        {program.completion.finalGoal} {program.unit}
      </Text>
      <Text>
        You are currently able to do {program.completion.performances.slice(-1)}{' '}
        {program.unit} will you be able do to better this time ?
      </Text>
      <Text>
        Objective for today : {program.completion.nextGoal} {program.unit}
      </Text>
      <PlayButton onPress={nextAction} size={theme.spaces.doubleXl * 2} />
    </View>
  );
};
