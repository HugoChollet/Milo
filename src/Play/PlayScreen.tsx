import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { ProgramData } from '../Program/ProgramDataType';
import { Text } from 'react-native';
import { ReadyToPlay } from './ReadyToPlay';
import ModalInput from '../components/ModalInput/ModalInput';
import { ProgramEnd } from './ProgramEnd';

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
  const [modalVisibily, setModalVisibility] = useState(false);

  const updatePerformances = (value: string) => {
    setProgram({
      ...program,
      lastPractice: new Date(),
      completion: {
        ...program.completion,
        performances: [...program.completion.performances, Number(value)],
      },
    });
  };

  const nextAction = (isPlaying: boolean) => {
    if (isPlaying) {
      setModalVisibility(true);
    }
  };

  const isTodayExercisePossible = () => {
    return (
      !program.lastPractice ||
      program.lastPractice.getDate() !== new Date().getDate()
    );
  };

  try {
    return isTodayExercisePossible() ? (
      <>
        <ReadyToPlay program={program} nextAction={nextAction} />
        <ModalInput
          isVisible={modalVisibily}
          onSubmit={updatePerformances}
          onClose={() => setModalVisibility(false)}
        />
      </>
    ) : (
      <Text>You already did your exercise today</Text>
    );
  } catch {
    return <ProgramEnd program={program} />;
  }
};
