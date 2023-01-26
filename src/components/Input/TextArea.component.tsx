import { useTheme } from '@emotion/react';
import React, { useState } from 'react';

import { ErrorIcon } from '../../icons/Error.icon';
import { TextAreaContainer, TextAreaBox, LabelsRow } from './TextArea.styles';

type TextAreaProps = {
  onChangeText?: (text: string) => void;
  value?: string;
  label?: string;
  help?: string;
  isDisabled?: boolean;
  placeholder?: string;
  isError?: boolean;
  errorLabel?: string;
  description?: string;
};

export const TextArea = ({
  onChangeText,
  value,
  label,
  help,
  isDisabled = false,
  placeholder,
  isError = false,
  errorLabel,
  description,
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <>
      <LabelsRow leftLabel={label} rightLabel={help} isDisabled={isDisabled} />
      <TextAreaContainer
        isDisabled={isDisabled}
        isError={isError}
        isFocused={isFocused}
      >
        <TextAreaBox
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          editable={!isDisabled}
          onFocus={onFocus}
          onBlur={onBlur}
          multiline={true}
        />
        {isError ? <ErrorIcon color={theme.colors.status.error} /> : null}
      </TextAreaContainer>
      <LabelsRow
        leftLabel={isError ? errorLabel : undefined}
        rightLabel={description}
        isDisabled={isDisabled}
        isError={isError}
      />
    </>
  );
};
