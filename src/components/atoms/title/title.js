
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2= styled.h1`
  font-weight: 900;
  font-size: 32px;
  line-height: 1;
  margin: 0 0 4px;
  display: inline-block;
  vertical-align: top;
`

export const Title = ({ ...props }) => {
    return (
        <StyledH2 {...props}>
            {props.children}
        </StyledH2>
    );
};

Title.propTypes = {
};

Title.defaultProps = {
};
