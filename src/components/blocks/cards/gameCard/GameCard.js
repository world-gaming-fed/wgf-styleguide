var React = require('react');

var GameCard = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="GameCard">
        <div className="GameCard__cover" style={{backgroundImage: 'url(' + this.props.imgURL + ')'}}></div>
        <div className="GameCard__mask">
          <div className="GameCard__title"><h2 className="Title">{this.props.name}</h2></div>
        </div>
      </div>
    );
  }

});

module.exports = GameCard;
