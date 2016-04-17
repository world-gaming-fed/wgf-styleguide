var React = require('react');
var classnames = require('classnames');
var Icon = require('../../../elements').Icon;

var VideoCard = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    name: React.PropTypes.string,
    modifier: React.PropTypes.string
  },

  render: function() {
    var classes = [ 'VideoCard' ];

    if (this.props.modifier) {
      classes.push('VideoCard--' + this.props.modifier);
    }

    return (
      <div className={classnames(classes)}>
        <div className="VideoCard__cover" style={ {backgroundImage: 'url(' + this.props.imgURL + ')'} }/>
        <div className="VideoCard__mask" />
        <div className="VideoCard__title"><h2 className="Title">{this.props.name}</h2></div>
        <div className="VideoCard__play">
          <Icon>music_play_button</Icon>
        </div>
      </div>
    );
  }

});

module.exports = VideoCard;
