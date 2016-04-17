'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'LoginField',
    description: '',
    code: ``
  }

  render () {
    return (
      <div className="demoSpace th--social">
        <div className="TableFieldContainer">
          <div className="LoginField">
            <div className="LoginField__label"><label htmlFor="email">email</label></div>
            <div className="LoginField__input"><input type="email" id="email" /></div>
          </div>
          <div className="LoginField">
            <div className="LoginField__label"><label htmlFor="password">password</label></div>
            <div className="LoginField__input"><input type="password" id="password"/></div>
          </div>
        </div>
      </div>
    );
  }
}
