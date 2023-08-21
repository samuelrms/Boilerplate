import { ComponentProps } from 'react'

export type Props = {
  width?: number
  height?: number
  bgColor?: string
  marginLeft?: number
  marginBottom?: number
} & ComponentProps<'hr'>
