import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import Section from '../../molecules/section/section';
import WideSection from '../../molecules/wideSection/wideSection';

export default {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    children: 'The child elements to display in the title',
  },
};

function Template({ children }) {
  return (
    <>
      <Title>{children}</Title>
      <Section>
        <Title>{children}</Title>
      </Section>
      <WideSection>
        <Title>{children}</Title>
      </WideSection>
    </>
  );
}

export const Default = Template.bind({});
Default.args = {
  children: ['Some Cool Title'],
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};
