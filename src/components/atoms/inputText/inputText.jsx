import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: ${(props) => (props.buttonSize === 'large' ? '1rem 3rem' : props.buttonSize === 'small' ? '.25rem .5rem' : '.5rem 1rem')};
  box-shadow: #CCC 4px 4px 0;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export default function InputText({ buttonSize, label }) {
  return (
    <StyledInput
      type="text"
      placeholder={label}
      buttonSize={buttonSize}
    />
  );
}

InputText.propTypes = {
  buttonSize: PropTypes.string,
  label: PropTypes.string,
};

InputText.defaultProps = {
  buttonSize: 'medium',
  label: '',
};
