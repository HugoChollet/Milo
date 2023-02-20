import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';

export const CreateProgram = () => {
  const [program, setProgram] = useState<ProgramData>(null);

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
        onBlur={({ nativeEvent: { text } }) => {
          setProgram({ ...program, name: text });
        }}
      />
      <Input
        label="Current Performance :"
        placeholder="5"
        onBlur={({ nativeEvent: { text } }) => {
          setProgram({ ...program, current: parseInt(text, 10) });
        }}
      />
      <Input
        label="Goal :"
        placeholder="10"
        onBlur={({ nativeEvent: { text } }) => {
          setProgram({ ...program, objective: parseInt(text, 10) });
        }}
      />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
}));
