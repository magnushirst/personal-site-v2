import styled, { keyframes } from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import img from '../../../assets/chevron-down.svg';

const Chevron = styled.i`
  transition: rotate 100ms ease;
  display: inline-block;
  content: ' ';
  background-image: url(${img});
  background-size: 1em 1em;
  background-repeat: no-repeat;
  height: 1em;
  width: 1em;
  position: fixed;
  margin-left: 1em;

  &.active{
    rotate: 180deg;
  }
`;
const expand = keyframes`
  from { max-height: 0; }
  to { max-height: 100vh; }
`;
const SubNav = styled.div`
  position: relative;
  justify-content: left;
  flex-wrap: wrap;
  gap: 1.5em;
  overflow: hidden;
  border-left: 1px solid #DDC9B4;
  display: none;
  &.active {
    display: flex;
    padding: 0.3em 0 0.3em 0.5em;
    margin: 1em 0 0 1em;
    animation: ${expand} 1s forwards;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }
`;

const Button = styled.button`
  border: none;
  background-color: unset;
  color: inherit;
  font-size: inherit;
  padding: unset;
  cursor: pointer;
`;

export default function NestedNavigation({ title, children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <li>
      <Button type="button" onClick={() => setOpen(!isOpen)}>{ title }</Button>
      <Chevron className={isOpen ? 'active' : ''} />
      <SubNav className={isOpen ? 'active' : ''} aria-hidden={!isOpen}>
        { children }
      </SubNav>
    </li>
  );
}

NestedNavigation.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NestedNavigation.defaultProps = {
  title: 'Title',
};
