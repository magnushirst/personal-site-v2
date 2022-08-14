import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h1`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  vertical-align: top;
  margin-bottom: 1em;
  display: block;
`;

export default function Title({ children }) {
  return (
    <StyledH2>
      {children}
    </StyledH2>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
};
