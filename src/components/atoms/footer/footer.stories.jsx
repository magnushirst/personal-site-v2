import React from 'react';
import Footer from './footer';

export default {
  title: 'Atoms/Footer',
  component: Footer,
  argTypes: {
    children: 'The child elements to display in the title',
  },
};

function Template() {
  return (<Footer />);
}

export const Default = Template.bind({});
