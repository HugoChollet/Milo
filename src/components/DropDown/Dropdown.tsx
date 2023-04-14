import React from 'react';

import { useTheme } from '@emotion/react';
import SelectDropdown from 'react-native-select-dropdown';

type DropdownProps = {
  data: Array<string>;
  defaultValue: string;
  onSelect: (selectedItem: any, index: number) => void;
};

export const Dropdown = ({ data, defaultValue, onSelect }: DropdownProps) => {
  const theme = useTheme();

  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      defaultValue={defaultValue}
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
