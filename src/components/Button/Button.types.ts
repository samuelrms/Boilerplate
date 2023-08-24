import { ComponentProps } from 'react';

/**
 * Represents possible button colors.
 * @argument "primary" Represents the primary button color.
 * @argument "secondary" Represents the secondary button color.
 */
export type Colors = 'primary' | 'secondary';

/**
 * Represents possible button variants.
 * @argument "filled" Represents a filled button variant.
 * @argument "outlined" Represents an outlined button variant.
 */
export type Variants = 'filled' | 'outlined';

/**
 * Represents possible button sizes.
 * @argument "sm" Represents a small button size.
 * @argument "md" Represents a medium button size.
 */
export type Size = 'sm' | 'md';

export type Props = {
  /**@property Specifies the button color.
   * @default "primary"
   * @enum "primary" "secondary"
   */
  color?: Colors;
  /**
   * @property Specifies the button variant.
   * @default "filled"
   * @enum "filled" "outlined"
   */
  variant?: Variants;
  /**
   * @property Specifies the button size.
   * @default "md"
   * @enum "sm" "md"
   */
  size?: Size;
} & ComponentProps<'button'>;

export type MixinTheme = {
  /**@property Background color.
   * @default "transparent"
   * @type {string}
   */
  background: string;
  /**@property Text color.
   * @default "#000"
   * @type {string}
   */
  color: string;
  /**@property Background color on hover.
   * @default "transparent"
   * @type {string}
   */
  hoverBackground: string;
  /**@property Text color on hover.
   * @default "#000"
   * @type {string}
   */
  hoverColor: string;
  /**@property Background color when active.
   * @default "transparent"
   * @type {string}
   */
  activeBackground: string;
};

export type MixinVariant = {
  /**@property Theme for filled button variant.
   * @type {MixinTheme}
   */
  filled: MixinTheme;
  /**@property Theme for outlined button variant.
   * @type {MixinTheme}
   */
  outlined: MixinTheme;
};

/**
 * Defines a mixin for primary and secondary button colors.
 * @property {MixinVariant} primary Mixin for primary color.
 * @property {MixinVariant} secondary Mixin for secondary color.
 */
export type Mixin = {
  primary: MixinVariant;
  secondary: MixinVariant;
};

/**
 * Defines styles for different button sizes.
 * @property {string} verticalPadding Vertical padding for the button.
 * @property {string} horizontalPadding Horizontal padding for the button.
 * @property {string} fontSize Font size for the button.
 */
export type SizeStyles = {
  verticalPadding: string;
  horizontalPadding: string;
  fontSize: string;
};

/**
 * Defines a mixin for different button sizes.
 * @argument "sm" Represents a small button size.
 * @argument "md" Represents a medium button size.
 */
export type SizeMixin = { [key in Size]: SizeStyles };
