'use strict';

import React from 'react';
import Avatar from './Avatar';

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'Avatar',
    description: 'Avatar face!',
    code: `
<Avatar url="https:\/\/blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
<Avatar size="medium" url="https:\/\/blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
<Avatar size="large" url="https:\/\/blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />

<Avatar format="org" url="https:\/\/blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
<Avatar format="org" size="medium" url="https:\/\/blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
<Avatar format="org" size="large" url="https:\/\/blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
    `,
    exampleComponent: Avatar
  }
  render () {
    return (
      <div>
        <div className="demoSpace th--official">
          &nbsp; &nbsp; &nbsp;
          <Avatar url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar size="x-large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Avatar format="org" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar format="org" size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar format="org" size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
        </div>
        <div className="demoSpace th--social">
          &nbsp; &nbsp; &nbsp;
          <Avatar url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Avatar format="org" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar format="org" size="medium" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
          &nbsp; &nbsp;
          <Avatar format="org" size="large" url="https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg" />
        </div>
      </div>
    );
  }
}
