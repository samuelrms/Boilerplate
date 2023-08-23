'use client';

import styled from '@emotion/styled';
import { Props } from './Divider.types';

export const CustomDivider = styled.hr<Props>`
  width: ${({ width }) => `${width ? width + 'px' : '100%'}`};
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor, theme }) => bgColor ?? theme.divider};
  margin: ${({ m }) => m}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  margin-top: ${({ mt }) => mt}rem;
  border: none;
`;

export const Divider = ({ ...props }: Props) => {
  return <CustomDivider data-testid="divider" {...props} />;
};
