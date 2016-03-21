'use strict';

import React from 'react';
import IconList from './IconList';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'IconList',
    description: 'IconList for metadata',
    code: `...`,
    exampleComponent: IconList
  }

  render () {
    return (
      <div className="th--official--hue2">
        <IconList>
          <li icon="gamepad">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </li>
          <li icon="gamepad">
            <div>Truc dans une div</div>
          </li>
          <li icon="loupe">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </li>
        </IconList>
        <IconList>
          <li icon="gamepad">
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </li>
        </IconList>
      </div>
    );
  }
}
