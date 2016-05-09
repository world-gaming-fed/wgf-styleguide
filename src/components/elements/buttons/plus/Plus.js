'use strict';

var React = require('react');
var Icon = require('../../icon/Icon');
var Loader = require('../../loader/Loader');
var classNames = require('classnames');

var Plus = React.createClass({
  displayName: 'Plus',

  propTypes: {
    /**
     * Modifier: `head|subHead`
     */
    modifier: React.PropTypes.string,
    /**
     * Icon: can take any know icon
     */
    icon: React.PropTypes.string,

    loader: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      icon: 'arrows_plus',
      loader: false
    };
  },

  buildIcon: function() {
    if (this.props.loader) {
      return (
        <Loader />
      );
    } else {
      return (
        <Icon>{this.props.icon}</Icon>
      );
    }
  },

  render: function() {
    var classes = [ 'Plus', 'Plus--icon-' + this.props.icon ];

    if (this.props.loader) {
      classes.push('state--loading');
    } else {
      classes.push('state--notLoading');
    }

    if (this.props.modifier) {
      classes.push('Plus--' + this.props.modifier);
    }

    return (
      <button {...this.props} className={classNames(classes)}>
        {this.buildIcon()}
      </button>
    );
  }
});

module.exports = Plus;
