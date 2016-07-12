'use strict';

import React from 'react';
import MenuLabel from './MenuLabel';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'MenuLabel',
    description: 'Created a display for menu item',
    code: `
<MenuLabel theme="official-alt" icon="iconName">
  <span>Text Menu</span>
</MenuLabel>
    `,
    exampleComponent: MenuLabel
  }

  render () {
    return (
      <div>
        <MenuLabel theme="official--alt" icon="loupe">
          <span>HOMEPAGE</span>
        </MenuLabel>
        <div className="state--active">
          <MenuLabel theme="official--alt" icon="loupe" >
            <span>GAMES</span>
          </MenuLabel>
        </div>
        <MenuLabel theme="official" icon="loupe">
          <span>PLAYERS</span>
        </MenuLabel>
        <MenuLabel theme="official--alt" icon="loupe" mirror={true}>
          <span>HOMEPAGE</span>
        </MenuLabel>
        <div className="state--active">
          <MenuLabel theme="official" icon="loupe" mirror={true}>
            <span>PLAYERS</span>
          </MenuLabel>
        </div>
        <MenuLabel theme="official" icon="loupe" mirror={true}>
          <span>GAMES</span>
        </MenuLabel>
      </div>
    );
  }
}
