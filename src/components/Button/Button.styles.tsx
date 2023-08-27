'use client';
import styled from '@emotion/styled';
import { Mixin, Props, SizeMixin } from './Button.types';
import { theme } from '@/base_styles/theme';

const styles: Mixin = {
  primary: {
    filled: {
      background: theme.colors.button.primary.filled.background,
      color: theme.colors.button.primary.filled.color,
      hoverBackground: theme.colors.button.primary.filled.hoverBackground,
      hoverColor: theme.colors.button.primary.filled.hoverColor,
      activeBackground: theme.colors.button.primary.filled.activeBackground,
    },
    outlined: {
      background: theme.colors.button.primary.outlined.background,
      color: theme.colors.button.primary.outlined.color,
      hoverBackground: theme.colors.button.primary.outlined.hoverBackground,
      hoverColor: theme.colors.button.primary.outlined.hoverColor,
      activeBackground: theme.colors.button.primary.outlined.activeBackground,
    },
  },
  secondary: {
    filled: {
      background: theme.colors.button.secondary.filled.background,
      color: theme.colors.button.secondary.filled.color,
      hoverBackground: theme.colors.button.secondary.filled.hoverBackground,
      hoverColor: theme.colors.button.secondary.filled.hoverColor,
      activeBackground: theme.colors.button.secondary.filled.activeBackground,
    },
    outlined: {
      background: theme.colors.button.secondary.outlined.background,
      color: theme.colors.button.secondary.outlined.color,
      hoverBackground: theme.colors.button.secondary.outlined.hoverBackground,
      hoverColor: theme.colors.button.secondary.outlined.hoverColor,
      activeBackground: theme.colors.button.secondary.outlined.activeBackground,
    },
  },
};

const sizes: SizeMixin = {
  sm: {
    verticalPadding: theme.spacing[3],
    horizontalPadding: theme.spacing[11],
    fontSize: theme.fonts.size.base,
  },
  md: {
    verticalPadding: theme.spacing[4],
    horizontalPadding: theme.spacing[18],
    fontSize: theme.fonts.size.xl,
  },
};

export const StyledButton = styled.button<Props>`
  border-radius: 48px;
  cursor: pointer;
  line-height: 24.38px;
  font-weight: 700;
  transition: 0.5s ease;

  ${({ color = 'primary', variant = 'filled', size = 'md' }) => `
    background: ${
      variant === 'filled' ? styles[color][variant].background : 'transparent'
    };
    box-shadow: ${
      variant === 'outlined'
        ? `inset 0px 0px 0px 2px ${styles[color][variant].background}`
        : 'none'
    };
    color: ${styles[color][variant].color};
    padding: ${`${sizes[size].verticalPadding} ${sizes[size].horizontalPadding}`};
    font-size: ${sizes[size].fontSize};

    &:hover {
      background: ${styles[color][variant].hoverBackground};
      box-shadow: none;
      color: ${styles[color][variant].hoverColor};
    }

    &:active {
      background: ${styles[color][variant].activeBackground};
      box-shadow: none;
    }
  `}
`;

export const Button = ({ children, ...props }: Props) => (
  <StyledButton {...props}>{children}</StyledButton>
);
