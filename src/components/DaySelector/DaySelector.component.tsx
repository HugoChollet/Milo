import styled from '@emotion/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { SwitchButton } from '../SwitchButton/SwitchButton.component';

const EMPTY_WEEK = [false, false, false, false, false, false, false];

type DaySelectorProps = {
  defaultValue?: Array<boolean>;
};

export const DaySelector = ({ defaultValue }: DaySelectorProps) => {
  const [switchTab, setSwitchTab] = useState(
    defaultValue ? defaultValue : EMPTY_WEEK,
  );

  const switchValue = (indexValue: number) => {
    setSwitchTab(
      switchTab.map((item, index) => (index === indexValue ? !item : item)),
    );
  };

  return (
    <WeekContainer>
      <SwitchButton
        label="M"
        defaultValue={switchTab[0]}
        onPress={() => switchValue(0)}
      />
      <SwitchButton
        label="T"
        defaultValue={switchTab[1]}
        onPress={() => switchValue(1)}
      />
      <SwitchButton
        label="W"
        defaultValue={switchTab[2]}
        onPress={() => switchValue(2)}
      />
      <SwitchButton
        label="T"
        defaultValue={switchTab[3]}
        onPress={() => switchValue(3)}
      />
      <SwitchButton
        label="F"
        defaultValue={switchTab[4]}
        onPress={() => switchValue(4)}
      />
      <SwitchButton
        label="S"
        defaultValue={switchTab[5]}
        onPress={() => switchValue(5)}
      />
      <SwitchButton
        label="S"
        defaultValue={switchTab[6]}
        onPress={() => switchValue(6)}
      />
    </WeekContainer>
  );
};

const WeekContainer = styled(View)(() => ({
  flexDirection: 'row',
  justifyContent: 'center',
}));
