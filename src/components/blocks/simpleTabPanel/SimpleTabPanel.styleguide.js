'use strict';

import React from 'react';
import SimpleTabPanel from './SimpleTabPanel';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'SimpleTabPanel',
    description: 'Label component, initialy created for plateforme label.',
    code: `
<SimpleTabPanel tabs={[ 'Content 1','Content 2','Content 3' ]}>
  <ANY>Content 1</ANY>
  <ANY>Content 2</ANY>
  <ANY>Content 3</ANY>
</SimpleTabPanel>
    `,
    exampleComponent: SimpleTabPanel
  }

  render () {
    return (
      <div>
        <div className="th--official">
          <SimpleTabPanel tabs={[ 'Content 1', 'Content 2', 'Content 3' ]}>
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
          </SimpleTabPanel>
        </div>
        <div className="th--social">
          <SimpleTabPanel tabs={[ 'Content 1', 'Content 2', 'Content 3' ]}>
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
          </SimpleTabPanel>
        </div>
        <div className="th--official--hue1">
          <SimpleTabPanel tabs={[ 'Content 1', 'Content 2', 'Content 3' ]}>
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
          </SimpleTabPanel>
        </div>
      </div>
    );
  }
}
