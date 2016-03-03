'use strict'

import React from 'react';
import LinkTitle from './LinkTitle';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Link Title',
    description: 'Clickable Title. Can handle any link props',
    exampleComponent: LinkTitle,
    code: `<LinkTitle anyProps headingLevel={Int} titleModifier="head|subHead">Link Title label</LinkTitle>`
  }

  render () {
    return(
      <div>
        <div className="demoSpace th--social">
          <LinkTitle href="#" titleModifier="head">Head</LinkTitle>
          <LinkTitle href="#" titleModifier="subHead">Sub Head</LinkTitle>
          <LinkTitle href="#" headingLevel={3}>Default</LinkTitle>
        </div>
        <div className="demoSpace th--official">
          <LinkTitle href="#" titleModifier="head">Head</LinkTitle>
          <LinkTitle href="#" titleModifier="subHead">Sub Head</LinkTitle>
          <LinkTitle href="#" headingLevel={3}>Default</LinkTitle>
        </div>
      </div>
    )
  }
}
