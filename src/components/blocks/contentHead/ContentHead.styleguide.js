'use strict';

import React from 'react';
import ContentHead from './ContentHead';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'ContentHead',
    description: '',
    code: `<ContentHead>[HTML]</ContentHead>`,
    exampleComponent: ContentHead
  }

  render () {
    return (
      <ContentHead>
        <p>Test</p>
      </ContentHead>
    );
  }
}
