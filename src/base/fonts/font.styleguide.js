'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    index: '1',
    category: 'Base',
    title: 'Font',
    description: 'Simply include the google font on your page',
    code: `
<link href="\/\/fonts.googleapis.com/css?family=Lato:300,400,700,400italic" rel="stylesheet" />
    `,
    className: 'displayNone'
  }

  render () {
    return (<div></div>);
  }
}
