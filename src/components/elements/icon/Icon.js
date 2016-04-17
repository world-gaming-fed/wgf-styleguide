'use strict';

var React = require('react');
var classNames = require('classnames');

var Icon = React.createClass({
  displayName: 'Icon',
  propTypes: {
    children: React.PropTypes.string.isRequired
  },
  render: function() {
    var classes = 'wgf-icon-';
    if (this.props.children) {
      classes += this.props.children;
    }
    return (
      <span className={classNames(classes)}></span>
    );
  }
});

module.exports = Icon;
