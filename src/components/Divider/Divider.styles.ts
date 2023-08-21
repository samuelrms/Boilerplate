'use client'

import styled from '@emotion/styled'
import { Props } from './Divider.types'

export const Divider = styled.hr<Props>`
  width: ${({ width }) => `${width ? width + 'px' : '100%'}`};
  height: ${({ height }) => height ?? 0}px;
  background-color: ${({ bgColor, theme }) => bgColor ?? theme.divider};
  margin-left: ${({ ml }) => ml ?? 0}px;
  margin-bottom: ${({ mb }) => mb ?? 0}px;
  margin-top: ${({ mt }) => mt ?? 0}px;
  border: none;
`
