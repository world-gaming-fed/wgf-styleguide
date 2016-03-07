'use strict'

import React from 'react'
import Avatar from './Avatar'

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
      <div>
        <div className="demoSpace th--official">
          <Avatar url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <Avatar format="org" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="org" size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="org" size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="user" size="small" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="user" size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="user" size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
        </div>
        <div className="demoSpace th--social">
          <Avatar url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <Avatar format="org" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="org" size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="org" size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="user" size="small" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="user" size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp;
          <Avatar format="user" size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
        </div>
      </div>
    )
  }
}
