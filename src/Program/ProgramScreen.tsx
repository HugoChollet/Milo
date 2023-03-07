import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStack';
import { CardList } from '../components/CardList/CardList';
import { readData } from '../localStorage/readData';

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
    <Container>
      {programList && (
        <CardList
          data={programList.map(data => {
            const tmp = {
              title: data.name,
              subtitle: data.objective.toString(),
            };
            return tmp;
          })}
        />
      )}
      <IconButton
        Icon={CrossIcon}
        onPress={() =>
          navigation.navigate('CreateProgramScreen', {
            index: 86,
            programList: programList,
          })
        }
      />
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));
