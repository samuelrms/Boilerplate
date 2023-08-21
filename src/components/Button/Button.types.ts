import { ComponentProps } from 'react'

export type Colors = 'primary' | 'secondary'

export type Variants = 'filled' | 'outlined'

export type Size = 'sm' | 'md'

export type Props = {
  color?: Colors
  variant?: Variants
  size?: Size
} & ComponentProps<'button'>

export type MixinTheme = {
  background: string
  color: string
  hoverBackground: string
  hoverColor: string
  activeBackground: string
}

export type MixinVariant = {
  filled: MixinTheme
  outlined: MixinTheme
}

export type Mixin = {
  primary: MixinVariant
  secondary: MixinVariant
}

export type SizeStyles = {
  verticalPadding: string
  horizontalPadding: string
  fontSize: string
}

export type SizeMixin = { [key in Size]: SizeStyles }
