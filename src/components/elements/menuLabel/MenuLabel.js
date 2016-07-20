'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var Icon = require('../icon/Icon');
var classNames = require('classnames');

var MenuLabel = React.createClass({
  displayName: 'MenuLabel',
  propTypes: {
    /**
     * HTML to use as text
     */
    children: React.PropTypes.element,
    /**
     * theme to use
     */
    theme: PropTypes.string,
    /**
     * Define icon to use
     */
    icon: PropTypes.string,
    /**
    * Define mirror style
    */
    mirror: PropTypes.bool
  },

  render: function() {
    var classes = [ 'MenuLabel' ];
    if (this.props.mirror) {
      classes.push('MenuLabel--right');
    }
    else {
      classes.push('MenuLabel--left');
    }
    if (this.props.theme) {
      classes.push(' th--' + this.props.theme);
    }
    return (
      <span className={classNames(classes)}>
        <span className="MenuLabel__text">
        {this.props.children}
        </span>
        <Icon>{this.props.icon}</Icon>
      </span>
    );
  }
});

module.exports = MenuLabel;
