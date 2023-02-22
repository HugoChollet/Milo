import React, { useEffect, useState } from 'react';
import styled from '@emotion/native';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';
import { Dropdown } from '../components/DropDown/Dropdown';

const unit = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

export const CreateProgram = () => {
  const [program, setProgram] = useState<ProgramData>(null);

  return (
    <Container>
      <Input
        label="Name of the exerise :"
        placeholder="Morning Jog"
        onBlur={({ nativeEvent: { text } }) => {
          setProgram({ ...program, name: text });
        }}
      />
      <ExerciseContainer>
        <Dropdown data={unit} />
        <NumberContainer
          setProgram={text => {
            setProgram({ ...program, objective: parseInt(text, 10) });
          }}
        />
      </ExerciseContainer>
    </Container>
  );
};

const NumberContainer = ({
  setProgram,
}: {
  setProgram: (text: string) => void;
}) => {
  return (
    <>
      <Input
        label="Goal :"
        placeholder="10"
        onBlur={({ nativeEvent: { text } }) => setProgram(text)}
      />
      <Input
        label="Current Performance :"
        placeholder="5"
        onBlur={({ nativeEvent: { text } }) => setProgram(text)}
      />
    </>
  );
};

const ExerciseContainer = styled.View(({ theme }) => ({}));

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
}));
