'use strict';

var React = require('react');

var Label = React.createClass({
  displayName: 'Label',
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <span className="Label">{this.props.text}</span>
    );
  }
});

module.exports = Label;
