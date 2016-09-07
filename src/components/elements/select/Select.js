'use strict';

var React = require('react');

var Select = React.createClass({
  displayName: 'Select',
  propTypes: {
    /**
    * Only option elements
    */
    children: React.PropTypes.node,
    /**
    * Placeholder text to build default option
    */
    placeholder: React.PropTypes.string
  },
  buildPlaceholderOption: function(placeholder) {
    if (placeholder) {
      return (<option>{ placeholder }</option>);
    }
    return null;
  },
  render: function() {
    var {placeholder, ...other} = this.props;

    return (
      <div className="Select">
        <select {...other} className="Select__nativeEl">
          { this.buildPlaceholderOption(placeholder) }
          { this.props.children }
        </select>
      </div>
    );
  }
});

module.exports = Select;
