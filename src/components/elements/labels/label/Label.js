'use strict';

var React = require('react');

var Label = React.createClass({
  displayName: 'Label',
  propTypes: {
    children: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <span className="Label">{this.props.children}</span>
    );
  }
});

module.exports = Label;
