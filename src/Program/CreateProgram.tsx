import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';

export const CreateProgram = () => {
  const [program, setProgram] = useState<Array<ProgramData>>(null);

  //   useEffect(() => {
  //     console.log('test');

  //     setProgramData([
  //       {
  //         name: 'string',
  //         objective: 'string',
  //       },
  //       {
  //         name: 'test',
  //         objective: 'click',
  //       },
  //     ]);
  //   }, []);

  return (
    <Container>
      <Input
        label="Name of the exerise :"
        placeholder="Morning Jog"
        onBlur={() => {
          console.log('test');
        }}
      />
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));
