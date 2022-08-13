import styled from 'styled-components';
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
const SubNav = styled.div`
  display: flex;
  position: relative;
  justify-content: left;
  flex-wrap: wrap;
  gap: 1.5em;
  max-height: 0;
  overflow: hidden;
  transition: all .3s;
  padding-left: 0.5em;
  &.active {
    margin-top: 1em;
    max-height: 100vh;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }
`;
export default function NestedNavigation({ title, children }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <li>
      <a href="#" onClick={() => setOpen(!isOpen)}>{ title }</a>
      <Chevron className={isOpen ? 'active' : ''} />
      <SubNav className={isOpen ? 'active' : ''}>
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
