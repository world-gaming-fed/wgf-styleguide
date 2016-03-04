'use strict'

import React from 'react'
import NotificationsCounter from './NotificationsCounter'

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'NotificationsCounter',
    description: 'Notification bubble counter used in the header for example',
    code: `<NotificationsCounter>3</NotificationsCounter>`,
    exampleComponent: NotificationsCounter
  }

  render () {
    return (
      <div>
        <span className="NotificationsCounter">4</span>
        &nbsp;
        <span className="NotificationsCounter">99+</span>
      </div>
    )
  }
}
