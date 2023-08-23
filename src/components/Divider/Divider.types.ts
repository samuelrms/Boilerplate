import { ComponentProps } from 'react'

export type Props = {
  /** Defines the width of the element in pixels. */
  width?: number
  /** Defines the height of the element in pixels. */
  height?: number
  /** Defines the background color of the element. Use a valid CSS color value. */
  bgColor?: string
  /** Defines the left margin of the element in rem. */
  ml?: number
  /** Defines the bottom margin of the element in rem. */
  mb?: number
  /** Defines the top margin of the element in rem. */
  mt?: number
  /** Defines the margin of the element in rem. */
  m?: number
  /** Defines the right margin of the element in rem. */
  mr?: number
} & ComponentProps<'hr'>
