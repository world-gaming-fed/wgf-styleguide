'use strict';

import React from 'react';
import SimpleOrg from './SimpleOrg';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'SimpleOrg',
    description: 'small organization component, using logo and name',
    code: `
      <SimpleOrg org={organization} img={url}/>
    `,
    exampleComponent: SimpleOrg
  }
  render () {
    var org = {
      name: 'SFR',
      logo: null
    };

    var url = 'http://static.s-sfr.fr/media/logo-3.jpg';

    return (
      <div>
        <div className="th--official">
          <SimpleOrg org={org} img={url}/>
        </div>
        <div className="th--social">
          <SimpleOrg org={org} img={url}/>
        </div>
      </div>
    );
  }
}
