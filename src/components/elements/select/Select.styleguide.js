'use strict';

import React from 'react';
import Select from './Select';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Select',
    description: 'Customize select',
    code: `
<Select>
  <option>Classic option</option>
  <option>...</option>
</Select>
    `,
    exampleComponent: Select
  }

  render () {
    return (
      <div>
        <div className="demoSpace th--official">
          <Select id="test">
            <option>Classic option</option>
            <option>...</option>
          </Select>
          &nbsp;&nbsp;
          <Select placeholder="Default placeholder">
            <option>Classic option</option>
            <option>...</option>
          </Select>
        </div>
        <div className="demoSpace th--social">
          <Select id="test">
            <option>Classic option</option>
            <option>...</option>
          </Select>
          &nbsp;&nbsp;
          <Select placeholder="Default placeholder">
            <option>Classic option</option>
            <option>...</option>
          </Select>
        </div>
      </div>
    );
  }
}
