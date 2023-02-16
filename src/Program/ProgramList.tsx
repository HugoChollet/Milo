import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';

import { ProgramData } from './ProgramDataType';
import { Card } from '../components/Card/Card';

const programCard = ({ item }: { item: ProgramData }) => {
  console.log(item);

  return (
    <Card
      title={item.name}
      subtitle={item.objective}
      onPress={() => {}}
      image={item.image}
      completion={item.completion}
    />
  );
};

type ProgramListProps = {
  data: Array<ProgramData>;
};

export const ProgramList = ({ data }: ProgramListProps) => {
  return (
    <Container>
      <FlatList data={data} renderItem={programCard} />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
}));
