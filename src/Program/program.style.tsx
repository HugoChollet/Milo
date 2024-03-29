import React from 'react';
import styled from '@emotion/native';
import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';

export const ListContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

export const ExerciseContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
}));

export const FormContainer = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
  justifyContent: 'space-around',
}));

export const SmallInputContainer = styled.View(({ theme }) => ({
  width: theme.spaces.doubleXl * 2,
}));

export const NumberContainer = ({
  program,
  setObjective,
  setCurrent,
}: {
  program: ProgramData;
  setObjective: (text: string) => void;
  setCurrent: (text: string) => void;
}) => {
  return (
    <SmallInputContainer>
      <Input
        label="Goal :"
        placeholder="10"
        onChange={({ nativeEvent: { text } }) => setObjective(text)}
        value={program.objective ? program.objective.toString() : ''}
        keyboardType="numeric"
      />
      <Input
        label="Start from :"
        placeholder="5"
        onChange={({ nativeEvent: { text } }) => setCurrent(text)}
        value={program.current ? program.current.toString() : ''}
        keyboardType="numeric"
      />
    </SmallInputContainer>
  );
};
