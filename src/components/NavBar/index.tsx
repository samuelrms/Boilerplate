'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Children } from '@/types/children';

type NavBarProps = {
  shouldHideOnScroll?: boolean;
  position?: 'sticky' | 'fixed' | 'absolute' | 'relative';
} & Children;

const navBarStyles = (isVisible: boolean, position: string) => css`
  position: ${position};
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  background-color: lightgray;
  padding: 10px;
  transition: transform 0.3s;
  transform: translateY(${isVisible ? '0' : '-100%'});
`;

const StyledNavBar = styled.div<{ isVisible: boolean; position: string }>`
  ${(props) => navBarStyles(props.isVisible, props.position)}
`;

const NavBar: React.FC<NavBarProps> = ({
  shouldHideOnScroll,
  position = 'absolute',
  children,
}) => {
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
    <StyledNavBar
      isVisible={visible}
      position={shouldHideOnScroll ? 'sticky' : position}
    >
      {children}
    </StyledNavBar>
  );
};

export default NavBar;
