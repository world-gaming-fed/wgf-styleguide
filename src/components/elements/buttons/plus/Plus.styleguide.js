'use strict';

import React from 'react';
import Plus from './Plus';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Plus',
    description: '',
    code: `<Plus [modifier="main"]/>`,
    exampleComponent: Plus
  }

  render () {
    return (
      <div>
        <div className="demoSpace th--social">
          <Plus />
          <Plus modifier="main"/>
        </div>
        <div className="demoSpace th--official">
          <Plus />
          <Plus loader={true} />
          <Plus modifier="main"/>
          <Plus modifier="main" loader={true} />
          <Plus modifier="main" icon="arrows_check"/>
        </div>
      </div>
    );
  }
}
