var React = require('react');

var SteamGameCard = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="SteamGameCard">
        <img src={this.props.imgURL} alt={this.props.name}/>
      </div>
    );
  }

});

module.exports = SteamGameCard;
