import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  background: #7A6C5D;
  height: 4em;
  display: flex;
  padding-left: 2em;
  align-items: center;
  margin-top: 2em;
  color: #DDC9B4;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>Copyright© 2022</span>
    </StyledFooter>
  );
}
