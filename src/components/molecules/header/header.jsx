import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import NestedNavigation from '../nestedNavigation/nestedNavigation';
import DecoratedNavLink from '../../atoms/decoratedNavLink/decoratedNavLink';
import OutsideClick from '../../../hooks/outsideClick/outsideClick';

const HeaderWrapper = styled.div`
  padding: 0 2em 0 2em;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #2A3D45;
  color: #DDC9B4;
`;
const SiteTitle = styled.h1`
  padding: 1em 0;
  font-weight: 900;
  font-size: 1.4rem;
  display: inline-block;
  vertical-align: top;
`;
const LinkWrapper = styled.div`
  display: flex;
  margin-left: auto;
  font-size: 1.2rem;
`;
const BurgerButton = styled.button`
  height: 2em;
  width: 2em;
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  margin-bottom: 1.2em;
`;
const CloseButton = styled.button`
  height: 2em;
  width: 2em;
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  margin-bottom: 1.2em;
`;
const NavigationWrapper = styled.div`
  z-index: 1;
  display: block;
  position: fixed;
  right: -80vw;
  top: 0;
  width: 80vw;
  max-width: 20em;
  background-color: #2A3D45;
  height: 100vh;
  border-left: 4px solid #C17C74;
  transition: all 400ms ease;
  padding: 1em 1em 1em 1em;

  &.menu-open {
    right: 0;
  }
`;
const Nav = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const boxRef = useRef(null);
  const [boxOutsideClick, setBoxOutsideClick] = OutsideClick(boxRef);

  useEffect(() => {
    if (boxOutsideClick) {
      setMenuOpen(false);
    }
  }, [boxOutsideClick]);

  useEffect(() => {
    if (menuOpen) {
      setBoxOutsideClick(false);
    }
  }, [menuOpen]);

  return (
    <header>
      <HeaderWrapper>
        <a href="/">
          <SiteTitle>
            <FormattedMessage id="site.header.title" />
          </SiteTitle>
        </a>
        <LinkWrapper>
          <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 100 80" width="20" height="20" fill="#DDC9B4">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          </BurgerButton>
          <NavigationWrapper ref={boxRef} className={menuOpen ? 'menu-open' : ''}>
            <CloseButton onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#DDC9B4"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                />
              </svg>
            </CloseButton>
            <Nav className={menuOpen ? 'menu-open' : ''}>
              <li>
                <DecoratedNavLink to="/" exac="true">
                  <FormattedMessage id="site.header.nav.home" />
                </DecoratedNavLink>
              </li>
              <li>
                <DecoratedNavLink to="/cv">
                  <FormattedMessage id="site.header.nav.cv" />
                </DecoratedNavLink>
              </li>
              <NestedNavigation title="site.header.nav.sandbox">
                <ul>
                  <li><DecoratedNavLink to="/sandbox/1">Project 1</DecoratedNavLink></li>
                  <li><DecoratedNavLink to="/sandbox/2">Project 2</DecoratedNavLink></li>
                  <li><DecoratedNavLink to="/sandbox/3">Project 3</DecoratedNavLink></li>
                  <li><DecoratedNavLink to="/sandbox/4">Project 4</DecoratedNavLink></li>
                </ul>
                <ul>
                  <li><DecoratedNavLink to="/sandbox/5">Project 5</DecoratedNavLink></li>
                  <li><DecoratedNavLink to="/sandbox/6">Project 6</DecoratedNavLink></li>
                  <li><DecoratedNavLink to="/sandbox/7">Project 7</DecoratedNavLink></li>
                  <li><DecoratedNavLink to="/sandbox/8">Project 8</DecoratedNavLink></li>
                </ul>
              </NestedNavigation>
              <li>
                <DecoratedNavLink to="/contact">
                  <FormattedMessage id="site.header.nav.contact" />
                </DecoratedNavLink>
              </li>
            </Nav>
          </NavigationWrapper>
        </LinkWrapper>
      </HeaderWrapper>
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {};
