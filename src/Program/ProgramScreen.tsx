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
import { readData } from '../localStorage/readData';

type Props = NativeStackScreenProps<RootStackParamList, 'Program'>;

export const ProgramScreen = ({ navigation }: Props) => {
  const [programList, setProgramList] = useState<Array<ProgramData>>(null);
  const ProgramContext = React.createContext({});

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

      <ProgramContext.Provider value="new">
        <IconButton
          Icon={CrossIcon}
          onPress={() => navigation.navigate('CreateProgramScreen')}
        />
      </ProgramContext.Provider>
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));
