import React, { useEffect, useState } from 'react';
import styled from '@emotion/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStack';

import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';
import { Dropdown } from '../components/DropDown/Dropdown';
import { DateButton } from '../components/DateButton/DateButton';
import { Button } from '../components/Button/Button.component';
import { storeData } from '../localStorage/storeData';

const unit = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

type CreateProgramScreenProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'CreateProgramScreen'>;
  route: {
    params: {
      programId: number;
      programList: Array<ProgramData>;
    };
  };
};

export const CreateProgramScreen = ({
  route,
  navigation,
}: CreateProgramScreenProps) => {
  const { programList, programId } = route.params;
  const [program, setProgram] = useState<ProgramData>({
    name: '',
    objective: 0,
    current: 0,
    unit: 'unit',
  });

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  if (programId < programList.length) {
    console.log('New prgram as : ', programId);

    setProgram(programList[programId]);
  }

  const checkProgramValue = () => {
    // TODO set program with latest Date and Time value
    console.log('before :', programList);

    if (programId > programList.length) {
      programList.push(program);
    } else {
      programList[programId] = program;
    }
    console.log('after :', programList);

    storeData({ value: programList, key: 'Program' });
  };

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
          setObjective={text => {
            setProgram({ ...program, objective: parseInt(text, 10) });
          }}
          setCurrent={text => {
            setProgram({ ...program, current: parseInt(text, 10) });
          }}
        />
        <Dropdown data={unit} />
        {/* TODO store unit */}
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
      <Button.Primary label="Confirm" onPress={() => checkProgramValue()} />
    </Container>
  );
};

const NumberContainer = ({
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
