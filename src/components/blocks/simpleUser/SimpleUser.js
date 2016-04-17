'use strict';

var React = require('react');
var Avatar = require('../../elements/avatar/Avatar');

var SimpleUser = React.createClass({
  displayName: 'SimpleUser',
  propTypes: {
    user: React.PropTypes.object.isRequired,
    img: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="SimpleUser">
        <div className="SimpleUser__avatar">
          <Avatar size="small" url={this.props.img} />
        </div>
        <span className="SimpleUser__nickname">
          {this.props.user.nickname}
        </span>
      </div>
    );
  }
});

module.exports = SimpleUser;
