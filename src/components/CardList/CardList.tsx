import React from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';

import { Card, CardProps } from '../Card/Card';

const programCard = ({ item }: { item: CardProps }) => {
  return (
    <Card
      title={item.title}
      subtitle={item.subtitle}
      onPress={() => {}}
      image={item.image}
      completion={item.completion}
    />
  );
};

type CardListProps = {
  data: Array<CardProps>;
};

export const CardList = ({ data }: CardListProps) => {
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
