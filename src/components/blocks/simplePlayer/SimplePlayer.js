'use strict';

var React = require('react');
var Avatar = require('../../elements/avatar/Avatar');

var SimplePlayer = React.createClass({
  displayName: 'SimplePlayer',
  propTypes: {
    player: React.PropTypes.object.isRequired,
    img: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="SimplePlayer">
        <div className="SimplePlayer__avatar">
          <Avatar size="small" url={this.props.img} />
        </div>
        <span className="SimplePlayer__alias">
          {this.props.player.alias}
        </span>
      </div>
    );
  }
});

module.exports = SimplePlayer;
