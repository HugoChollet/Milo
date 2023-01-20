import {
  FontFamily,
  Fonts,
  ParagraphFontSize,
  ParagraphFontType,
  TitleFontSize,
  FontStyle,
  FontSource,
} from './fonts.types';

export const fontFiles: Record<Readonly<FontFamily>, FontSource> = {
  ['OpenSans-Bold']: require('./fonts/OpenSans-Bold.ttf'),
  ['OpenSans-BoldItalic']: require('./fonts/OpenSans-BoldItalic.ttf'),
  ['OpenSans-ExtraBold']: require('./fonts/OpenSans-ExtraBold.ttf'),
  ['OpenSans-ExtraBoldItalic']: require('./fonts/OpenSans-ExtraBoldItalic.ttf'),
  ['OpenSans-Italic']: require('./fonts/OpenSans-Italic.ttf'),
  ['OpenSans-Light']: require('./fonts/OpenSans-Light.ttf'),
  ['OpenSans-LightItalic']: require('./fonts/OpenSans-LightItalic.ttf'),
  ['OpenSans-Medium']: require('./fonts/OpenSans-Medium.ttf'),
  ['OpenSans-MediumItalic']: require('./fonts/OpenSans-MediumItalic.ttf'),
  ['OpenSans-Regular']: require('./fonts/OpenSans-Regular.ttf'),
  ['OpenSans-SemiBold']: require('./fonts/OpenSans-SemiBold.ttf'),
  ['OpenSans-SemiBoldItalic']: require('./fonts/OpenSans-SemiBoldItalic.ttf'),
};

const getTitleFont = (fontSize: number): FontStyle => ({
  fontSize,
  lineHeight: Math.round(fontSize * 1.3),
  fontFamily: 'OpenSans-Bold',
});

const getParagraphFonts = (
  fontSize: number,
): Record<ParagraphFontType, FontStyle> => {
  const base = { fontSize, lineHeight: Math.round(fontSize * 1.5) };
  return {
    regular: {
      ...base,
      fontFamily: 'OpenSans-Regular',
    },
    italic: {
      ...base,
      fontFamily: 'OpenSans-Italic',
    },
    bold: {
      ...base,
      fontFamily: 'OpenSans-Bold',
    },
  };
};

export const fonts: Fonts = {
  title: {
    xs: getTitleFont(18),
    s: getTitleFont(22),
    m: getTitleFont(26),
    l: getTitleFont(30),
    xl: getTitleFont(32),
    xxl: getTitleFont(36),
    xxxl: getTitleFont(46),
  },
  paragraph: {
    p1: getParagraphFonts(16),
    p2: getParagraphFonts(14),
    p3: getParagraphFonts(12),
  },
} as const;

export const titleFontSizes = Object.keys(fonts.title) as TitleFontSize[];

export const paragraphFontSizes = Object.keys(
  fonts.paragraph,
) as ParagraphFontSize[];

export const paragraphFontTypes: ParagraphFontType[] = [
  'regular',
  'italic',
  'bold',
];
