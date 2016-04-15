'use strict';

import React from 'react';
import BottomBar from './BottomBar';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'BottomBar',
    description: '',
    code: `<BottomBar>[HTML]</BottomBar>`,
    exampleComponent: BottomBar
  }

  render () {
    return (
      <BottomBar>
        <p>Test</p>
      </BottomBar>
    );
  }
}
