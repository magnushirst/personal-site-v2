import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Chevron = styled.i`
  content: '';
  background-image: url('/img/chevron-right.svg');
  background-size: .6em .6em;
  background-repeat: no-repeat;
  height: .6em;
  width: .6em;
  margin-left: .5em;
  display: inline-block;
`;

export default function DecoratedNavLink({ children, to }) {
  return (
    <a href={to}>
      {children}
      <Chevron />
    </a>
  );
}

DecoratedNavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

DecoratedNavLink.defaultProps = {
  to: '/',
};
