'use strict'

import React from 'react'
import Icon from './Icon'

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Icon',
    description: 'Put some icon in your life',
    code: `<Icon>icon_name</Icon>`,
    exampleComponent: Icon
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <Icon>loupe</Icon>
        &nbsp;
        <Icon>arrow_plus</Icon>
        &nbsp;
        <Icon>arrow_right</Icon>
      </div>
    )
  }
}
