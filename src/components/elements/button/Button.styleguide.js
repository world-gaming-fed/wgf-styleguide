'use strict'

import React from 'react'
var Button = require('./Button')(React);
import Router from 'react-router'

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Button',
    description: 'Create an action or a link button. It accepte all props and complete `className`. Work also with `to` attribute to create a react-router Link',
    code: `<Button>Awesome Button</Button>`,
    exampleComponent: Button
  }

  render () {
    return (
      <div>
        <Button className="classTest">button</Button>
        &nbsp;
        <Button className="classTest" href="http://example.com/" title="Title test">link</Button>
      </div>
    )
  }
}
