import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import img from '../../../assets/chevron-right.svg';

const Chevron = styled.i`
  content: '';
  background-image: url(${img});
  background-size: .6em .6em;
  background-repeat: no-repeat;
  height: .6em;
  width: .6em;
  margin-left: .5em;
  display: inline-block;
`;

export default function DecoratedNavLink({ children, to }) {
  return (
    <NavLink reloadDocument to={to}>
      {children}
      <Chevron />
    </NavLink>
  );
}

DecoratedNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

DecoratedNavLink.defaultProps = {
  to: '/',
};
