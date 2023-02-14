import React from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';
import { IconButton } from '../components/IconButton/IconButton.component';
import { CrossIcon } from '../icons/Cross.icon';

export const ProgramList = () => {
  return (
    <Container>
      {/* <FlatList /> */}
      <IconButton Icon={CrossIcon} onPress={() => {}} />
    </Container>
  );
};

const Container = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
}));
