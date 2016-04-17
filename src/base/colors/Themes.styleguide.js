'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    category: 'Base',
    title: 'Theme',
    description: 'Two themes availables: "social" and "official"',
    code: `
<div className="th--social">...</div>
<div className="th--official">...</div>
<div className="th--official-alt">...</div>`
  }

  render () {
    return (
      <div>
        <div className="demoSpace th--social">
          <p>Paragraphe</p>
        </div>
        <div className="demoSpace th--official">
          <p>Paragraphe</p>
        </div>
        <div className="demoSpace th--official--alt">
          <p>Paragraphe</p>
        </div>
      </div>
    );
  }
}
