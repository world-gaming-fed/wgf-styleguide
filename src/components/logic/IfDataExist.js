var React = require('react');
var PropTypes = React.PropTypes;

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
    var isExist = false;
    if (data) {
      switch(typeof data) {
        case 'string':
        case 'array':
          isExist = !!data.length;
          break;
        default:
          isExist = true;
      }
    }
    return isExist;
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
