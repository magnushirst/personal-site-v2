import React, { useState } from 'react';

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NestedNavigation } from "./nestedNavigation";

const HeaderWrapper = styled.div`
  padding: 0 2em 0 2em;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: white;
  color: rgb(81, 138, 176);
`
const SiteTitle = styled.h1`
  padding: 1em 0;
  font-weight: 900;
  font-size: 1.4rem;
  display: inline-block;
  vertical-align: top;
`
const LinkWrapper = styled.div`
  display: flex;
  margin-left: auto;
`
const BurgerButton = styled.button`
  height: 2em;
  width: 2em;
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  margin-bottom: 1.2em;
`
const CloseButton = styled.button`
  height: 2em;
  width: 2em;
  background-color: inherit;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  margin-bottom: 1.2em;
`
const NavigationWrapper = styled.div`
  z-index: 1;
  display: block;
  position: fixed;
  right: -40vw;
  top: 0;
  width: 40vw;
  max-width: 20em;
  background: white;
  height: 100vh;
  border-left: 1px solid #ccc;
  transition: all 400ms ease;
  padding: 1em 1em 1em 1em;
  &.menu-open {
    right: 0;
  }
`
const Nav = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`

export function Navigation () {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <HeaderWrapper>
                <SiteTitle>Magnus Hirst</SiteTitle>
                <LinkWrapper>
                    <BurgerButton onClick={() => setMenuOpen(!menuOpen)}>
                        <svg viewBox="0 0 100 80" width="20" height="20" fill="currentColor">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </BurgerButton>
                    <NavigationWrapper className={menuOpen ? 'menu-open' : ''}>
                        <CloseButton onClick={() => setMenuOpen(!menuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </CloseButton>
                        <Nav className={menuOpen ? 'menu-open' : ''}>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                                </li>
                            <li>
                                <NavLink to="/cv">CV</NavLink>
                            </li>
                            <NestedNavigation title={'Sandbox'}>
                                <ul>
                                    <li><NavLink to="/sandbox/1">Project 1</NavLink></li>
                                    <li><NavLink to="/sandbox/2">Project 2</NavLink></li>
                                    <li><NavLink to="/sandbox/3">Project 3</NavLink></li>
                                    <li><NavLink to="/sandbox/4">Project 4</NavLink></li>
                                </ul>
                                <ul>
                                    <li><NavLink to="/sandbox/5">Project 5</NavLink></li>
                                    <li><NavLink to="/sandbox/6">Project 6</NavLink></li>
                                    <li><NavLink to="/sandbox/7">Project 7</NavLink></li>
                                    <li><NavLink to="/sandbox/8">Project 8</NavLink></li>
                                </ul>
                            </NestedNavigation>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </Nav>
                    </NavigationWrapper>
                </LinkWrapper>
            </HeaderWrapper>
        </header>
    )
}


Navigation.propTypes = {};

Navigation.defaultProps = {};
