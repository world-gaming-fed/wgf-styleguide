'use strict';

import React from 'react';
var Button = require('./Button')(React);
var BtnContainer = require('../../../containers/btnContainer/BtnContainer');

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
        <BtnContainer>
          <Button className="classTest" icon="arrows_plus">Icon button</Button>
          <Button className="classTest" icon="arrows_plus">
            <span className="state--hover">State hover</span>
            <span className="state--default">State default</span>
          </Button>
          <Button className="classTest">button</Button>
          <Button className="classTest" href="http://example.com/" title="Title test">link</Button>
          <Button className="classTest" modifier="twitter" icon="twitter">02345</Button>
          <Button className="classTest" modifier="facebook" icon="facebook">1k like</Button>
          <Button className="classTest" modifier="youtube" icon="youtube">1k like</Button>
          <Button className="classTest" modifier="callToAction">callToAction</Button>
          <Button className="classTest" modifier="cancel">cancel</Button>
        </BtnContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Modifier: push</h1>
        <BtnContainer>
          <Button className="classTest" modifier="push" icon="arrows_plus">Icon button</Button>
          <Button className="classTest" modifier="push">button</Button>
          <Button className="classTest" modifier="push" href="http://example.com/" title="Title test">link</Button>
          <Button className="classTest" modifier="twitter push" icon="twitter">02345</Button>
          <Button className="classTest" modifier="facebook push" icon="facebook">1k like</Button>
          <Button className="classTest" modifier="youtube push" icon="youtube">1k like</Button>
          <Button className="classTest" modifier="callToAction push">callToAction</Button>
          <Button className="classTest" modifier="cancel push">cancel</Button>
        </BtnContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Modifier: pushForward</h1>
        <BtnContainer>
          <Button className="classTest" modifier="pushForward" icon="arrows_plus">Icon button</Button>
          <Button className="classTest" modifier="pushForward">button</Button>
          <Button className="classTest" modifier="pushForward" href="http://example.com/" title="Title test">link</Button>
          <Button className="classTest" modifier="twitter pushForward" icon="twitter">02345</Button>
          <Button className="classTest" modifier="facebook pushForward" icon="facebook">1k like</Button>
          <Button className="classTest" modifier="youtube pushForward" icon="youtube">1k like</Button>
          <Button className="classTest" modifier="callToAction pushForward">callToAction</Button>
          <Button className="classTest" modifier="cancel pushForward">cancel</Button>
          <Button className="classTest" modifier="pushForward full" href="http://example.com/" title="Title test">link</Button>
        </BtnContainer>
      </div>
    );
  }
}
