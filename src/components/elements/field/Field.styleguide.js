'use strict';

import React from 'react';
var Field = require('./Field')(React);
import Formsy from 'formsy-react';


export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Field',
    description: 'Create an action or a link button. It accepte all props and complete `className`. Work also with `to` attribute to create a react-router Link',
    code: `
// Require
var Field = require('wgf-styleguide').element.field(React);

// Comopnent use
<Field type="text"/>
    `,
    className: 'app-body get-some-little-space',
    exampleComponent: Field
  }

  render () {
    return (
      <Formsy.Form>
        <Field name="email" label="Email" validateOnLive="true" validations="isEmail" validationError="This is not a valid email"/>
        <Field name="email" label="Playstation Network ID" validateOnLive="true" validations="isEmail" validationError="This is not a valid email"/>
      </Formsy.Form>
    );
  }
}
