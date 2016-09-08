var React = require('react');
var classnames = require('classnames');

var Icon = require('../../../elements/icon/Icon');

var GameCardAdd = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    size: React.PropTypes.string
  },

  render: function() {
    var {text, size, ...other} = this.props;

    var classes = [ {
      GameCardAdd: true
    } ];
    if (size) {
      classes.push('GameCardAdd--' + size);
    }

    return (
      <div className={classnames(classes)} {...other}>
        <div className="GameCardAdd__inner">
          <span className="GameCardAdd__inner__icon"><Icon>gamepad</Icon></span>
          <p className="GameCardAdd__inner__text">{text}</p>
        </div>
      </div>
    );
  }

});

module.exports = GameCardAdd;
