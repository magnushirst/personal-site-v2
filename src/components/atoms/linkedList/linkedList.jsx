import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  position: relative;
  display: block;

  & > li {
    position: relative;
    padding-bottom: 2em;
  }
  & > li:not(:last-child) > div:after{
    content: '';
    background-color: ${(props) => props.theme.colors.highlight};
    width: .2em;
    height: 100%;
    position: absolute;
    left: 1.7em;
    top: ${(props) => props.offset};
  }
`;

const StyledItem = styled.div`
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
    left: 1em;
    top: ${(props) => props.offset};
  }
`;

export default function LinkedList({ offset, children }) {
  return (
    <StyledList offset={offset}>
      {children.map((child, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={i}>
          <StyledItem offset={offset}>{ child }</StyledItem>
          {' '}
        </li>
      ))}
    </StyledList>
  );
}

LinkedList.propTypes = {
  /**
   * The offset of the bubble to the list item (1em, 2px)
   */
  offset: PropTypes.string,
  /**
   * The children of the element which are rendered within the SecondaryTitle
   */
  children: PropTypes.node.isRequired,
};

LinkedList.defaultProps = {
  offset: '0',
};
