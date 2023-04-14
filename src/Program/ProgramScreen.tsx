import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CrossIcon } from '../icons/Cross.icon';
import { ProgramData } from './ProgramDataType';
import { RootStackParamList } from '../types/RootStack';
import { IconButton } from '../components/IconButton/IconButton.component';
import { CardList } from '../components/CardList/CardList';
import { readData } from '../localStorage/readData';
import { ListContainer } from './program.style';

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

  return (
    <ListContainer>
      {programList && (
        <CardList
          data={programList.map(data => ({
            title: data.name,
            subtitle: data.objective.toString(),
            onPress: () =>
              navigation.navigate('MakeProgram', {
                program: data,
                programList: programList,
              }),
          }))}
        />
      )}
      <IconButton
        Icon={CrossIcon}
        onPress={() =>
          navigation.navigate('MakeProgram', {
            programList: programList,
          })
        }
      />
    </ListContainer>
  );
};
