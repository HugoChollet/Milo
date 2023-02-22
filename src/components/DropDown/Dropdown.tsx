import React from 'react';

import { useTheme } from '@emotion/react';
import SelectDropdown from 'react-native-select-dropdown';

type DropdownProps = {
  data: Array<string>;
};

export const Dropdown = ({ data }: DropdownProps) => {
  const theme = useTheme();

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultValue="unit"
      buttonStyle={{
        borderWidth: theme.spaces.xxs,
        borderColor: theme.colors.grey[200],
        margin: theme.spaces.s,
      }}
      disableAutoScroll
      onChangeSearchInputText={() => {}}
    />
  );
};
