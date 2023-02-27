import React, { useState } from 'react';
import styled from '@emotion/native';

import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';
import { Dropdown } from '../components/DropDown/Dropdown';
import { DateButton } from '../components/DateButton/DateButton';

const unit = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

export const CreateProgram = () => {
  const [program, setProgram] = useState<ProgramData>(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

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
        <NumberContainer
          setProgram={text => {
            setProgram({ ...program, objective: parseInt(text, 10) });
          }}
        />
        <Dropdown data={unit} />
      </ExerciseContainer>
      <DateButton
        label={'Goal Date :'}
        mode="date"
        date={date}
        setDate={setDate}
      />
      <DateButton
        label={'Time Reminder :'}
        mode="time"
        date={time}
        setDate={setTime}
      />
    </Container>
  );
};

const NumberContainer = ({
  setProgram,
}: {
  setProgram: (text: string) => void;
}) => {
  return (
    <SmallInputContainer>
      <Input
        label="Goal :"
        placeholder="10"
        onBlur={({ nativeEvent: { text } }) => setProgram(text)}
      />
      <Input
        label="Start from :"
        placeholder="5"
        onBlur={({ nativeEvent: { text } }) => setProgram(text)}
      />
    </SmallInputContainer>
  );
};

const ExerciseContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
}));

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
  justifyContent: 'space-around',
}));

const SmallInputContainer = styled.View(({ theme }) => ({
  width: theme.spaces.doubleXl * 2,
}));
