'use strict';

var React = require('react');
var Avatar = require('../../elements/avatar/Avatar');

var SimpleOrg = React.createClass({
  displayName: 'SimpleOrg',
  propTypes: {
    org: React.PropTypes.object.isRequired,
    img: React.PropTypes.string.isRequired,
    img2x: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="SimpleOrg">
        <div className="SimpleOrg__logo">
          <Avatar format="org" size="small" url={this.props.img} url2x={this.props.img2x} />
        </div>
        <span className="SimpleOrg__name">
          {this.props.org.name}
        </span>
      </div>
    );
  }
});

module.exports = SimpleOrg;
