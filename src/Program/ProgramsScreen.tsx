import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { ProgramList } from './ProgramsList';
import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramsData } from './ProgramsDataType';

export const ProgramScreen = () => {
  const [programsData, setProgramsData] = useState<Array<ProgramsData>>(null);

  useEffect(() => {
    console.log('test');

    setProgramsData([
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
      <ProgramList data={programsData} />
      <IconButton Icon={CrossIcon} onPress={() => {}} />
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));
