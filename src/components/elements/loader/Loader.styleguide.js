'use strict';

import React from 'react';
import Loader from './Loader';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Loader',
    description: 'Loader animate',
    code: `
    <Loader />
    `,
    exampleComponent: Loader
  }

  render () {
    return (
      <div className="contentLoader">
        <Loader />
      </div>
    );
  }
}
