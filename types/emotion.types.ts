import { Theme as ThemeInterface } from '../src/theme/theme.types';

declare module '@emotion/react' {
  export interface Theme extends ThemeInterface {}
}
