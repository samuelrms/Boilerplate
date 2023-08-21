'use client'
import styled from '@emotion/styled'
import { Mixin, Props, SizeMixin } from './Button.types'
import { theme } from '@/base_styles/theme'

const styles: Mixin = {
  primary: {
    filled: {
      background: theme.button.primary.filled.background,
      color: theme.button.primary.filled.color,
      hoverBackground: theme.button.primary.filled.hoverBackground,
      hoverColor: theme.button.primary.filled.hoverColor,
      activeBackground: theme.button.primary.filled.activeBackground,
    },
    outlined: {
      background: theme.button.primary.outlined.background,
      color: theme.button.primary.outlined.color,
      hoverBackground: theme.button.primary.outlined.hoverBackground,
      hoverColor: theme.button.primary.outlined.hoverColor,
      activeBackground: theme.button.primary.outlined.activeBackground,
    },
  },
  secondary: {
    filled: {
      background: theme.button.secondary.filled.background,
      color: theme.button.secondary.filled.color,
      hoverBackground: theme.button.secondary.filled.hoverBackground,
      hoverColor: theme.button.secondary.filled.hoverColor,
      activeBackground: theme.button.secondary.filled.activeBackground,
    },
    outlined: {
      background: theme.button.secondary.outlined.background,
      color: theme.button.secondary.outlined.color,
      hoverBackground: theme.button.secondary.outlined.hoverBackground,
      hoverColor: theme.button.secondary.outlined.hoverColor,
      activeBackground: theme.button.secondary.outlined.activeBackground,
    },
  },
}

const sizes: SizeMixin = {
  sm: {
    verticalPadding: theme.spacing[3],
    horizontalPadding: theme.spacing[11],
    fontSize: theme.size.base,
  },
  md: {
    verticalPadding: theme.spacing[4],
    horizontalPadding: theme.spacing[18],
    fontSize: theme.size.xl,
  },
}

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
`

export const Button = ({ children, ...props }: Props) => (
  <StyledButton {...props}>{children}</StyledButton>
)
