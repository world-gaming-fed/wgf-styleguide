'use strict';

import React from 'react';
import AddGame from './AddGame';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'AddGame',
    description: '',
    code: `<AddGame [modifier="main"]/>`,
    exampleComponent: AddGame
  }

  render () {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="demoSpace th--social" style={{textAlign: 'center'}}>
          <AddGame
            model={[ 'PS4', 'PC' ]}
            changeHandler={this.tata}
            buttons={[ 'PS4', 'PS3', 'SATURN', 'IOS', 'N-GAG', 'NGC', 'Wii U', 'PC' ]}/>
        </div>
        <div className="demoSpace th--official">
          <AddGame />
        </div>
      </div>
    );
  }
}
