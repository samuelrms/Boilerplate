import { ComponentProps } from 'react';

export type Variant =
  | 'xlg'
  | 'lg'
  | 'md'
  | 'sm'
  | 'heading'
  | 'subheading'
  | 'body'
  | 'subtitle'
  | 'caption';

export type Size = 'lg' | 'sm';

export type ElementsVariants = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export type Props = {
  color?: string;
  variant?: Variant;
  size?: Size;
  as: ElementsVariants;
} & ComponentProps<'p'>;

export type MixinTheme = {
  fontSize: string;
  fontWeight: string | number;
};

export type MixinVariant = {
  xlg: MixinTheme;
  lg: MixinTheme;
  md: MixinTheme;
  sm: MixinTheme;
  heading: MixinTheme;
  subheading: MixinTheme;
  body: MixinTheme;
  subtitle: MixinTheme;
  caption: MixinTheme;
};

export type Mixin = {
  lg: MixinVariant;
  sm: MixinVariant;
};
