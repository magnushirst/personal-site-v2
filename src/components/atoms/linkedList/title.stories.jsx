import React from 'react';
import PropTypes from 'prop-types';
import LinkedList from './linkedList';

export default {
  title: 'Atoms/Linked List',
  component: LinkedList,
  argTypes: {
    offset: 0,
    children: 'The child elements to display in the List',
  },
};

function Template({ offset, children }) {
  return (
    <LinkedList offset={offset}>
      {children}
    </LinkedList>
  );
}

export const Default = Template.bind({});
Default.args = {
  offset: '0',
  children: [
    'Point 1',
    'Point 2',
    'Point 3',
  ],
};

Template.propTypes = {
  offset: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Template.defaultProps = {
  offset: '0',
};
