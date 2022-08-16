import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  border: 3px solid ${(props) => props.theme.colors.altBase};
  display: inline-block;
  padding: 10px;
  position: relative;
  text-align: center;
  transition: background 600ms ease, color 600ms ease;
`;

const Wrapper = styled.div`
  & > input[type="radio"].toggle {
    display: none;
    & + label{
      cursor: pointer;
      min-width: 60px;
      &:hover{
        background: none;
        color: ${(props) => props.theme.colors.highlight};
      }
      &:after{
        background: ${(props) => props.theme.colors.highlight};
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
        width: 100%;
        z-index: -1;
      }
    }
    &.toggle-left + label {
      border-right: 0;
      &:after{
        left: 100%
      }
    }
    &.toggle-right + label{
      &:after{
        left: -100%;
      }
    }
    &:checked + label {
      cursor: default;
      color: #2A3D45;
      transition: color 200ms;
      &:after{
        left: 0;
      }
    }
  }
`;

export default function ToggleButton({ option1, option2 }) {
  return (
    <Wrapper>
      <input onClick={(e) => { e.target.checked = true; }} id={`toggle-${option1}`} className="toggle toggle-left" name="toggle" value="true" type="radio" checked />
      <StyledLabel htmlFor={`toggle-${option1}`}>{option1}</StyledLabel>
      {/* eslint-disable-next-line react/no-this-in-sfc */}
      <input onClick={(e) => { e.target.checked = true; }} id={`toggle-${option2}`} className="toggle toggle-right" name="toggle" value="false" type="radio" />
      <StyledLabel htmlFor={`toggle-${option2}`}>{option2}</StyledLabel>
    </Wrapper>
  );
}

ToggleButton.propTypes = {
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
};

ToggleButton.defaultProps = {
};
