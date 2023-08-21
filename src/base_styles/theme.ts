import { colors } from './colors'
import { fonts } from './fonts'
import { borderWidth, breakpoints, spacing } from './spacing'

export const theme = {
  name: 'default',
  ...colors,
  ...fonts,
  spacing: { ...spacing },
  ...breakpoints,
  ...borderWidth,
}

export type Theme = typeof theme
