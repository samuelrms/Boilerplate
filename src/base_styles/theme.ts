import { colors } from './colors';
import { fonts } from './fonts';
import { borderWidth, breakpoints, spacing } from './spacing';

export const theme = {
  colors: { ...colors },
  fonts: { ...fonts },
  spacing: { ...spacing },
  breakpoints: { ...breakpoints },
  borderWidth: { ...borderWidth },
};

export type Theme = typeof theme;
