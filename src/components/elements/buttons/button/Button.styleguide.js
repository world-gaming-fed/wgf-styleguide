'use strict'

import React from 'react'
var Button = require('./Button')(React);

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
        <Button className="classTest" icon="arrows_plus">Icon button</Button>
        &nbsp;
        <Button className="classTest">button</Button>
        &nbsp;
        <Button className="classTest" href="http://example.com/" title="Title test">link</Button>
        &nbsp;
        <Button className="Button--twitter classTest" icon="twitter">02345</Button>
        &nbsp;
        <Button className="Button--facebook classTest" icon="facebook">1k like</Button>
      </div>
    )
  }
}
