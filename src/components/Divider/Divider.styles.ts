'use client'

import styled from '@emotion/styled'
import { Props } from './Divider.types'

export const Divider = styled.hr<Props>`
  width: ${({ width }) => `${width ? width + 'px' : '100%'}`};
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor, theme }) => bgColor ?? theme.divider};
  margin: ${({ m }) => m ?? 0}rem;
  margin-left: ${({ ml }) => ml ?? 0}rem;
  margin-right: ${({ mr }) => mr ?? 0}rem;
  margin-bottom: ${({ mb }) => mb ?? 0}rem;
  margin-top: ${({ mt }) => mt ?? 0}rem;
  border: none;
`
