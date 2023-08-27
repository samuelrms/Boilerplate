import { Children } from '@/types/children';
import { ComponentProps } from 'react';

export type Props = {
  /**
   * Defines the width of the element.
   * @type {number | string}
   * @augments {number} width - The width in rem if a number is provided.
   * @augments {string} width - A string (e.g., "px", "%") for other units.
   * @default "100vw"
   */
  width: number | string;
  /**
   * Defines whether the navigation bar should hide on scroll.
   * @type {boolean}
   * @enum {boolean} true if the navigation bar should hide on scroll, false otherwise.
   * @default true
   */
  shouldHideOnScroll: boolean;
  /**
   * Defines the background color of the element.
   * @type {string}
   * @default "#F6F6F6"
   */
  bgColor: string;
  /**
   * Defines the color of the element's border.
   * @type {string}
   * @default "#D1D5DB"
   */
  borderColor: string;
  /**
   * Defines the position property of the navigation bar element.
   *  - The CSS position property for the navigation bar.
   *  - Accepts one of four valid CSS position property values: "sticky", "fixed", "absolute", or "relative".
   * @type {"sticky" | "fixed" | "absolute" | "relative"}
   *        - The type definition specifies that this property should be one of the four valid CSS position values.
   * @default "sticky"
   */
  position: 'sticky' | 'fixed' | 'absolute' | 'relative';
  /**
   * Defines the visibility of the navigation bar.
   * @type {boolean}
   * @enum {boolean} true - The navigation bar is visible, false - The navigation bar is hidden.
   * @default true
   */
  visible: boolean;
  /**
   * Defines the style of the element's border.
   * @type {string}
   */
  borderStyle: string;
  /**
   * Sets the border width of the element.
   * @type {number}
   */
  borderWidth: number;
  /**
   * Defines the padding of the element.
   * @type {number}
   */
  p: number;
  /**
   * Defines the left padding of the element.
   * @type {number}
   */
  pl: number;
  /**
   * Defines the right padding of the element.
   * @type {number}
   */
  pr: number;
  /**
   * Defines the top padding of the element.
   * @type {number}
   */
  pt: number;
  /**
   * Defines the bottom padding of the element.
   * @type {number}
   */
  pb: number;
  /**
   * Defines the margin of the element.
   * @type {number}
   */
  m: number;
  /**
   * Defines the left margin of the element.
   * @type {number}
   */
  ml: number;
  /**
   * Defines the right margin of the element.
   * @type {number}
   */
  mr: number;
  /**
   * Defines the top margin of the element.
   * @type {number}
   */
  mt: number;
  /**
   * Defines the bottom margin of the element.
   * @type {number}
   */
  mb: number;
  /**
   * Defines the spacing between child elements, if the element is a container with flexbox or grid.
   * @type {number}
   */
  gap: number;
  /**
   * Defines the transform property for the navigation bar element.
   * @param number - A valid CSS transform time value.
   * @default 0.3
   * @param {string} [transitionTime="0.3s"] - The time duration for the CSS transition effect. Please provide the value in seconds (e.g., "0.3").
   *        - Defaults to 0.3 (seconds) if no value is provided.
   */
  transitionTime: number;
} & Children &
  ComponentProps<'nav'>;
