'use strict';

import React from 'react';
import VideoCard from './VideoCard';

export default class extends React.Component {
  static styleguide = {
    category: 'Blocks',
    title: 'VideoCard',
    description: '...',
    code: `<VideoCard name="Game Name" viewers="3528" imgURL="/assets/img/no-cover.jpg" />`,
    exampleComponent: VideoCard
  }

  render () {
    return (
      <div className="demoSpace th--official">
        <VideoCard name="Game Name" imgURL="/assets/img/no-cover.jpg" />
        <br />
        <VideoCard name="Game Name" modifier="highlight" imgURL="/assets/img/no-cover.jpg" />
        <VideoCard name="Final Fantasy XV" viewers="15342" modifier="highlight" imgURL="/assets/img/no-cover.jpg" />
      </div>
    );
  }
}
