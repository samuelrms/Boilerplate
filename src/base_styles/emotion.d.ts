import '@emotion/react';
import { Theme as RootTheme } from './theme';

declare module '@emotion/react' {
  export interface Theme extends RootTheme {}
}
