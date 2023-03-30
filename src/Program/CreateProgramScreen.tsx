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
  getNewId,
} from './program.style';

const UNIT = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

type CreateProgramScreenProps = {
  navigation: any;
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
    id: getNewId(programList),
  });
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  if (programId < programList.length) {
    setProgram(programList[programId]);
  }

  const confirmProgram = () => {
    // TODO set program with latest Date and Time value

    if (programId >= programList.length) {
      programList.push(program);
    } else {
      programList[programId] = program;
    }
    storeData({ value: programList, key: 'Program' });
    navigation.goBack();
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
          onSelect={(selectedItem, index) => {
            setProgram({ ...program, unit: selectedItem });
          }}
        />
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
      <Button.Primary label="Confirm" onPress={() => confirmProgram()} />
    </FormContainer>
  );
};
