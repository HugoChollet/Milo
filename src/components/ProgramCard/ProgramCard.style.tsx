import React from 'react';
import styled from '@emotion/native';

import { IconButton } from '../IconButton/IconButton.component';
import { GraphIcon } from '../../icons/Graph.icon';
import { PencilIcon } from '../../icons/Pencil.icon';
import { TrashIcon } from '../../icons/Trash.icon';
import { PlayIcon } from '../../icons/Play.icon';
import { useTheme } from '@emotion/react';

export const CardContainer = styled.Pressable(({ theme }) => ({
  marginVertical: theme.spaces.s,
  backgroundColor: theme.colors.white,
  borderRadius: theme.spaces.m,
}));

export const ImageCard = styled.Image(({ theme }) => ({
  height: theme.spaces.doubleXl * 2,
  borderTopLeftRadius: theme.spaces.m,
  borderTopRightRadius: theme.spaces.m,
}));

export const ContentContainer = styled.View(({ theme }) => ({
  padding: theme.spaces.m,
}));

const IconButtonContainer = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
}));

type IconButtonCardProps = {
  onPlay: () => void;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export const IconButtonCard = ({
  onPlay,
  onView,
  onEdit,
  onDelete,
}: IconButtonCardProps) => {
  const theme = useTheme();
  return (
    <IconButtonContainer>
      <IconButton
        Icon={PlayIcon}
        onPress={onPlay}
        color={theme.colors.grey[300]}
        testID={'Play'}
      />
      <IconButton
        Icon={GraphIcon}
        onPress={onView}
        color={theme.colors.grey[300]}
        testID={'View'}
      />
      <IconButton
        Icon={PencilIcon}
        onPress={onEdit}
        color={theme.colors.grey[300]}
        testID={'Edit'}
      />
      <IconButton
        Icon={TrashIcon}
        onPress={onDelete}
        color={theme.colors.grey[300]}
        testID={'Delete'}
      />
    </IconButtonContainer>
  );
};
