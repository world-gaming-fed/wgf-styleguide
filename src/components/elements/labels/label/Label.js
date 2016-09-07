'use strict';

var React = require('react');
var applyClassNameModifier = require('../../../../utils/applyClassNameModifier');

var Label = React.createClass({
  displayName: 'Label',
  propTypes: {
    children: React.PropTypes.string,
    modifiers: React.PropTypes.string
  },
  render: function() {
    var classes = applyClassNameModifier('Label', this.props.modifiers);
    return (
      <span className={classes}>{this.props.children}</span>
    );
  }
});

module.exports = Label;
