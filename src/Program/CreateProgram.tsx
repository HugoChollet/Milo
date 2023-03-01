import React, { useEffect, useState } from 'react';
import styled from '@emotion/native';

import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';
import { Dropdown } from '../components/DropDown/Dropdown';
import { DateButton } from '../components/DateButton/DateButton';
import { Button } from '../components/Button/Button.component';
import { storeData } from '../localStorage/storeData';
import { readData } from '../localStorage/readData';

const unit = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

export const CreateProgram = () => {
  const [program, setProgram] = useState<ProgramData>({
    name: '',
    objective: 1,
  });
  const mockedKey = 'abc';

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    readData(mockedKey).then(data => {
      if (data !== null) {
        setProgram(data);
      }
    });
  }, []);

  return (
    <Container>
      <Input
        label="Name of the exerise :"
        placeholder="Morning Jog"
        value={program ? program.name : ''}
        onChange={({ nativeEvent: { text } }) => {
          setProgram({ ...program, name: text });
        }}
      />
      <ExerciseContainer>
        <NumberContainer
          program={program}
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
      <Button.Primary
        label="Confirm"
        onPress={() => storeData({ value: program, key: mockedKey })}
      />
    </Container>
  );
};

const NumberContainer = ({
  program,
  setProgram,
}: {
  program: ProgramData;
  setProgram: (text: string) => void;
}) => {
  return (
    <SmallInputContainer>
      <Input
        label="Goal :"
        placeholder="10"
        onChange={({ nativeEvent: { text } }) => setProgram(text)}
        value={program.objective ? program.objective.toString() : ''}
        keyboardType="numeric"
      />
      <Input
        label="Start from :"
        placeholder="5"
        onChange={({ nativeEvent: { text } }) => setProgram(text)}
        value={program.current ? program.current.toString() : ''}
        keyboardType="numeric"
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
