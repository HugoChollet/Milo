import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStack';
import { CardList } from '../components/CardList/CardList';
import { CardProps } from '../components/Card/Card';

type Props = NativeStackScreenProps<RootStackParamList, 'Program'>;

export const ProgramScreen = ({ navigation }: Props) => {
  const [programData, setProgramData] = useState<Array<ProgramData>>(null);

  useEffect(() => {
    console.log('test');

    setProgramData([
      {
        name: 'string',
        objective: 'string',
      },
      {
        name: 'test',
        objective: 'click',
      },
    ]);
  }, []);

  return (
    <Container>
      {programData && (
        <CardList
          data={programData.map(data => {
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
        onPress={() => navigation.navigate('CreateProgramScreen')}
      />
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));
