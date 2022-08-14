import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
  line-height: 1rem;
  color: #333;
  text-align: ${(props) => props.align};
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
`;

const ContentWrapper = styled.div`
  max-width: 60em;
  width: 90vw;
  margin: 0 auto;
  padding: 2rem 2rem;
`;

export default function WideSection({ align, children }) {
  return (
    <StyledSection align={align}>
      <ContentWrapper>
        { children }
      </ContentWrapper>
    </StyledSection>
  );
}

WideSection.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
};

WideSection.defaultProps = {
  align: 'left',
};
