'use strict';

import React from 'react';
import GameCard from './GameCard';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'GameCard',
    description: '...',
    code: `<GameCard name="Game Name" imgURL="/assets/img/no-cover.jpg" />`,
    exampleComponent: GameCard
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <GameCard name="Game Name" imgURL="/assets/img/no-cover.jpg" />
      </div>
    );
  }
}
