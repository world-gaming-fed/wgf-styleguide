var React = require('react');
var PropTypes = React.PropTypes;

var RenderIf = React.createClass({
  propTypes: {
    children: PropTypes.element,
    condition: PropTypes.boolean
  },

  render: function() {
    alert('ouuaaaaaaaaaaaaalé on render!!!!!!', this.props.condition);
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
