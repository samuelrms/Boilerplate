'use client';
import styled from '@emotion/styled';
import { Props } from './Stack.types';

export const CustomStack = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  text-transform: none;
  max-width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ br }) => br}rem;
  border-width: ${({ borderWidth }) => borderWidth}rem;
  border-color: ${({ borderColor }) => borderColor};
  border-style: ${({ borderStyle }) => borderStyle};
  padding: ${({ p }) => p}rem;
  padding-left: ${({ pl }) => pl}rem;
  padding-right: ${({ pr }) => pr}rem;
  padding-top: ${({ pt }) => pt}rem;
  padding-bottom: ${({ pb }) => pb}rem;
  margin: ${({ m }) => m}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  gap: ${({ gap }) => gap}rem;
  color: ${({ color }) => color};
`;

export const Stack = ({ ...props }: Props) => (
  <CustomStack data-testid="stack" {...props} />
);
