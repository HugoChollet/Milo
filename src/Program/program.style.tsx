import styled from '@emotion/native';

export const ListContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

export const ExerciseContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
}));

export const FormContainer = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'column',
  paddingHorizontal: theme.spaces.m,
  justifyContent: 'space-around',
}));

export const SmallInputContainer = styled.View(({ theme }) => ({
  width: theme.spaces.doubleXl * 2,
}));
