'use strict';

import React from 'react';
import Avatar from './Avatar';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Avatar',
    description: 'Avatar face!',
    code: `<Avatar>Any string</Avatar>`,
    exampleComponent: Avatar
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <Avatar url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
      </div>
    );
  }
}
