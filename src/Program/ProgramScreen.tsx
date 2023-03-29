import React, { useEffect, useState } from 'react';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStack';
import { CardList } from '../components/CardList/CardList';
import { readData } from '../localStorage/readData';
import { ListContainer } from './program.style';

type Props = NativeStackScreenProps<RootStackParamList, 'Program'>;

export const ProgramScreen = ({ navigation }: Props) => {
  const [programList, setProgramList] = useState<Array<ProgramData>>(null);

  useEffect(() => {
    readData('Program').then(data => {
      if (data !== null) {
        setProgramList(data);
      }
    });
  }, []);

  return (
    <ListContainer>
      {programList && (
        <CardList
          data={programList.map(data => ({
            title: data.name,
            subtitle: data.objective.toString(),
          }))}
        />
      )}
      <IconButton
        Icon={CrossIcon}
        onPress={() =>
          navigation.navigate('CreateProgramScreen', {
            programId: programList ? programList.length : 0,
            programList: programList,
          })
        }
      />
    </ListContainer>
  );
};
