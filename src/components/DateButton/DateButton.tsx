import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from '@emotion/react';
import DatePicker from 'react-native-date-picker';

import { Button } from '../Button/Button.component';
import { Spacer } from '../Spacer/Spacer.component';
import { Typography } from '../Typography/Typography.component';

type DateButtonProps = {
  label: string;
  mode: 'datetime' | 'date' | 'time';
  date: Date;
  setDate: (newDate: Date) => void;
};

export const DateButton = ({ label, mode, date, setDate }: DateButtonProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <View>
      <Typography.P1>{label}</Typography.P1>
      <Spacer.Vertical size={theme.spaces.m} />
      <Button.Secondary
        label={
          mode === 'date'
            ? date.toDateString()
            : date.getHours() + 'h ' + date.getMinutes() + 'min'
        }
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode={mode}
        onConfirm={newDate => {
          setOpen(false);
          setDate(newDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};
