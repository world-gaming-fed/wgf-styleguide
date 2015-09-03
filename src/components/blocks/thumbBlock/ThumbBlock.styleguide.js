'use strict'

import React from 'react'
import ThumbBlock from './ThumbBlock'

export default class extends React.Component {
  static styleguide = {
    category: 'Block',
    title: 'ThumbBlock',
    description: 'Created to display litle picture with a more or less complex right part.',
    code: `
<ThumbBlock [imageUrl="http:\/\/placehold.it/150x350"] [head={element}]>
  [HTML Content]
</ThumbBlock>
    `,
    exampleComponent: ThumbBlock,
    examples: [{
      tabTitle: 'Without image',
      props: {
        head: 'test',
        children: '[HTML Content]'
      }
    }, {
      tabTitle: 'Without image and title',
      props: {
        children: '[HTML Content]'
      }
    }]
  }

  render () {
    var head = (
      <h1>Test</h1>
    )

    return (
    <div>
      <ThumbBlock head={head} imageUrl="http:\/\/placehold.it/150x250">
        <p>Content</p>
      </ThumbBlock>
    </div>
    )
  }
}
