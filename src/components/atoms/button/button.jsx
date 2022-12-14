import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const primaryButtonColor = '#03fcfc';
const secondaryButtonColor = '#d47d1a';

const useSmallFontOrDefault = (props) => (props.buttonSize === 'small' ? '0.5em' : '1em');
const useSmallPaddingOrDefault = (props) => (props.buttonSize === 'small' ? '.25rem .5rem' : '.5rem 1rem');

const StyledButton = styled.button`
  font-size: ${(props) => (props.buttonSize === 'large' ? '1.2em' : useSmallFontOrDefault(props))};
  background: black;
  color: white;
  padding: ${(props) => (props.buttonSize === 'large' ? '1rem 3rem' : useSmallPaddingOrDefault(props))};
  box-shadow: ${(props) => (props.primary ? primaryButtonColor : secondaryButtonColor)} ${(props) => (props.buttonSize === 'small' ? '3px 3px 0' : '4px 4px 0')};
  transition: all 200ms ease;
  &:hover {
      cursor: pointer;
      transform: ${(props) => (props.buttonSize === 'small' ? 'translate(1px, 1px)' : 'translate(2px, 2px)')};
      -ms-transform: translate(2px, 2px);
      box-shadow: ${(props) => (props.primary ? primaryButtonColor : secondaryButtonColor)} ${(props) => (props.buttonSize === 'small' ? '1px 1px 0' : '2px 2px 0')};
  }
`;

export default function Button({
  primary, size, label, onClick,
}) {
  const buttonSize = size || 'medium';
  return (
    <StyledButton
      primary={primary}
      buttonSize={buttonSize}
      type="button"
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: () => {},
};
