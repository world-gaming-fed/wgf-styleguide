'use strict';

import React from 'react';
import GameCardAdd from './GameCardAdd';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'GameCardAdd',
    description: '...',
    code: `<GameCardAdd text="Game Name" />`,
    exampleComponent: GameCardAdd
  }

  render () {
    return (
      <div className="demoSpace th--official sg-inline-list">
        <GameCardAdd text="Add a game to your collection" />
        <GameCardAdd text="Add a game to your collection" size="large" />
      </div>
    );
  }
}
