import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  position: relative;
  display: block;

  & > div {
    position: relative;
    padding-bottom: 2em;
  }
  & > div:not(:last-child) > li:after{
    content: '';
    background-color: ${(props) => props.theme.colors.highlight};
    width: .2em;
    height: 100%;
    position: absolute;
    left: .7em;
    top: 1.1em;
  }
`;

const StyledListItem = styled.li`
  margin-left: 4em;
  display: flex;
  justify-content: left;
  &:before {
    content: '';
    background-color: ${(props) => props.theme.colors.highlight};
    border-radius: 100%;
    height: 1.6em;
    width: 1.6em;
    position: absolute;
    left: 0;
    top: 1.1em;
  }
`;

export default function LinkedList({ children }) {
  return (
    <StyledList>
      {children.map((child, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i}>
          <StyledListItem>{ child }</StyledListItem>
          {' '}
        </div>
      ))}
    </StyledList>
  );
}

LinkedList.propTypes = {
  children: PropTypes.node.isRequired,
};

LinkedList.defaultProps = {
};
