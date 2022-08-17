import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-weight: 900;
  font-size: 2.2rem;
  vertical-align: top;
  margin-bottom: .5em;
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
  /**
   * The children of the element which are rendered within the Title
   */
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
};
