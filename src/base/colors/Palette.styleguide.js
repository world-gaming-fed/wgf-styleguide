'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    category: 'Base',
    title: 'Palette',
    description: 'complete color palette possible to use',
    code: `
    // Stylus
    background-color: $palette.whiteGrey`
  }

  render () {
    return (
      <div>
        <span className="demoPalette demoPalette--white">#white</span>
        <span className="demoPalette demoPalette--whiteGrey">#whiteGrey</span>
        <span className="demoPalette demoPalette--dustyLavender">#dustyLavender</span>
        <span className="demoPalette demoPalette--coolGrey">#coolGrey</span>
        <span className="demoPalette demoPalette--gunmetal">#gunmetal</span>
        <span className="demoPalette demoPalette--charcoalGrey">#charcoalGrey</span>
        <span className="demoPalette demoPalette--darkGrey">#darkGrey</span>
        <span className="demoPalette demoPalette--lightBlueGrey">#lightBlueGrey</span>
        <span className="demoPalette demoPalette--cloudyBlue">#cloudyBlue</span>
        <span className="demoPalette demoPalette--coolBlue">#coolBlue</span>
        <span className="demoPalette demoPalette--mutedBlue">#mutedBlue</span>
        <span className="demoPalette demoPalette--petrol">#petrol</span>
        <span className="demoPalette demoPalette--navy">#navy</span>
        <span className="demoPalette demoPalette--mango">#mango</span>
        <span className="demoPalette demoPalette--orangeRed">#orangeRed</span>
        <span className="demoPalette demoPalette--tomatoRed">#tomatoRed</span>
      </div>
    );
  }
}
