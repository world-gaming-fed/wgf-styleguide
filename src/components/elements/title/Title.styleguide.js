'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Title',
    description: '',
    code: `
<hX className="Title Title--head">Head</hX>
<hX className="Title Title--subHead">Sub Head</hX>
<hX className="Title">Default</hX>`
  }

  render () {
    return (
      <div>
        <h1 className="Title Title--head">Head</h1>
        <h2 className="Title Title--subHead">Sub Head</h2>
        <h3 className="Title">Default</h3>
      </div>
    );
  }
}
