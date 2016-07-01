var React = require('react');
var classnames = require('classnames');
var Icon = require('../../../elements').Icon;

var VideoCard = React.createClass({
  propTypes: {
    imgURL: React.PropTypes.string,
    name: React.PropTypes.string,
    viewers: React.PropTypes.string,
    modifier: React.PropTypes.string
  },

  render: function() {
    var classes = [ 'VideoCard' ];
    var renderViewers = null;
    if (this.props.modifier) {
      classes.push('VideoCard--' + this.props.modifier);
    }

    if(this.props.viewers) {
      renderViewers = (
        <div className="VideoCard__text__viewers">
          <Icon>basic_eye</Icon>
          {this.props.viewers}
        </div>
      );
    }

    return (
      <div className={classnames(classes)}>
        <div className="VideoCard__cover" style={ {backgroundImage: 'url(' + this.props.imgURL + ')'} }/>
        <div className="VideoCard__mask" />
        <div className="VideoCard__text">
          <h2 className="Title">{this.props.name}</h2>
          {renderViewers}
        </div>
        <div className="VideoCard__play">
          <Icon>music_play_button</Icon>
        </div>
      </div>
    );
  }

});

module.exports = VideoCard;
