import { ComponentProps } from 'react';

export type ElementsVariants = 'div' | 'aside' | 'article' | 'form';

export type Props = {
  /** Defines the HTML element that will be rendered. It can be a valid HTML element or a React component. */
  as?: ElementsVariants;
  /** Defines the background color of the element. Use a valid CSS color value. */
  bgColor?: string;
  /** Defines the color of the element's border. Use a valid CSS color value. */
  borderColor?: string;
  /** Defines the border radius of the element in rem. */
  br?: number;
  /** Defines the style of the element's border, e.g. "solid" or "dotted". */
  borderStyle?: string;
  /** Sets the border width of the element in rem. */
  borderWidth?: number;
  /** Defines the padding of the element in rem. */
  p?: number;
  /** Defines the left padding of the element in rem. */
  pl?: number;
  /** Defines the right padding of the element in rem. */
  pr?: number;
  /** Defines the top padding of the element in rem. */
  pt?: number;
  /** Defines the bottom padding of the element in rem. */
  pb?: number;
  /** Defines the margin of the element in rem. */
  m?: number;
  /** Defines the left margin of the element in rem. */
  ml?: number;
  /** Defines the right margin of the element in rem. */
  mr?: number;
  /** Defines the top margin of the element in rem. */
  mt?: number;
  /** Defines the bottom margin of the element in rem. */
  mb?: number;
  /** Defines the spacing between child elements, if the element (in rem) is a container with flexbox or grid. */
  gap?: number;
  /** Defines the color of the text inside the element. Use a valid CSS color value. */
  color?: string;
} & ComponentProps<'div'>;
