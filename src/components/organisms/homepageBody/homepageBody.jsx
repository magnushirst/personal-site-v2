import { FormattedMessage } from 'react-intl';
import React from 'react';
import Section from '../../molecules/section/section';
import Title from '../../atoms/title/title';
import WideSection from '../../molecules/wideSection/wideSection';

export default function HomepageBody() {
  return (
    <article>
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
    </article>
  );
}
