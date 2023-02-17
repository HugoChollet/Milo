import React from 'react';
import { useTheme } from '@emotion/react';

import { Typography } from '../Typography/Typography.component';
import { CardContainer, ContentContainer, ImageCard } from './Card.style';
// import { IngredientsList } from '../IngredientsList/IngredientsList';

const DEFAULT_IMAGE_URL =
  'https://images.everydayhealth.com/images/everything-you-need-know-about-fitness-1440x810.jpg';

export type CardProps = {
  image?: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
  completion?: number;
};

export const Card = ({
  image = DEFAULT_IMAGE_URL,
  title,
  subtitle,
  // Tags,
  onPress,
}: CardProps) => {
  const theme = useTheme();

  return (
    <CardContainer onPress={onPress}>
      <ImageCard source={{ uri: image }} />
      <ContentContainer>
        <Typography.Title size="xs">{title}</Typography.Title>
        <Typography.P3 color={theme.colors.grey[300]}>{subtitle}</Typography.P3>
        {/* <IngredientsList ingredients={maltTags} variant="primary" /> */}
      </ContentContainer>
    </CardContainer>
  );
};
