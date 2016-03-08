'use strict'

import React from 'react'
import ContentPak from './ContentPak'
import Label from '../../elements/labels/label/Label'
import Plus from '../../elements/buttons/plus/Plus'
import Avatar from '../../elements/avatar/Avatar'

export default class extends React.Component {
  static styleguide = {
    category: 'Elements',
    title: 'ContentPak',
    description: '',
    code: `<ContentPak>[HTML]</ContentPak>`,
    exampleComponent: ContentPak,
    className: 'no-v-space'
  }

  render () {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ContentPak theme="official">
          <img src="http://www.fifplay.com/images/public/pes-2016-cover-xbox-one.jpg" className="Cover"/>
          <div>
            <h1 className="Title Title--head">Pro evolution soccer 2016</h1>
            <p>#pes #soccer</p>
          </div>
          <Plus modifier="main"/>
        </ContentPak>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ContentPak theme="social">
          <img src="http://www.fifplay.com/images/public/pes-2016-cover-xbox-one.jpg" className="Cover"/>
          <div>
            <h1 className="Title Title--head">Pro evolution soccer 2016</h1>
            <p>#pes #soccer</p>
          </div>
          <Plus modifier="main"/>
        </ContentPak>
      </div>
    )
  }
}
