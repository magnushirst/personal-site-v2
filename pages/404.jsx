import React from 'react';

import styled from 'styled-components';
import Section from '../src/components/molecules/section/section';
import Title from '../src/components/atoms/title/title';
import img from '../public/img/siren.gif';

const LinkWrapper = styled.div`
  border: 4px solid #2A3D45;
  padding: 0.7em;
  margin-top: 1em;
  display: flex;
  &:hover{
    background-color: #C17C74;
  }
`;
const Chevron = styled.i`
  width: 1em;
  height: 1em;
  background-image: url('/img/chevron-right.svg');
  background-size: 1em 1em;
  content: '';
  background-repeat: no-repeat;
  display: block;
  margin-left: 1em;
`;
const Beacon = styled.i`
  width: 4em;
  height: 4em;
  background-image: url('/img/siren.gif');
  background-size: 4em 4em;
  content: '';
  background-repeat: no-repeat;
  display: block;
  margin-bottom: 1em;
`;

export default function NotFound() {
  return (
    <Section align="center">
      <Beacon />
      <Title>Page Not Found</Title>
      <p>
        The page you are looking for could not be found
      </p>
      <a to="/">
        <LinkWrapper>
          Click here to go back
          <Chevron />
        </LinkWrapper>
      </a>

    </Section>
  );
}
