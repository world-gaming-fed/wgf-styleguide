var React = require('react');

var BottomBar = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render: function() {
    return (
      <div className="BottomBar">
        <div className="BottomBar__content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = BottomBar;
