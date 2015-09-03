var React = require('react');

var ThumbBlock = React.createClass({
  displayName: 'ThumbBlock',
  propTypes: {
    children: React.PropTypes.element,
    head: React.PropTypes.element,
    imageUrl: React.PropTypes.string
  },

  buildHead: function() {
    if (this.props.head) {
      return (
        <div className="ThumbBlock__otherPart__head">
          {this.props.head}
        </div>
      );
    }

    return null;
  },

  render: function() {
    return (
      <div className="ThumbBlock">
        <div className="ThumbBlock__imagePart">
          <img src={this.props.imageUrl} />
        </div>
        <div className="ThumbBlock__otherPart">
          {this.buildHead()}
          <div className="ThumbBlock__otherPart__body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ThumbBlock;
