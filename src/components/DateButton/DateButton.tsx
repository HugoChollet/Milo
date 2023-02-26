import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { Button } from '../Button/Button.component';

type DateButtonProps = {
  date: Date;
  setDate: (newDate: Date) => void;
};

export const DateButton = ({ date, setDate }: DateButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button.Secondary
        label={date.toDateString()}
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={newDate => {
          setOpen(false);
          setDate(newDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};
