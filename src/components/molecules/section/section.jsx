import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  line-height: 1rem;
  padding: 2rem 2rem;
  max-width: 60em;
  width: 90vw;
  color: #333;
  text-align: ${(props) => props.align};
  background: ${(props) => props.theme.colors.section};
  margin: 2em auto 0;
  box-shadow: -5px 5px 5px -4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Section({ align, children }) {
  return (
    <StyledSection align={align}>
      { children }
    </StyledSection>
  );
}

Section.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  align: 'left',
};
