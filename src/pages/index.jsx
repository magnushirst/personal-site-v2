import React from 'react';

import { FormattedMessage } from 'react-intl';
import Section from '../components/molecules/section/section';
import Title from '../components/atoms/title/title';
import WideSection from '../components/molecules/wideSection/wideSection';

export default function Index() {
  return (
    <>
      <Section align="left">
        <Title>
          <FormattedMessage id="sample.header" />
        </Title>
        <p>
          <FormattedMessage id="sample.text.1" />
        </p>
        <p>
          <FormattedMessage id="sample.text.2" />
        </p>
      </Section>
      <WideSection align="left">
        <Title>
          <FormattedMessage id="sample.header" />
        </Title>
        <p>
          <FormattedMessage id="sample.text.1" />
        </p>
        <p>
          <FormattedMessage id="sample.text.2" />
        </p>
      </WideSection>
      <Section align="left">
        <Title>
          <FormattedMessage id="sample.header" />
        </Title>
        <p>
          <FormattedMessage id="sample.text.1" />
        </p>
        <p>
          <FormattedMessage id="sample.text.2" />
        </p>
      </Section>
    </>
  );
}
