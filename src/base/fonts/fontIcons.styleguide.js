'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    category: 'Base',
    title: 'Font Icon',
    description: 'class helper to add icons on your element',
    code: `<MyInlineElement className="wgf-icon-back"/>`
  }

  render () {
    return (
      <p className="sg-icon-list">
        <span className="wgf-icon-arrows_plus"></span>
        <span className="wgf-icon-arrows_right"></span>
        <span className="wgf-icon-twitter"></span>
        <span className="wgf-icon-facebook"></span>
        <span className="wgf-icon-loupe"></span>
      </p>
    );
  }
}
