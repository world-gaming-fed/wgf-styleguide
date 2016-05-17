'use strict';

var React = require('react');
var classnames = require('classnames');

var EventCard = React.createClass({
  displayName: 'EventCard',
  propTypes: {
    children: React.PropTypes.element,
    name: React.PropTypes.string.isRequired,
    imgURL: React.PropTypes.string,
    imgURL2x: React.PropTypes.string,
    label: React.PropTypes.string,
    /**
     * size of card in enum : small | (nothing to normal size)
     */
    size: React.PropTypes.oneOf([ 'small' ])
  },
  buildLabel: function(label) {
    if (!label) {
      return null;
    }

    return (
      <span className="EventCard__label">{label}</span>
    );
  },
  render: function() {
    var label = this.buildLabel(this.props.label);
    var cover2x = null;

    var classes = [ {
      EventCard: true,
      'state--labelize': !!label,
      'state--hasPlusElement': !!this.props.children
    } ];

    if (this.props.size) {
      classes.push('EventCard--' + this.props.size);
    }

    if (this.props.imgURL2x) {
      cover2x = (<div className="EventCard__cover" style={{backgroundImage: '-webkit-image-set(url("' + this.props.imgURL + '") 1x, url("' + this.props.imgURL2x + '") 2x)'}}></div>);
    }

    return (
      <div className={classnames(classes)}>
        <div className="EventCard__cover" style={{backgroundImage: 'url(' + this.props.imgURL + ')'}}></div>
        {cover2x}
        <div className="EventCard__mask"></div>
        {label}
        <div className="EventCard__content">
          <div className="EventCard__content__title"><h2 className="Title">{this.props.name}</h2></div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = EventCard;
