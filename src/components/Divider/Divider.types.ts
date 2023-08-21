import { ComponentProps } from 'react'

export type Props = {
  width?: number
  height?: number
  bgColor?: string
  ml?: number
  mb?: number
  mt?: number
} & ComponentProps<'hr'>
