'use strict';

import React from 'react';
import MoreCard from './MoreCard';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'MoreCard',
    description: '...',
    code: `<MoreCard label="others prfect games to have fun" [type="game|event"]>+ 121</MoreCard>`,
    exampleComponent: MoreCard
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <MoreCard label="others prfect \n games to have fun">+ 121</MoreCard>
      </div>
    );
  }
}
