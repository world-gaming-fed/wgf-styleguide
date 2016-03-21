'use strict';

import React from 'react/addons';
var ContentNav = require('./ContentNav')(React);

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'ContentNav',
    description: 'Label component, initialy created for plateforme label.',
    code: `
<ContentNav>
  <span>Inline element</span>
  <Link>Link</Link>
  <a href="">simple href link</a>
</ContentNav>
    `,
    exampleComponent: ContentNav
  }

  render () {
    return (
      <div>
        <div className="th--official">
          <ContentNav>
            <span>Dashboard</span>
            <span>Events</span>
            <span>Players</span>
          </ContentNav>
        </div>
        <br/>
        <div className="th--social">
          <ContentNav>
            <span>Dashboard</span>
            <span>Events</span>
            <span>Players</span>
          </ContentNav>
        </div>
      </div>
    );
  }
}
