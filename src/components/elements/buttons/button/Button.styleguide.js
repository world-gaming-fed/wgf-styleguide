'use strict';

import React from 'react';
var Button = require('./Button')(React);

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Button',
    description: 'Create an action or a link button. It accepte all props and complete `className`. Work also with `to` attribute to create a react-router Link',
    code: `<Button [modifier="(facebook|twitter) callToAction pushForward"]>Awesome Button</Button>`,
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
        <Button className="classTest" modifier="twitter" icon="twitter">02345</Button>
        &nbsp;
        <Button className="classTest" modifier="facebook" icon="facebook">1k like</Button>
        <br/>
        <br/>
        <div>
          <h1>Modifier: callToAction</h1>
          <Button className="classTest" modifier="callToAction">button</Button>
        </div>
        <br/>
        <br/>
        <div>
          <h1>Modifier: callToAction and pushForward</h1>
          <Button className="classTest" modifier="callToAction pushForward">Continue</Button>
        </div>
        <div>
          <h1>Modifier: cancel and pushForward</h1>
          <Button className="classTest" modifier="cancel pushForward">Cancel</Button>
        </div>
      </div>
    );
  }
}
