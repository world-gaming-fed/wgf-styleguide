'use strict';

import React from 'react';
import SimplePlayer from './SimplePlayer';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'SimplePlayer',
    description: 'small player component, using avatar and alias',
    code: `
      <SimplePlayer user={user} img={url}/>
    `,
    exampleComponent: SimplePlayer
  }
  render () {
    var paul = {
      alias: 'paul',
      avatar: null
    };

    var url = 'https://blog.fr.playstation.com/files/avatars/avatar_128543.jpg';

    return (
      <div>
        <div className="th--official">
          <SimplePlayer player={paul} img={url}/>
        </div>
        <div className="th--social">
          <SimplePlayer player={paul} img={url}/>
        </div>
      </div>
    );
  }
}
