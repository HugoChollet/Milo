import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { ErrorIcon } from '../../icons/Error.icon';
import { Typography } from '../Typography/Typography.component';

import { Container, InputBox, Label } from './Input.styles';
import { InputContainer } from './common.style';

export type InputProps = Omit<TextInputProps, 'onFocus' | 'editable'> & {
  label?: string;
  isDisabled?: boolean;
  isError?: boolean;
  errorLabel?: string;
  RightIcon?: React.ReactNode;
};

export const Input = ({
  label,
  isDisabled = false,
  isError = false,
  errorLabel,
  RightIcon,
  ...textInputProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const labelColor = isDisabled
    ? theme.colors.typography.placeholder
    : theme.colors.typography.text;
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <Container>
      <Label label={label} labelColor={labelColor} />
      <InputContainer
        isDisabled={isDisabled}
        isError={isError}
        isFocused={isFocused}>
        <InputBox
          editable={!isDisabled}
          onFocus={onFocus}
          onBlur={onBlur}
          {...textInputProps}
        />
        {RightIcon !== undefined && RightIcon}
        {isError && <ErrorIcon color={theme.colors.status.error} />}
      </InputContainer>
      {isError && errorLabel ? (
        <Typography.P2 type={'regular'} color={theme.colors.status.error}>
          {errorLabel}
        </Typography.P2>
      ) : null}
    </Container>
  );
};
