'use strict';

var React = require('react');

var ContentHead = React.createClass({
  displayName: 'ContentHead',
  propTypes: {
    children: React.PropTypes.node
  },
  render: function() {
    return (
      <div {...this.props} className="ContentHead">
        { this.props.children }
      </div>
    );
  }
});

module.exports = ContentHead;
