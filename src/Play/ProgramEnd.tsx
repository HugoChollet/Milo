import React from 'react';
import { Text, View } from 'react-native';
import { ProgramData } from '../Program/ProgramDataType';

type ProgramEndProps = {
  program: ProgramData;
};

export const ProgramEnd = ({ program }: ProgramEndProps) => {
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
};
