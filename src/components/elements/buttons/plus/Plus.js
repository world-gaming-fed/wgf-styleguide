'use strict';

var React = require('react');
var Icon = require('../../icon/Icon');
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
    icon: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      icon: 'arrows_plus'
    };
  },

  render: function() {
    var classes = [ 'Plus', 'Plus--icon-' + this.props.icon ];

    if (this.props.modifier) {
      classes.push('Plus--' + this.props.modifier);
    }

    return (
      <button {...this.props} className={classNames(classes)}>
        <Icon>{this.props.icon}</Icon>
      </button>
    );
  }
});

module.exports = Plus;
