'use strict';

import React from 'react';
import SimpleUser from './SimpleUser';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'SimpleUser',
    description: 'small user component, using avatar and nickname',
    code: `
      <SimpleUser user={user} img={url}/>
    `,
    exampleComponent: SimpleUser
  }
  render () {
    var paul = {
      nickname: 'paul',
      avatar: null
    };

    var url = 'https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg';

    return (
      <div>
        <div className="th--official">
          <SimpleUser user={paul} img={url}/>
        </div>
        <div className="th--social">
          <SimpleUser user={paul} img={url}/>
        </div>
      </div>
    );
  }
}
