import styled from '@emotion/native';

const Horizontal = styled.View<{ size: number }>(({ size }) => ({
  width: size,
}));

const Vertical = styled.View<{ size: number }>(({ size }) => ({
  height: size,
}));

export const Spacer = {
  Horizontal,
  Vertical,
};
