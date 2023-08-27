'use client';
import styled from '@emotion/styled';
import { Props } from './NavBar.types';
import { useCallback, useEffect, useState } from 'react';

export const NavBarStyles = styled.nav<Partial<Props>>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  right: 0;
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}rem` : width ?? '100vw'};
  background: ${({ bgColor, theme }) => bgColor ?? theme.colors.navBar};
  padding: ${({ p }) => p ?? '1'}rem;
  padding-left: ${({ pl }) => pl}rem;
  padding-right: ${({ pr }) => pr}rem;
  padding-top: ${({ pt }) => pt}rem;
  padding-bottom: ${({ pb }) => pb}rem;
  margin: ${({ m }) => m ?? '0'}rem;
  margin-left: ${({ ml }) => ml}rem;
  margin-right: ${({ mr }) => mr}rem;
  margin-top: ${({ mt }) => mt}rem;
  margin-bottom: ${({ mb }) => mb}rem;
  gap: ${({ gap }) => gap}rem;
  /* transition: transform 0.3s; */
  transition: ${({ transitionTime }) => transitionTime ?? '0.3'}s;
  transform: ${({ visible }) => `translateY(${visible ? '0' : '-100%'})`};
`;

export const NavBar = ({
  shouldHideOnScroll,
  position = 'absolute',
  children,
  ...props
}: Partial<Props>) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (shouldHideOnScroll) {
      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, shouldHideOnScroll]);

  useEffect(() => {
    if (shouldHideOnScroll) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (shouldHideOnScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll, shouldHideOnScroll]);

  return (
    <NavBarStyles
      position={shouldHideOnScroll ? 'sticky' : position}
      visible={visible}
      data-testid="nav-bar"
      {...props}
    >
      {children}
    </NavBarStyles>
  );
};
