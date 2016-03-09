'use strict';

import React from 'react';
import Label from './Label';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Label',
    description: 'Label component, initialy created for plateforme label.',
    code: `<Label>Any string</Label>`,
    exampleComponent: Label
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <Label>ps4</Label>
        &nbsp;
        <Label>One</Label>
        &nbsp;
        <Label>Wonderswan colors</Label>
      </div>
    );
  }
}
