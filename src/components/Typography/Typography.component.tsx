import { useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import {
  ParagraphFontSize,
  ParagraphFontType,
  TitleFontSize,
} from '../../theme/fonts.types';

type TitleProps = {
  size: TitleFontSize;
  children: ReactNode;
  color?: string;
};

const Title = ({ children, size, color }: TitleProps) => {
  const theme = useTheme();

  return (
    <Text
      style={[
        theme.fonts.title[size],
        { color: color ?? theme.colors.typography.text },
      ]}>
      {children}
    </Text>
  );
};

type ParagraphProps = {
  size: ParagraphFontSize;
  type?: ParagraphFontType;
  children: ReactNode;
  color?: string;
  underlined?: boolean;
};

const Paragraph = ({
  children,
  size,
  type = 'regular',
  color,
  underlined,
}: ParagraphProps) => {
  const theme = useTheme();
  const underlineStyle = {
    textDecorationLine: underlined ? 'underline' : 'none',
  } as const;

  return (
    <Text
      style={[
        // TODO Font are not correctly setup so we can't use them for now
        // theme.fonts.paragraph[size][type],
        { color: color ?? theme.colors.typography.text },
        underlineStyle,
      ]}>
      {children}
    </Text>
  );
};

export const Typography = {
  Title,
  P1: (props: Omit<ParagraphProps, 'size'>) => (
    <Paragraph size="p1" {...props} />
  ),
  P2: (props: Omit<ParagraphProps, 'size'>) => (
    <Paragraph size="p2" {...props} />
  ),
  P3: (props: Omit<ParagraphProps, 'size'>) => (
    <Paragraph size="p3" {...props} />
  ),
};
