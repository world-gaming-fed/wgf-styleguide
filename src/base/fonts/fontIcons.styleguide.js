'use strict';

import React from 'react';

export default class extends React.Component {
  static styleguide = {
    category: 'Base',
    title: 'Font Icon',
    description: 'class helper to add icons on your element',
    code: `<MyInlineElement className="wgf-icon-back"/>`
  }

  render () {
    return (
      <div>
        <h1 className="Title">WGF Custom</h1>
        <p className="sg-icon-list">
          <span className="wgf-icon-loupe" title="loupe"></span>
          <span className="wgf-icon-home" title="home"></span>
          <span className="wgf-icon-gamepad" title="gamepad"></span>
          <span className="wgf-icon-tickets" title="tickets"></span>
          <span className="wgf-icon-map" title="map"></span>
          <span className="wgf-icon-flask" title="flask"></span>
        </p>

        <h1 className="Title">Linea</h1>
        <p className="sg-icon-list">
          <span className="wgf-icon-arrows_plus" title="arrows_plus"></span>
          <span className="wgf-icon-arrows_right" title="arrows_right"></span>
          <span className="wgf-icon-arrows_circle_remove" title="arrows_circle_remove"></span>
          <span className="wgf-icon-basic_elaboration_calendar_flagged" title="basic_elaboration_calendar_flagged"></span>
          <span className="wgf-icon-basic_gunsight" title="basic_gunsight"></span>
          <span className="wgf-icon-music_play_button" title="music_play_button"></span>
          <span className="wgf-icon-ecommerce_megaphone" title="ecommerce_megaphone"></span>
          <span className="wgf-icon-ecommerce_diamond" title="ecommerce_diamond"></span>
        </p>

        <h1 className="Title">Social</h1>
        <p className="sg-icon-list">
          <span className="wgf-icon-twitter" title="twitter"></span>
          <span className="wgf-icon-facebook" title="facebook"></span>
        </p>
      </div>
    );
  }
}
