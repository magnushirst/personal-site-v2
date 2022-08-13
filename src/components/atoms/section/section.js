import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledSection = styled.section`
  line-height: 1rem;
  padding: 2rem 2rem;
  max-width: 80vw;
  width: 70%;
  color: #333;
  text-align: ${props => props.align};
  background: white;
  margin: 2em auto 0;
  box-shadow: 1px 1px 8px 2px black;
`

export const Section = ({ align, ...props }) => {
    return (
        <StyledSection align={align} {...props}>
        </StyledSection>
    );
};

Section.propTypes = {
    align: PropTypes.string
};

Section.defaultProps = {
    align: 'left'
};
