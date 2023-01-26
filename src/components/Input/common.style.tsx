import styled from '@emotion/native';

export const InputContainer = styled.Pressable<{
  isDisabled: boolean;
  isError: boolean;
  isFocused: boolean;
}>(({ theme, isDisabled, isFocused, isError }) => {
  const getColor = () => {
    if (isError) return theme.colors.status.error;
    if (isFocused) return theme.colors.primary[500];
    return theme.colors.grey[100];
  };
  return {
    backgroundColor: !isDisabled ? theme.colors.white : theme.colors.grey[50],
    borderColor: getColor(),
    borderWidth: theme.spaces.halfXxs,
    borderRadius: theme.spaces.s,
    paddingVertical: theme.spaces.s,
    paddingHorizontal: theme.spaces.m,
    marginTop: theme.spaces.xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
  };
});
