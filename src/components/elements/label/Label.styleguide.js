'use strict'

import React from 'react'
import Label from './Label'

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Label',
    description: 'Label component, initialy created for plateforme label.',
    code: `<Label text="String" />`,
    exampleComponent: Label
  }

  render () {
    return (
      <Label text="ps4" />
    )
  }
}
