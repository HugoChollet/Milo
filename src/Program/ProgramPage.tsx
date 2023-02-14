import React from 'react';
import { useTheme } from '@emotion/react';

import { ProgramList } from './ProgramList';
import { Card } from '../components/Card/Card';

export const Home = () => {
  const programCard = ({ item }: { item: Data }) => {
    return (
      <Card
        title={item.name}
        subtitle={item.tagline}
        image={item.image_url}
        onPress={() => {}}
      />
    );
  };

  return <ProgramList />;
};
