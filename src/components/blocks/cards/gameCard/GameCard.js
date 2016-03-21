var React = require('react');

var Card = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="Card">
        <div className="Card__cover" style={{backgroundImage: 'url(' + this.props.imgURL + ')'}}></div>
        <div className="Card__mask">
          <div className="Card__title"><h2 className="Title">{this.props.name}</h2></div>
        </div>
      </div>
    );
  }

});

module.exports = Card;
