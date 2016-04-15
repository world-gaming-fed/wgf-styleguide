'use strict';

var React = require('react');
var Avatar = require('../../elements/avatar/Avatar');

var SimpleOrg = React.createClass({
  displayName: 'SimpleOrg',
  propTypes: {
    org: React.PropTypes.object.isRequired,
    img: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="SimpleOrg">
        <div className="SimpleOrg__logo">
          <Avatar format="org" size="small" url={this.props.img} />
        </div>
        <span className="SimpleOrg__name">
          {this.props.org.name}
        </span>
      </div>
    );
  }
});

module.exports = SimpleOrg;
