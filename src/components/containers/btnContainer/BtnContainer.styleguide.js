'use strict'

import React from 'react'
import BtnContainer from './BtnContainer'
var Button = require('../../elements/button/Button')(React);

export default class extends React.Component {
  static styleguide = {
    category: 'Containers',
    title: 'BtnContainer',
    description: 'Container for button with particular adjustement for buttons.',
    code: `
<BtnContainer [modifiers="full"]>
  [Buttons]
</BtnContainer>
    `,
    exampleComponent: BtnContainer
  }

  render () {
    return (
      <div>
        <h5>Default example</h5>
        <BtnContainer>
          <Button>Test</Button>
          <Button>Test</Button>
        </BtnContainer>
        <hr/>
        <h5>full modifiers example</h5>
        <BtnContainer modifiers="full">
          <Button>Test</Button>
          <Button>Test</Button>
        </BtnContainer>
      </div>
    )
  }
}
