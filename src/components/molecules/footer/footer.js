import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100vw;
  background: black;
  height: 4em;
  display: flex;
  padding-left: 2em;
  align-items: center;
  margin-top: 1em;
`

export const Footer = () => {
    return (
        <StyledFooter>
            <span>Copyright © 2022</span>
        </StyledFooter>
    );
};
