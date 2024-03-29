import React from 'react';
import { useTheme } from '@emotion/react';

import { Typography } from '../Typography/Typography.component';
import {
  CardContainer,
  ContentContainer,
  IconButtonCard,
  ImageCard,
} from './ProgramCard.style';

const DEFAULT_IMAGE_URL =
  'https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg';

export type ProgramCardProps = {
  image?: string;
  name: string;
  objective?: string;
  onPlay: () => void;
  onView: () => void;
  onEdit: () => void;
  onDelete: (item: any) => void;
  completion?: number;
};

export const ProgramCard = ({
  image = DEFAULT_IMAGE_URL,
  name,
  objective,
  onPlay,
  onView,
  onEdit,
  onDelete,
}: ProgramCardProps) => {
  const theme = useTheme();

  return (
    <CardContainer onPress={onEdit}>
      <ImageCard source={{ uri: image }} />
      <IconButtonCard
        onPlay={onPlay}
        onView={onView}
        onEdit={onEdit}
        onDelete={() => onDelete(name)}
      />
      <ContentContainer>
        <Typography.Title size="xs">{name}</Typography.Title>
        <Typography.P3 color={theme.colors.grey[300]}>
          {objective}
        </Typography.P3>
      </ContentContainer>
    </CardContainer>
  );
};
