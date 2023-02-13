import styled from '@emotion/native';

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
