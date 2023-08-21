import { styled } from 'styled-components'
import { Props } from './Divider.types'

export const Divider = styled.hr<Props>`
  width: ${({ width }) => `${width ? width + 'px' : '100%'}`};
  height: ${({ height }) => height ?? 0}px;
  background-color: ${({ bgColor, theme }) => bgColor ?? theme.colors.divider};
  margin-left: ${({ marginLeft }) => marginLeft ?? 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  margin-top: 0;
  border: none;
`
