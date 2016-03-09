'use strict';

import React from 'react';
import Section from './Section';

export default class extends React.Component {
  static styleguide = {
    category: 'Block',
    title: 'Section',
    description: 'Main section',
    code: `<Section title="Put the title here" modifier="Section--alt|Section--alt2">[HTML content]</Section>`,
    className: 'app-body get-some-space',
    // Component to use for generating additional examples
    exampleComponent: Section,
    // Array of additional example tabs
    examples: [ {
      tabTitle: 'Default',
      props: {
        title: 'Title example',
        children: '[HTML content]'
      }
    }, {
      tabTitle: 'alt',
      props: {
        title: 'Title example',
        modifier: 'Section--alt',
        children: '[HTML content]'
      }
    }, {
      tabTitle: 'alt2',
      props: {
        title: 'Title example',
        modifier: 'Section--alt2',
        children: '[HTML content]'
      }
    } ]
  }
}
