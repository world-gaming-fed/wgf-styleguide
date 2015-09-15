var React = require('react');
var PropTypes = React.PropTypes;

var RenderIf = React.createClass({
  propTypes: {
    children: PropTypes.element,
    condition: PropTypes.bool
  },

  render: function() {
    if (!this.props.condition) {
      return null
    }
    else {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }

});

module.exports = RenderIf;
