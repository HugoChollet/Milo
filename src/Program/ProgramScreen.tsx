import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { ProgramData } from './ProgramDataType';
import { PlusIcon } from '../icons/Plus.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { readData } from '../localStorage/readData';
import { ListContainer } from './program.style';
import { ProgramCardList } from '../components/ProgramCardList/ProgramCardList.component';
import { storeData } from '../localStorage/storeData';

type Props = NativeStackScreenProps<RootStackParamList, 'Program'>;

export const ProgramScreen = ({ navigation }: Props) => {
  const [programList, setProgramList] = useState<Array<ProgramData>>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    readData('Program').then(data => {
      if (data !== null) {
        setProgramList(
          data.map((item: ProgramData) => {
            return {
              ...item,
              date: new Date(item.date),
              time: new Date(item.time),
            };
          }),
        );
      }
    });
  }, [isFocused]);

  const deleteProgram = (item: string) => {
    const remainingProgram = programList.filter(
      program => program.name !== item,
    );
    setProgramList(remainingProgram);
    storeData({ value: remainingProgram, key: 'Program' });
  };

  return (
    <ListContainer>
      {programList && (
        <ProgramCardList
          data={programList.map(data => ({
            name: data.name,
            objective: data.objective.toString(),
            onPlay: () =>
              navigation.navigate('Play', {
                program: data,
              }),
            onView: () => console.log('view'),
            onEdit: () =>
              navigation.navigate('MakeProgram', {
                program: data,
                programList: programList,
              }),
            onDelete: item => {
              deleteProgram(item);
            },
          }))}
        />
      )}
      <IconButton
        Icon={PlusIcon}
        onPress={() =>
          navigation.navigate('MakeProgram', {
            programList: programList,
          })
        }
      />
    </ListContainer>
  );
};
