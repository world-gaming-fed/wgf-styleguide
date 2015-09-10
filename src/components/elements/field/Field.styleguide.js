'use strict'

import React from 'react'
import Field from './Field'
import Router from 'react-router'
import Formsy from 'formsy-react'

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Field',
    description: 'Create an action or a link button. It accepte all props and complete `className`. Work also with `to` attribute to create a react-router Link',
    code: `<Field type="text"/>`,
    className: 'app-body get-some-little-space',
    exampleComponent: Field
  }

  render () {
    return (
      <Formsy.Form>
        <Field name="email" label="Email" validations="isEmail" validationError="This is not a valid email" required/>
      </Formsy.Form>
    )
  }
}
