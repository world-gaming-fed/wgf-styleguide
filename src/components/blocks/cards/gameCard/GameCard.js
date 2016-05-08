var React = require('react');
var classnames = require('classnames');

var GameCard = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    imgURL2x: React.PropTypes.string,
    name: React.PropTypes.string,
    size: React.PropTypes.string
  },

  render: function() {
    var classes = [ 'GameCard' ];
    var cover2x = null;

    if (this.props.size) {
      classes.push('GameCard--' + this.props.size);
    }

    if (this.props.imgURL2x) {
      cover2x = (<div className="GameCard__cover" style={{backgroundImage: '-webkit-image-set(url("' + this.props.imgURL + '") 1x, url("' + this.props.imgURL2x + '") 2x)'}}></div>);
    }

    return (
      <div className={classnames(classes)}>
        <div className="GameCard__cover" style={{backgroundImage: 'url(' + this.props.imgURL + ')'}}></div>
        {cover2x}
        <div className="GameCard__mask">
          <div className="GameCard__title"><h2 className="Title">{this.props.name}</h2></div>
        </div>
      </div>
    );
  }

});

module.exports = GameCard;
