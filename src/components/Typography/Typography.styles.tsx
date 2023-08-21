import styled from 'styled-components'
import { Mixin, Props } from './Typography.types'
import { theme } from '@/base_styles/theme'

const styles: Mixin = {
  lg: {
    xlg: {
      fontSize: theme.size['6.5xl'],
      fontWeight: theme.weight.medium,
    },
    lg: {
      fontSize: theme.size['6xl'],
      fontWeight: theme.weight.medium,
    },
    md: {
      fontSize: theme.size['4.25xl'],
      fontWeight: theme.weight.medium,
    },
    sm: {
      fontSize: theme.size['4xl'],
      fontWeight: theme.weight.bold,
    },
    heading: {
      fontSize: theme.size['3.5xl'],
      fontWeight: theme.weight.regular,
    },
    subheading: {
      fontSize: theme.size['2xl'],
      fontWeight: theme.weight.regular,
    },
    body: {
      fontSize: theme.size['lg'],
      fontWeight: theme.weight.regular,
    },
    subtitle: {
      fontSize: theme.size['md'],
      fontWeight: theme.weight.regular,
    },
    caption: {
      fontSize: theme.size['xs'],
      fontWeight: theme.weight.regular,
    },
  },
  sm: {
    xlg: {
      fontSize: theme.size['3.5xl'],
      fontWeight: theme.weight.medium,
    },
    lg: {
      fontSize: theme.size['2xl'],
      fontWeight: theme.weight.medium,
    },
    md: {
      fontSize: theme.size['xl'],
      fontWeight: theme.weight.medium,
    },
    sm: {
      fontSize: theme.size.base,
      fontWeight: theme.weight.bold,
    },
    heading: {
      fontSize: theme.size['lg'],
      fontWeight: theme.weight.regular,
    },
    subheading: {
      fontSize: theme.size['md'],
      fontWeight: theme.weight.regular,
    },
    body: {
      fontSize: theme.size['sm'],
      fontWeight: theme.weight.regular,
    },
    subtitle: {
      fontSize: theme.size['md'],
      fontWeight: theme.weight.regular,
    },
    caption: {
      fontSize: theme.size['sm'],
      fontWeight: theme.weight.medium,
    },
  },
}

const componentVariantStyle = ({ as }: Props) => as

export const StyledTypography = styled(
  componentVariantStyle({ as: 'p' }),
)<Props>`
  color: ${({ theme, color }) => color ?? theme.text};
  line-height: auto;

  ${({ size = 'lg', variant = 'body' }: Props) => `
  font-size: ${styles[size][variant].fontSize};
  font-weight: ${styles[size][variant].fontWeight};
  `}
`

export const Typography = ({ children, ...props }: Props) => (
  <StyledTypography {...props}>{children}</StyledTypography>
)
