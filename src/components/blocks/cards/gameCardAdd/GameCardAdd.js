var React = require('react');
var classnames = require('classnames');

var Icon = require('../../../elements/icon/Icon');

var GameCardAdd = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    size: React.PropTypes.string
  },

  render: function() {
    var classes = [ {
      GameCardAdd: true
    } ];
    if (this.props.size) {
      classes.push('GameCardAdd--' + this.props.size);
    }
    return (
      <div className={classnames(classes)} {...this.props}>
        <div className="GameCardAdd__inner">
          <span className="GameCardAdd__inner__icon"><Icon>gamepad</Icon></span>
          <p className="GameCardAdd__inner__text">{this.props.text}</p>
        </div>
      </div>
    );
  }

});

module.exports = GameCardAdd;
