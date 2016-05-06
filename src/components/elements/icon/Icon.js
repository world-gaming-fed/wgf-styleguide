'use strict';

var React = require('react');
var classNames = require('classnames');

var Icon = React.createClass({
  displayName: 'Icon',
  propTypes: {
    children: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  render: function() {
    var classes = ['wgf-icon-'];
    if (this.props.children) {
      classes[0] += this.props.children;
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return (
      <span className={classNames(classes)}></span>
    );
  }
});

module.exports = Icon;
