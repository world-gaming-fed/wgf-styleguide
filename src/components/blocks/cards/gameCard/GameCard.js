var React = require('react');
var classnames = require('classnames');

var GameCard = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    name: React.PropTypes.string,
    size: React.PropTypes.string
  },

  render: function() {
    var classes = [ {
      GameCard: true
    } ];
    if (this.props.size) {
      classes.push('GameCard--' + this.props.size);
    }
    return (
      <div className={classnames(classes)}>
        <div className="GameCard__cover" style={{backgroundImage: 'url(' + this.props.imgURL + ')'}}></div>
        <div className="GameCard__mask">
          <div className="GameCard__title"><h2 className="Title">{this.props.name}</h2></div>
        </div>
      </div>
    );
  }

});

module.exports = GameCard;
