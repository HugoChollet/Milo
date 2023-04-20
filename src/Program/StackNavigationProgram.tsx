import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/RootStack';
import { ProgramScreen } from './ProgramScreen';
import { EditProgramScreen } from './EditProgramScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigationProgram = () => {
  return (
    <Stack.Navigator initialRouteName="Program">
      <Stack.Screen name="Program" component={ProgramScreen} />
      <Stack.Screen name="MakeProgram" component={EditProgramScreen} />
    </Stack.Navigator>
  );
};
