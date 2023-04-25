import React, { useState } from 'react';

import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';
import { Dropdown } from '../components/DropDown/Dropdown';
import { DateButton } from '../components/DateButton/DateButton';
import { Button } from '../components/Button/Button.component';
import { storeData } from '../localStorage/storeData';
import {
  FormContainer,
  ExerciseContainer,
  NumberContainer,
} from './program.style';
import { getNewId } from './getNewId';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStack';
import { DaySelector } from '../components/DaySelector/DaySelector.component';

const UNIT = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

type CreateProgramScreenProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'MakeProgram'>;
  route: {
    params: {
      program?: ProgramData;
      programList: Array<ProgramData>;
    };
  };
};

export const EditProgramScreen = ({
  route,
  navigation,
}: CreateProgramScreenProps) => {
  const programList = route.params.programList;
  const [program, setProgram] = useState<ProgramData>(
    route.params.program || {
      name: '',
      objective: 0,
      current: 0,
      unit: 'unit',
      id: getNewId(programList),
      endDate: new Date(),
      timeReminder: new Date(),
    },
  );
  const confirmProgram = () => {
    if (programList.findIndex(item => item.id === program.id) === -1) {
      programList.push(program);
    } else {
      programList[programList.findIndex(item => item.id === program.id)] =
        program;
    }

    storeData({ value: programList, key: 'Program' });
    navigation.goBack(program);
  };

  return (
    <FormContainer>
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
        <Dropdown
          data={UNIT}
          defaultValue={program.unit}
          onSelect={(selectedItem, index) => {
            setProgram({ ...program, unit: selectedItem });
          }}
        />
      </ExerciseContainer>
      <DateButton
        label={'Goal Date :'}
        mode="date"
        date={program.endDate}
        setDate={newDate => {
          setProgram({ ...program, endDate: newDate });
        }}
      />
      <DateButton
        label={'Time Reminder :'}
        mode="time"
        date={program.timeReminder}
        setDate={newDate => {
          setProgram({ ...program, timeReminder: newDate });
        }}
      />
      <DaySelector />
      <Button.Primary label="Confirm" onPress={() => confirmProgram()} />
    </FormContainer>
  );
};
