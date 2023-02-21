import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import SelectDropdown from 'react-native-select-dropdown';

import { CrossIcon } from '../icons/Cross.icon';
import { IconButton } from '../components/IconButton/IconButton.component';
import { ProgramData } from './ProgramDataType';
import { Input } from '../components/Input/Input.component';
import { theme } from '../theme/theme';
import { StyleSheet } from 'react-native';

const unit = ['m', 'km', 'km/h', 'g', 'kg', 's', 'min', 'unit'];

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
      <SelectDropdown
        data={unit}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultValue="unit"
        buttonStyle={style.dropdown}
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

const style = StyleSheet.create({
  dropdown: {
    borderWidth: theme.spaces.xxs,
    borderColor: theme.colors.grey[200],
    margin: theme.spaces.s,
  },
});

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
}));
