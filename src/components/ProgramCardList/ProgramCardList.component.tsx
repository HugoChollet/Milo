import React from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';

import {
  ProgramCard,
  ProgramCardProps,
} from '../ProgramCard/ProgramCard.component';

const programCard = ({ item }: { item: ProgramCardProps }) => {
  return (
    <ProgramCard
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      completion={item.completion}
      onPlay={item.onPlay}
      onView={item.onView}
      onEdit={item.onEdit}
      onDelete={item.onDelete}
    />
  );
};

type CardListProps = {
  data: Array<ProgramCardProps>;
};

export const ProgramCardList = ({ data }: CardListProps) => {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={programCard}
        keyExtractor={item => item.title}
      />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
}));
