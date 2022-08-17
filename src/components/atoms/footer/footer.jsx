import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.altBase};
  height: 4em;
  display: flex;
  padding-left: 2em;
  align-items: center;
  margin-top: 2em;
  color: ${(props) => props.theme.colors.base};
  font-weight: 550;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <span>
        <FormattedMessage id="site.footer.copyright" />
      </span>
    </StyledFooter>
  );
}
