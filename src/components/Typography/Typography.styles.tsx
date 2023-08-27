'use client';
import styled from '@emotion/styled';
import { Mixin, Props } from './Typography.types';
import { theme } from '@/base_styles/theme';

const styles: Mixin = {
  lg: {
    xlg: {
      fontSize: theme.fonts.size['6.5xl'],
      fontWeight: theme.fonts.weight.medium,
    },
    lg: {
      fontSize: theme.fonts.size['6xl'],
      fontWeight: theme.fonts.weight.medium,
    },
    md: {
      fontSize: theme.fonts.size['4.25xl'],
      fontWeight: theme.fonts.weight.medium,
    },
    sm: {
      fontSize: theme.fonts.size['4xl'],
      fontWeight: theme.fonts.weight.bold,
    },
    heading: {
      fontSize: theme.fonts.size['3.5xl'],
      fontWeight: theme.fonts.weight.regular,
    },
    subheading: {
      fontSize: theme.fonts.size['2xl'],
      fontWeight: theme.fonts.weight.regular,
    },
    body: {
      fontSize: theme.fonts.size['lg'],
      fontWeight: theme.fonts.weight.regular,
    },
    subtitle: {
      fontSize: theme.fonts.size['md'],
      fontWeight: theme.fonts.weight.regular,
    },
    caption: {
      fontSize: theme.fonts.size['xs'],
      fontWeight: theme.fonts.weight.regular,
    },
  },
  sm: {
    xlg: {
      fontSize: theme.fonts.size['3.5xl'],
      fontWeight: theme.fonts.weight.medium,
    },
    lg: {
      fontSize: theme.fonts.size['2xl'],
      fontWeight: theme.fonts.weight.medium,
    },
    md: {
      fontSize: theme.fonts.size['xl'],
      fontWeight: theme.fonts.weight.medium,
    },
    sm: {
      fontSize: theme.fonts.size.base,
      fontWeight: theme.fonts.weight.bold,
    },
    heading: {
      fontSize: theme.fonts.size['lg'],
      fontWeight: theme.fonts.weight.regular,
    },
    subheading: {
      fontSize: theme.fonts.size['md'],
      fontWeight: theme.fonts.weight.regular,
    },
    body: {
      fontSize: theme.fonts.size['sm'],
      fontWeight: theme.fonts.weight.regular,
    },
    subtitle: {
      fontSize: theme.fonts.size['md'],
      fontWeight: theme.fonts.weight.regular,
    },
    caption: {
      fontSize: theme.fonts.size['sm'],
      fontWeight: theme.fonts.weight.medium,
    },
  },
};

export const StyledTypography = styled.p<Props>`
  color: ${({ theme, color }) => color ?? theme.colors.text};
  line-height: auto;

  ${({ size = 'lg', variant = 'body' }: Props) => `
  font-size: ${styles[size][variant].fontSize};
  font-weight: ${styles[size][variant].fontWeight};
  `}
`;

export const Typography = ({
  as = 'p',
  children,
  ...props
}: Partial<Props>) => (
  <StyledTypography data-testid="typography" as={as} {...props}>
    {children}
  </StyledTypography>
);
