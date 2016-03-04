'use strict';

var React = require('react');

var NotificationsCounter = React.createClass({
  displayName: 'NotificationsCounter',
  propTypes: {
    /**
     * Number to show
     */
    children: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <span className="NotificationsCounter">{this.props.children}</span>
    );
  }
});

module.exports = NotificationsCounter;
