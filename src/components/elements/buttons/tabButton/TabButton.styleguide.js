'use strict';

import React from 'react';
import TabButton from './TabButton';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'TabButton',
    description: 'Label component, initialy created for plateforme label.',
    code: `<Label>Any string</Label>`,
    exampleComponent: TabButton
  }

  render () {
    return (
      <div>
        <div className="demoSpace th--official">
          <TabButton active={true}>All Players</TabButton>
          <TabButton>All Teams</TabButton>
          <TabButton>All Fans</TabButton>
        </div>
        <div className="demoSpace th--social">
          <TabButton active={true}>All Players</TabButton>
          <TabButton>All Teams</TabButton>
          <TabButton>All Fans</TabButton>
        </div>
        <div className="demoSpace th--official--hue1">
          <TabButton active={true}>All Players</TabButton>
          <TabButton>All Teams</TabButton>
          <TabButton>All Fans</TabButton>
        </div>
      </div>
    );
  }
}
