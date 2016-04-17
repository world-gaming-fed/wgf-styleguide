'use strict';

var React = require('react');
var classNames = require('classnames');

var Plus = React.createClass({
  displayName: 'Plus',

  propTypes: {
    /**
     * Modifier: `head|subHead`
     */
    modifier: React.PropTypes.string
  },

  render: function() {
    var classes = [ 'Plus' ];

    if (this.props.modifier) {
      classes.push('Plus--' + this.props.modifier);
    }

    return (
      <button className={classNames(classes)}>
        <span className="wgf-icon-arrows_plus"></span>
      </button>
    );
  }
});

module.exports = Plus;
