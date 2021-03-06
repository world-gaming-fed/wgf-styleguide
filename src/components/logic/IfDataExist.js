var React = require('react');
var _ = require('lodash');

var IfDataExist = React.createClass({
  propTypes: {
    children: React.PropTypes.element,
    data: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.array,
      React.PropTypes.object
    ])
  },

  isDataExist: function(data) {
    return !_.isEmpty(data);
  },

  render: function() {
    var element = null;

    if (this.isDataExist(this.props.data)) {
      element = this.props.children;
    }

    return element;
  }

});

module.exports = IfDataExist;
