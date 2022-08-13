import React from 'react';
import {NavLink} from "react-router-dom";
import img from '../../../assets/chevron-right.svg';
import styled from "styled-components";

const Chevron = styled.i`
  content: '';
  background-image: url(${img});
  background-size: .6em .6em;
  background-repeat: no-repeat;
  height: .6em;
  width: .6em;
  margin-left: .5em;
  display: inline-block;
`

export const DecoratedNavLink = ({children, ...props }) => {
    return (
        <>
            <NavLink {...props}>
                {children}
                <Chevron/>
            </NavLink>
        </>
    );
};

DecoratedNavLink.propTypes = {
};

DecoratedNavLink.defaultProps = {
};
